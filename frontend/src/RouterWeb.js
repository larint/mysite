import React from "react"
import { Routes, Route } from "react-router-dom"
import { MainLayout } from './web/layouts'
import {
    HomeView,
    BlogView,
    BlogDetailView
} from './web/views'

const RouterWeb = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <MainLayout>
                        <HomeView />
                    </MainLayout>
                }
            />
            <Route
                path='/blog'
                element={
                    <MainLayout>
                        <BlogView />
                    </MainLayout>
                }
            />
            <Route
                path='/blog/:id'
                element={
                    <MainLayout>
                        <BlogDetailView />
                    </MainLayout>
                }
            />
        </Routes>
    )
}

export default RouterWeb