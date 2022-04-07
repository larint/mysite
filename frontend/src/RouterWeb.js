import React from "react"
import { Switch, Redirect } from "react-router-dom"
import { RouteWithLayout } from './web/components'
import { MainLayout } from './web/layouts'
import {
    HomeView,
    BlogView,
    BlogDetailView
} from './web/views'

const RouterWeb = () => {
    return (
        <Switch>
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={HomeView}
                path='/'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={BlogView}
                path='/blog'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={BlogDetailView}
                path='/blog/:id'
            />
        </Switch>
    )
}

export default RouterWeb