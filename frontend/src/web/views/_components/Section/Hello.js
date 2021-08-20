import { withRouter } from "react-router-dom"

const Hello = (props) => {
    return (
        <section id="hello" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="hello_header" className="section__title">Hi_</h2>
                    <p className="section__description">
                        I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation,
                        layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using
                        current best practices in Web development. Fast learner, hard worker and team player who is proficient in
                        an array of scripting languages and multimedia Web tools.
                    </p>
                    <a href="" className="section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt="" />Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Hello)