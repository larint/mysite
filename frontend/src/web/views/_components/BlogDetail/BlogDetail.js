import { Link, withRouter } from "react-router-dom"
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
            <div className="article" style={{ marginTop: '114px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/blog"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back</Link>
                        <p className="article__title">{post.title}</p>
                        <p className="article_date">{post.createdAt}</p>
                        {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
                        <div>
                            Jquery là một thư viện của javascript, được tạo ra bởi John Resig vào năm 2006. Nó là một bước tiến mới trong cộng đồng javascript. Khi sử dụng Jquery thì sẽ giúp các lập trình viên giảm tối đa được thời gian cũng như hạn chế được các dòng lệnh dài và phức tạp.

                        </div>
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