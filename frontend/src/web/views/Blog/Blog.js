import { withRouter } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../common/api"
import {
    Contact,
    BlogItem,
    BlogMenu,
    BlogMobileMenu,
    PlaceholdeLoading
} from "../_components"

const Blog = (props) => {
    const [profile, setProfile] = useState({})
    const [postList, setPostList] = useState([])

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
                    setPostList(response.data)
                } else {
                    setPostList([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [postList])

    return (
        <div>
            <BlogMenu />
            <BlogMobileMenu />
            <section id="blog" className="container section" style={{ paddingTop: '159px' }}>
                {
                    postList.length > 0 ? (
                        <div className="row post-cards" >
                            {postList.map((post, index) => (
                                <BlogItem key={index} post={post} />
                            ))}
                        </div>
                    ) : <PlaceholdeLoading />
                }
            </section>
            <Contact profile={profile} />
        </div>
    )
}

export default withRouter(Blog)