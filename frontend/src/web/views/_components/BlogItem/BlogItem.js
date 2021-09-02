import { withRouter, Link } from "react-router-dom"
import { strToSlug } from "../../../common/common"

const BlogItem = (props) => {
    const { post } = props

    return (
        <div className="col-md-4">
            <Link to={{ pathname: "/blog/" + post.slug }}>
                <div className="post-cards__card">
                    <div className="post-cards__img">
                        <img src="assets/img/img_blog_1.png" alt="blog_img" />
                    </div>
                    <div className="post-cards__info">
                        <p className="post-cards__date">{post.createdAt}</p>
                        <h3 className="post-cards_title">{post.title}</h3>
                        <p className="post-cards_description">{post.content.substring(1, 100) + '...'}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(BlogItem)