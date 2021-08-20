import React from "react"
import { Switch, Redirect } from "react-router-dom"
import { RouteWithLayout } from './web/components'
import { MainLayout } from './web/layouts'
import {
    HomeView
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
        </Switch>
    )
}

export default RouterWeb