import React from "react"
import { Routes, Route } from "react-router-dom"
import { MainLayout, AuthLayout } from './admin/layouts'
import {
    DashboardView,
    BlogListView,
    BlogCreateView,
    BlogEditView,
    ProfileView,
    LoginView
} from './admin/views'

const RouterAdmin = () => {
    return (
        <Routes>
            <Route
                path='/admin/login'
                element={
                    <AuthLayout>
                        <LoginView />
                    </AuthLayout>
                }
            />
            <Route
                path='/admin'
                element={
                    <MainLayout>
                        <DashboardView />
                    </MainLayout>
                }
            />
            <Route
                path='/admin/blog'
                element={
                    <MainLayout>
                        <BlogListView />
                    </MainLayout>
                }
            />
            <Route
                path='/admin/blog/create'
                element={
                    <MainLayout>
                        <BlogCreateView />
                    </MainLayout>
                }
            />
            <Route
                path='/admin/blog/edit/:id'
                element={
                    <MainLayout>
                        <BlogEditView />
                    </MainLayout>
                }
            />
            <Route
                path='/admin/info'
                element={
                    <MainLayout>
                        <ProfileView />
                    </MainLayout>
                }
            />
        </Routes>
    )
}

export default RouterAdmin