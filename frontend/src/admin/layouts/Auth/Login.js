import React, { useState } from "react"
import { ConfigProvider, Layout, Row, Col } from 'antd'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import * as API from "../../common/api"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"

const { Content, Footer } = Layout

const Login = (props) => {
    const { children } = props
    const navigate = useNavigate()

    useQuery(
        [API.API_AD_CHECK_AUTH], () => API.checkAuth(),
        {
            onSuccess: (response) => {
                if (response.status == 200) {
                    navigate('/admin')
                }
            },
            onError: (error) => {
            },
        }
    )

    return (
        <ConfigProvider>
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
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8} style={{ padding: '15px 20px' }}>
                                {children}
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: 'rgb(162 154 154 / 85%)' }}>© 2021- Quang Dung</Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default Login