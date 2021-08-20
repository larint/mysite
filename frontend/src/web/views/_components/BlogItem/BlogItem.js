import { withRouter } from "react-router-dom"

const BlogItem = (props) => {
    return (
        <div class="col-md-4">
            <a href="blog.html">
                <div class="post-cards__card">
                    <div class="post-cards__img">
                        <img src="assets/img/img_blog_1.png" alt="blog_img" />
                    </div>
                    <div class="post-cards__info">
                        <p class="post-cards__date">October 22, 2017</p>
                        <h3 class="post-cards_title">How to use css-preprocessor</h3>
                        <p class="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempr incididunt...
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default withRouter(BlogItem)