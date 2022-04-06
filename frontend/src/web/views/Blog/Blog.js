import { withRouter } from "react-router-dom"
import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../common/api"
import {
    Contact,
    BlogItem,
    BlogMenu,
    BlogMobileMenu
} from "../_components"

const Blog = (props) => {
    const [profile, setProfile] = useState({})
    const [postList, setBlog] = useState([])

    useQuery(
        [API.QUERY_KEY_GET_PROFILE], () => API.getProfile(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setProfile(response.data)
                } else {
                    setProfile({})
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    useQuery(
        [API.QUERY_KEY_GET_BLOG], () => API.getBlog(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setBlog(response.data)
                } else {
                    setBlog([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <div>
            <BlogMenu />
            <BlogMobileMenu />
            <section id="blog" className="container section" style={{ paddingTop: '159px' }}>
                <div className="row post-cards" >
                    {postList.map((post) => (
                        <BlogItem post={post} />
                    ))}
                </div>
            </section>
            <Contact profile={profile} />
        </div>
    )
}

export default withRouter(Blog)