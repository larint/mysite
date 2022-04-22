import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../common/api"
import {
    Contact,
    OtherPost,
    BlogMenu,
    BlogMobileMenu,
    PlaceholdeLoading
} from "../_components"

const Detail = (props) => {
    const [profile, setProfile] = useState({})
    const [post, setPost] = useState(null)
    let { id } = useParams()

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
        [API.QUERY_KEY_GET_POST], () => API.getPost({ id }),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setPost(response.data)
                }
            },
            onError: (error) => {
            }
        }
    )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [post])

    return (
        <div>
            <BlogMenu />
            <BlogMobileMenu />
            <div className="container">
                <div className="article" style={{ marginTop: '114px' }}>
                    {
                        post ? (
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to="/blog"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back</Link>
                                    <p className="article__title">{post?.title}</p>
                                    <p className="article_date">{(new Date(post.createAt)).toLocaleString()}</p>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                    <p className="article__share">Share this post:
                                        <a><i className="fa fa-linkedin-square"></i></a>
                                        <a><i className="fa fa-facebook-square"></i></a>
                                    </p>
                                </div>
                            </div>
                        ) : <PlaceholdeLoading />
                    }
                </div>
            </div>
            <Contact profile={profile} />
        </div>
    )
}

export default Detail