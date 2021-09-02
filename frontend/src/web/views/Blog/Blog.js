import { withRouter } from "react-router-dom"
import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../common/api"
import {
    BlogDetail,
    Contact,
    OtherPost,
    BlogMenu,
    BlogMobileMenu
} from "../_components"

const Blog = (props) => {
    const [profile, setProfile] = useState({})

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

    return (
        <div>
            <BlogMenu />
            <BlogMobileMenu />
            <header className="background blog-header" style={{ backgroundImage: "url(assets/img/img_bg_main.jpg)" }}></header>
            <BlogDetail />
            <OtherPost />
            <Contact profile={profile} />
        </div>
    )
}

export default withRouter(Blog)