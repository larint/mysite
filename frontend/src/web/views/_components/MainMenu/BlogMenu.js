import { withRouter, Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const BlogMenu = (props) => {
    const { location } = props

    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="menu__wrapper d-none d-lg-block col-md-12">
                        <nav className="">
                            <ul>
                                <li>
                                    <Link to={{ pathname: "/" }}>Home</Link>
                                </li>
                                <li>
                                    <HashLink smooth to={location.pathname + "#posts"}>other posts</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to={location.pathname + "#contact"}>Contact</HashLink>
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