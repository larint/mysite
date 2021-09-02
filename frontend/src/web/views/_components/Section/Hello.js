import { withRouter } from "react-router-dom"

const Hello = (props) => {
    const { profile } = props

    return (
        <section id="hello" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="hello_header" className="section__title">Hi_</h2>
                    <p className="section__description" dangerouslySetInnerHTML={{ __html: profile.intro }}></p>
                    <a href="" className="section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt="" />Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Hello)