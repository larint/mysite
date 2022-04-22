import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Layout, Menu } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'

const { Sider } = Layout
const { SubMenu } = Menu

const Sidebar = (props) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
    const [defaultOpenKeys, setDefaultOpenKeys] = useState([])

    const onCollapse = (collapsed) => {
        setIsCollapsed(collapsed)
    }

    useEffect(() => {
        if (pathname == '/admin') {
            setDefaultOpenKeys(['1'])
        }
        if (pathname.includes('/admin/blog')) {
            setDefaultOpenKeys(['2'])
            if (pathname == '/admin/blog') {
                setDefaultSelectedKeys(['21'])
            }
            if (pathname == '/admin/blog/create') {
                setDefaultSelectedKeys(['22'])
            }
        }
        if (pathname == '/admin/info') {
            setDefaultOpenKeys(['5'])
        }
    }, [])

    const handleClick = (event) => {
        let OpenKeys = ['1']
        let SelectedKeys = []
        switch (event.key) {
            case "1":
                navigate('/admin')
                OpenKeys = ['1']
                SelectedKeys = ['']
                break
            case "21":
                navigate('/admin/blog')
                OpenKeys = ['2']
                SelectedKeys = ['21']
                break
            case "22":
                navigate('/admin/blog/create')
                OpenKeys = ['2']
                SelectedKeys = ['22']
                break
            case "5":
                navigate('/admin/info')
                OpenKeys = ['5']
                SelectedKeys = []
                break
            default:
                break
        }
        setDefaultOpenKeys(OpenKeys)
        setDefaultSelectedKeys(SelectedKeys)
    }

    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            {defaultOpenKeys.length > 0 && (
                <Menu
                    onClick={handleClick}
                    theme="dark"
                    defaultOpenKeys={defaultOpenKeys}
                    defaultSelectedKeys={defaultSelectedKeys}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Thống Kê
                    </Menu.Item>
                    <SubMenu key="2" icon={<DesktopOutlined />} title="Bài Viết">
                        <Menu.Item key="21">Danh sách</Menu.Item>
                        <Menu.Item key="22">Tạo mới</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5" icon={<FileOutlined />}>
                        Thông tin
                    </Menu.Item>
                </Menu>

            )}
        </Sider>
    )
}

export default Sidebar