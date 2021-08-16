import React from "react"
import { Switch, Redirect } from "react-router-dom"
import RouteWithLayout from './components/RouteWithLayout'
import { MainLayout } from './layouts'
import {
    DashboardView,
    BlogView
} from './views'

const RouterApp = () => {
    return (
        <Switch>
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={DashboardView}
                path='/admin/dashboard'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={BlogView}
                path='/admin/blog'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={DashboardView}
                path='/'
            />
        </Switch>
    )
}

export default RouterApp