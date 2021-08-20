import { Route } from "react-router-dom"

const RouteWithLayout = (props) => {
    const { layout: Layout, component: Component, ...rest } = props

    return (
        <Route
            {...rest}
            render={routeProps => (
                <Layout>
                    <Component {...routeProps} />
                </Layout>
            )}
        />
    )
}

export default RouteWithLayout
