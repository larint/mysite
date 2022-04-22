import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../../common/api"
import {
    BlogItem
} from '../../_components'

const Blog = (props) => {
    const [blog, setBlog] = useState([])

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
        <section id="blog" className="container section">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="blog_header" className="section__title">Latest Posts_</h2>
                </div>
            </div>

            <div className="row post-cards">
                {
                    blog.length > 0 && blog.map((item, index) => (
                        <BlogItem post={item} key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default Blog