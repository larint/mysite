import { withRouter } from "react-router-dom"

const Resume = (props) => {
    return (
        <section id="resume" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="resume_header" className="section__title">Resume_</h2>
                    <p className="section__description">
                        Lorem ipsum dolor sit amet, <i><b>communication</b></i> adipisicing elit, <i><b>helpful</b></i> eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <i><b>sence of
                            humour</b></i> ullamco laboris nisi ut <i><b>honest</b></i> ea commodo consequat. Duis aute irure dolor in
                        upper-intermediate english level velit dolore eu ivivdtevoluptatem ontend developer.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 section__resume resume-list">
                    <h3 className="resume-list_title">education</h3>
                    <div className="resume-list__block">
                        <p className="resume-list__block-title">University of Minnesota Twin Cities </p>
                        <p className="resume-list__block-date">2006 - 2010</p>
                        <p>
                            Bachelor Computer Engineering Lorem
                        </p>
                    </div>
                    <div className="resume-list__block">
                        <p className="resume-list__block-title">School of Informational technologies</p>
                        <p className="resume-list__block-date">2004 - 2005</p>
                        <p>
                            Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius-
                            mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        </p>
                    </div>
                    <div className="resume-list__block">
                        <p className="resume-list__block-title">Lorem Ipsum School</p>
                        <p className="resume-list__block-date">2003 - 2006</p>
                        <p>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor
                            incididunt ut
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 section__resume resume-list">
                    <h3 className="resume-list_title">employment</h3>
                    <div className="resume-list__block">
                        <p className="resume-list__block-title">Apple</p>
                        <p className="resume-list__block-date">2006 - 2010</p>
                        <p>
                            Senior Full Stack Developer
                        </p>
                    </div>
                    <div className="resume-list__block">
                        <p className="resume-list__block-title">Tech university</p>
                        <p className="resume-list__block-date">2004 - 2005</p>
                        <p>
                            Awesome developer, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius-
                            mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        </p>
                    </div>
                    <div className="resume-list__block">
                        <p className="resume-list__block-title">Molly’s studio</p>
                        <p className="resume-list__block-date">2003 - 2006</p>
                        <p>
                            Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor
                            incididunt ut
                        </p>
                    </div>
                </div>
            </div>
            <div className="row section__resume progress-list js-progress-list">
                <div className="col-md-12">
                    <h3 className="progress-list__title">general skills</h3>
                </div>
                <div className="col-md-5 mr-auto">
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">html5</span>
                            <span className="progress-list__skill-value">80%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">css3</span>
                            <span className="progress-list__skill-value">70%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">java script</span>
                            <span className="progress-list__skill-value">90%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">jquery</span>
                            <span className="progress-list__skill-value">80%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mr-auto">
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">bootstrap 3</span>
                            <span className="progress-list__skill-value">80%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">grunt</span>
                            <span className="progress-list__skill-value">60%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">git</span>
                            <span className="progress-list__skill-value">90%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-list__skill">
                        <p>
                            <span className="progress-list__skill-title">adobe photoshop</span>
                            <span className="progress-list__skill-value">80%</span>
                        </p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Resume)