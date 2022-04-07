import { Breadcrumb } from "antd"
import { withRouter } from "react-router"

const Dashboard = (props) => {
    const { children, history } = props

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Sys</Breadcrumb.Item>
                <Breadcrumb.Item>Thống Kê</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Dashboard
            </div>
        </div>
    )
}

export default withRouter(Dashboard)