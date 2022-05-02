import React, { useState } from "react"
import { Sidebar } from './_components'
import { ConfigProvider, Layout, message, Row, Col, Radio, Button, Tooltip } from 'antd'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import * as API from "../../common/api"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

import {
    LogoutOutlined
} from '@ant-design/icons'
import { useTranslation } from "react-i18next"


const { Header, Content, Footer } = Layout

const Main = (props) => {
    const navigate = useNavigate()
    const { children } = props
    const [auth, setAuth] = useState(false)
    const { t, i18n } = useTranslation()

    const childrenWithProps = React.Children.map(children, (element) =>
        React.cloneElement(element, {
            auth: auth,
        })
    )

    useQuery(
        [API.API_AD_CHECK_AUTH], () => API.checkAuth({}),
        {
            onSuccess: (response) => {
                if (response.status == 200) {
                    setAuth(response?.data)
                } else {
                    setAuth({})
                    navigate('/admin/login')
                }
            },
            onError: (error) => {
                setAuth({})
                navigate('/admin/login')
            }
        }
    )

    const doLogout = useMutation(API.doLogout, {
        onSuccess: (response) => {
            if (response.status == 200) {
                navigate('/admin/login')
            } else {
                message.error('error logout')
            }
        },
        onError: (error) => {
            message.warning('error logout')
        }
    })

    const onChangeLocale = e => {
        const locale = e.target.value
        i18n.changeLanguage(locale);
    }

    const logout = () => {
        doLogout.mutate()
    }

    return (
        <ConfigProvider>
            {auth && (
                <Layout style={{ minHeight: '100vh' }}>
                    <HelmetProvider>
                        <Helmet>
                            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                            <meta name="description" content="" />
                            <meta name="author" content="" />
                            <title>Admin Dung Bui</title>
                            <link rel="icon" href="favicon.ico" />
                            <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Inconsolata" rel="stylesheet" />
                            <link href="https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css" rel="stylesheet" />
                        </Helmet>
                    </HelmetProvider>
                    <Sidebar />
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <Row>
                                <Col span={12} style={{ padding: '15px 20px' }}>
                                    <h2 className="header-title">Quản trị web</h2>
                                </Col>
                                <Col span={12} style={{ textAlign: 'right', padding: '0 20px' }}>
                                    <Radio.Group onChange={onChangeLocale}>
                                        <Radio.Button key="en" value="en">
                                            EN
                                        </Radio.Button>
                                        <Radio.Button key="vi" value="vi">
                                            VN
                                        </Radio.Button>
                                    </Radio.Group>
                                    <Tooltip placement="centerTop" title={auth.user}>
                                        <Button icon={<LogoutOutlined />} onClick={logout}>Đăng xuất</Button>
                                    </Tooltip>
                                </Col>
                            </Row>
                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            {childrenWithProps}
                        </Content>
                        <Footer style={{ textAlign: 'center', color: 'rgb(162 154 154 / 85%)' }}>© 2021- Quang Dung</Footer>
                    </Layout>
                </Layout>
            )}
        </ConfigProvider>
    )
}

export default Main