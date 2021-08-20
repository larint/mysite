import { withRouter } from "react-router-dom"

const Portfolio = (props) => {
    return (
        <section id="portfolio" className="container section">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="portfolio_header" className="section__title">My projects_</h2>
                </div>
            </div>
            <div className="row portfolio-menu">
                <div className="col-md-12">
                    <nav>
                        <ul>
                            <li><a href="" data-portfolio-target-tag="all">all</a></li>
                            <li><a href="" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
                            <li><a href="" data-portfolio-target-tag="web-sites">web-sites</a></li>
                            <li><a href="" data-portfolio-target-tag="landing-pages">landing pages</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="portfolio-cards">
                <div className="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="web-sites">
                    <div className="col-md-6 col-lg-5 project-card__img">
                        <img className="" src="assets/img/img_project_1_mono.png" alt="project-img" />
                    </div>
                    <div className="col-md-6 col-lg-7 project-card__info">
                        <h3 className="project-card__title">Mobile and desktop app for London hostel store </h3>
                        <p className="project-card__description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
                            Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p className="project-card__stack">Used stack:</p>
                        <ul className="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="" className="project-card__link">www.superapp.com</a>
                    </div>
                </div>
                <div className="row project-card" data-toggle="modal" data-target="#portfolioModal" data-portfolio-tag="mobile apps">
                    <div className="col-md-6 col-lg-5 project-card__img">
                        <img className="" src="assets/img/img_project_2_mono.png" alt="project-img" />
                    </div>
                    <div className="col-md-6 col-lg-7 project-card__info">
                        <h3 className="project-card__title">Web app page for trevel company</h3>
                        <p className="project-card__description">
                            Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an
                            uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.
                        </p>
                        <p className="project-card__stack">Used stack:</p>
                        <ul className="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="" className="project-card__link">www.travellend.com</a>
                    </div>
                </div>
                <div className="row project-card" data-toggle="modal" data-target="#portfolioModal"
                    data-portfolio-tag="landing-pages">
                    <div className="col-md-6 col-lg-5 project-card__img">
                        <img className="" src="assets/img/img_project_3_mono.png" alt="project-img" />
                    </div>
                    <div className="col-md-6 col-lg-7 project-card__info">
                        <h3 className="project-card__title">Admin template for Photo Service</h3>
                        <p className="project-card__description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
                            Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p className="project-card__stack">Used stack:</p>
                        <ul className="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="" className="project-card__link">www.coolphoto.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Portfolio)