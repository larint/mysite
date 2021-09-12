import { withRouter } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const MobileMenu = (props) => {
    return (
        < div className="mobile-menu d-lg-none" >
            <div className="container">
                <div className="mobile-menu__close">
                    <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
                </div>
                <nav className="mobile-menu__wrapper">
                    <ul>
                        <li>
                            <HashLink smooth to="#hello">Hello</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#resume">Resume</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#portfolio">Portfolio</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#contact">Contact</HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default withRouter(MobileMenu)