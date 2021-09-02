import { withRouter, Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const BlogMobileMenu = (props) => {
    const { location } = props

    return (
        <div className="mobile-menu d-lg-none">
            <div className="container">
                <div className="mobile-menu__close">
                    <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
                </div>
                <nav className="mobile-menu__wrapper">
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
        </div>
    )
}

export default withRouter(BlogMobileMenu)