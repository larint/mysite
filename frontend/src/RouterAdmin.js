import React from "react"
import { Switch, Redirect } from "react-router-dom"
import RouteWithLayout from './admin/components/RouteWithLayout'
import { MainLayout } from './admin/layouts'
import {
    DashboardView,
    BlogView
} from './admin/views'

const RouterAdmin = () => {
    return (
        <Switch>
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={DashboardView}
                path='/admin'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={BlogView}
                path='/admin/blog'
            />
        </Switch>
    )
}

export default RouterAdmin