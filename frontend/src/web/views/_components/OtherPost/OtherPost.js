import { Link, withRouter } from "react-router-dom"
import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../../common/api"

const OtherPost = (props) => {
    const [posts, setOtherPost] = useState([])
    const { match } = props

    useQuery(
        [API.QUERY_KEY_GET_OTHER_POST], () => API.getOtherPost(match.params.slug),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setOtherPost(response.data)
                } else {
                    setOtherPost([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <section id="posts" className="container section" style={{ paddingTop: '149px' }}>
            <div className="row posts">
                <div className="col-md-12 mr-auto">
                    <div className="posts__item">
                        <Link to="/blog/1">
                            <h3 className="posts__title">Tổng quan và hướng dẫn sử dụng jQuery</h3>
                            <p className="posts__description">jQuery là thư viện được viết từ JavaScript, jQuery giúp xây dựng các chức năng bằng Javascript dễ dàng, nhanh và giàu tính năng hơn.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(OtherPost)