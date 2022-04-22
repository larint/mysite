import { Link } from "react-router-dom"

const BlogItem = (props) => {
    const { post } = props

    return (
        <div className="col-md-4" style={{ margiBottom: '40px' }}>
            <Link to={{ pathname: "/blog/" + post.id }}>
                <div className="post-cards__card">
                    <div className="post-cards__info">
                        <p className="post-cards__date">{(new Date(post.createAt)).toLocaleString()}</p>
                        <h3 className="post-cards_title">{post.title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogItem