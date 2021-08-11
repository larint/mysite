import React from "react"
import { Switch, Redirect } from "react-router-dom"
import RouteWithLayout from './components/RouteWithLayout'
import { MainLayout } from './layouts'
import {
    LoginView,
    HomeView
} from './views'

const RouterApp = () => {
    return (
        <Switch>
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={LoginView}
                path='/login'
            />
            <RouteWithLayout
                exact
                layout={MainLayout}
                component={HomeView}
                path='/'
            />
        </Switch>
    )
}

export default RouterApp