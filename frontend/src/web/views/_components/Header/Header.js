import { withRouter } from "react-router-dom"

const Header = (props) => {
    const { profile } = props

    return (
        <header className="main-header" style={{ backgroundImage: 'url(assets/img/img_bg_header.jpg)' }}>
            <div className="container">
                <div className="row personal-profile">
                    <div className="col-md-4 personal-profile__avatar">
                        <img className="" src="/assets/img/face.jpg" alt="avatar" />
                    </div>
                    <div className="col-md-8">
                        <p className="personal-profile__name">{profile.name}</p>
                        <p className="personal-profile__work">{profile.job}</p>
                        <div className="personal-profile__contacts">
                            <dl className="contact-list contact-list__opacity-titles">
                                <dt>Birthday:</dt>
                                <dd>{profile.birthDay}</dd>
                                <dt>Phone:</dt>
                                <dd><a href={"tel:" + profile.contact?.phone}>{profile.contact?.phone}</a></dd>
                                <dt>Email:</dt>
                                <dd><a href={"mailto:" + profile.contact?.email}>{profile.contact?.email}</a></dd>
                                <dt>Address:</dt>
                                <dd>{profile.contact?.address}</dd>
                            </dl>
                        </div>
                        <p className="personal-profile__social">
                            <a href={profile.social?.github} target="_blank"><i className="fa fa-github"></i></a>
                            <a href={profile.social?.insta} target="_blank"><i className="fa fa-linkedin-square"></i></a>
                            <a href={profile.social?.fb} target="_blank"><i className="fa fa-facebook-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)