import React, { useState } from "react"
import { withRouter } from "react-router"
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
    const { history } = props
    const [isCollapsed, setIsCollapsed] = useState(false)

    const onCollapse = (collapsed) => {
        setIsCollapsed(collapsed)
    }

    const handleClick = (event) => {
        switch (event.key) {
            case "1":
                history.push('/admin')
                break
            case "21":
                history.push('/admin/blog')
                break
            case "22":
                history.push('/admin/blog/create')
                break
            default:
                break
        }
    }

    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <Menu onClick={handleClick} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Thống Kê
                </Menu.Item>
                <SubMenu key="2" icon={<DesktopOutlined />} title="Bài Viết">
                    <Menu.Item key="21">Danh sách</Menu.Item>
                    <Menu.Item key="22">Tạo mới</Menu.Item>
                </SubMenu>
                <SubMenu key="3" icon={<UserOutlined />} title="User">
                    <Menu.Item key="31">Tom</Menu.Item>
                    <Menu.Item key="32">Bill</Menu.Item>
                    <Menu.Item key="33">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="4" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default withRouter(Sidebar)