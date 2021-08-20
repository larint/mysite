import { withRouter } from "react-router-dom"

const MainMenu = (props) => {

    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="menu__wrapper d-none d-lg-block col-md-12">
                        <nav className="">
                            <ul>
                                <li><a href="#hello">Hello</a></li>
                                <li><a href="#resume">Resume</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#testimonials">testimonials</a></li>
                                <li><a href="#blog">blog</a></li>
                                <li><a href="#contact">Contact</a></li>
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

export default withRouter(MainMenu)