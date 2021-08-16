import React, { useState, useEffect, useRef } from "react"
import { withRouter } from "react-router"
import { Sidebar } from './components'
import { ConfigProvider, Layout, Breadcrumb, Row, Col, Radio } from 'antd'
import enUS from 'antd/lib/locale/en_US'
import viVN from 'antd/lib/locale/vi_VN'

import {
    GlobalOutlined
} from '@ant-design/icons'

const { Header, Content, Footer } = Layout

const Main = (props) => {
    const { children, history } = props
    const [locale, setLocale] = useState(viVN)

    const onChangeLocale = e => {
        const locale = e.target.value
        setLocale(locale)
    }

    return (
        <ConfigProvider locale={locale}>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <Row>
                            <Col span={12} style={{ padding: '0 20px' }}>
                                <h2 className="header-title">Thống Kê</h2>
                            </Col>
                            <Col span={12} style={{ textAlign: 'right', padding: '0 20px' }}>
                                <a><GlobalOutlined style={{ fontSize: 20 }} /></a>
                                <Radio.Group value={locale} onChange={onChangeLocale}>
                                    <Radio.Button key="en" value={enUS}>
                                        EN
                                    </Radio.Button>
                                    <Radio.Button key="vi" value={viVN}>
                                        VN
                                    </Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Sys</Breadcrumb.Item>
                            <Breadcrumb.Item>Thống Kê</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2021</Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default withRouter(Main)