import { withRouter } from "react-router-dom"
import { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../../common/api"

const BlogDetail = (props) => {
    const [post, setPost] = useState([])
    const { match } = props

    useQuery(
        [API.QUERY_KEY_GET_POST], () => API.getPost(match.params.slug),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setPost(response.data)
                } else {
                    setPost([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <div className="container">
            <div className="article">
                <div className="row">
                    <div className="col-md-12">
                        <a className="article__back-link" href="index.html"><i className="fa fa-long-arrow-left"
                            aria-hidden="true"></i>Back</a>
                        <p className="article__title">{post.title}</p>
                        <p className="article_date">{post.createdAt}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        <p className="article__share">Share this post:
                            <a><i className="fa fa-linkedin-square"></i></a>
                            <a><i className="fa fa-facebook-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BlogDetail)