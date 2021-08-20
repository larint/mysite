import { useState } from "react"
import { withRouter } from "react-router-dom"
import { useQuery } from "react-query"
import * as API from "../../../common/api"


const Header = (props) => {
    const [profile, setProfile] = useState({})

    useQuery(
        [API.QUERY_KEY_GET_PROFILE], () => API.getProfile(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setProfile(response.data)
                } else {
                    setProfile({})
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <header className="main-header" style={{ backgroundImage: 'url(assets/img/img_bg_header.jpg)' }}>
            <div className="container">
                <div className="row personal-profile">
                    <div className="col-md-4 personal-profile__avatar">
                        <img className="" src="http://via.placeholder.com/350x400" alt="avatar" />
                    </div>
                    <div className="col-md-8">
                        <p className="personal-profile__name">{profile.name}</p>
                        <p className="personal-profile__work">{profile.work}</p>
                        <div className="personal-profile__contacts">
                            <dl className="contact-list contact-list__opacity-titles">
                                <dt>Birthday:</dt>
                                <dd>{profile.birthDay}</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:0389559611">{profile.phone}</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:qdb611@gmail.com">{profile.email}</a></dd>
                                <dt>Address:</dt>
                                <dd>{profile.address}</dd>
                            </dl>
                        </div>
                        <p className="personal-profile__social">
                            <a href="" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                            <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)