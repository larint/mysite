import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const MainMenu = (props) => {

    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="menu__wrapper d-none d-lg-block col-md-12">
                        <nav className="">
                            <ul>
                                <li>
                                    <HashLink smooth to="#hello">Me</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="#resume">Resume</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="#portfolio">Portfolio</HashLink>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <HashLink smooth to="#contact">Contact</HashLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu__wrapper col-md-12 d-lg-none">
                        <button type="button" className="menu__mobile-button">
                            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu