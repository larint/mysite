import { withRouter, Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const BlogMenu = (props) => {
    const { location } = props

    return (
        <div className="menu" style={{ boxShadow: '0 5px 8px 0 rgb(0 0 0 / 14%)' }}>
            <div className="container">
                <div className="row">
                    <div className="menu__wrapper d-none d-lg-block col-md-12" style={{ marginTop: '25px' }}>
                        <nav className="">
                            <ul>
                                <li>
                                    <Link to={{ pathname: "/" }} style={{ color: '#555' }}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/blog" style={{ color: '#555' }}>Blog</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu__wrapper col-md-12 d-lg-none">
                        <div className="menu__mobile-button">
                            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BlogMenu)