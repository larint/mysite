import { withRouter } from "react-router-dom"

const Blog = (props) => {
    return (
        <section id="blog" className="container section">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="blog_header" className="section__title">Latest Posts_</h2>
                </div>
            </div>

            <div className="row post-cards">
                <div className="col-md-4">
                    <a href="blog.html">
                        <div className="post-cards__card">
                            <div className="post-cards__img">
                                <img src="assets/img/img_blog_1.png" alt="blog_img" />
                            </div>
                            <div className="post-cards__info">
                                <p className="post-cards__date">October 22, 2017</p>
                                <h3 className="post-cards_title">How to use css-preprocessor</h3>
                                <p className="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempr incididunt...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="blog.html">
                        <div className="post-cards__card">
                            <div className="post-cards__img">
                                <img src="assets/img/img_blog_2.png" alt="blog_img" />
                            </div>
                            <div className="post-cards__info">
                                <p className="post-cards__date">October 22, 2017</p>
                                <h3 className="post-cards_title">How I organize my work with code</h3>
                                <p className="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempr incididu...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="blog.html">
                        <div className="post-cards__card">
                            <div className="post-cards__img">
                                <img src="assets/img/img_blog_3.png" alt="blog_img" />
                            </div>
                            <div className="post-cards__info">
                                <p className="post-cards__date">October 22, 2017</p>
                                <h3 className="post-cards_title">SVG sprites vs Icon Font</h3>
                                <p className="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempr incididu...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Blog)