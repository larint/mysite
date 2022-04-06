import React from "react"
import { Switch, Redirect } from "react-router-dom"
import RouteWithLayout from './admin/components/RouteWithLayout'
import { MainLayout } from './admin/layouts'
import {
    DashboardView,
    BlogListView,
    BlogCreateView,
    BlogEditView
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
                component={BlogListView}
                path='/admin/blog'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={BlogCreateView}
                path='/admin/blog/create'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={BlogEditView}
                path='/admin/blog/edit/:id'
            />
        </Switch>
    )
}

export default RouterAdmin