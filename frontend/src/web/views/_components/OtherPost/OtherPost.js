import { withRouter } from "react-router-dom"
import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../../common/api"

const OtherPost = (props) => {
    const [posts, setOtherPost] = useState([])
    const { match } = props

    useQuery(
        [API.QUERY_KEY_GET_OTHER_POST], () => API.getOtherPost(match.params.slug),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setOtherPost(response.data)
                } else {
                    setOtherPost([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <section id="posts" className="container section">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="other_posts" className="section__title">Other Posts_</h2>
                </div>
            </div>

            <div className="row posts">
                <div className="col-md-5 mr-auto">
                    <div className="posts__item">
                        <a href="">
                            <h3 className="posts__title">What’s new in the IT Industry?</h3>
                            <p className="posts__description">Invitation excellence imprudence understood it continuing to.
                                Ye show done an into.</p>
                        </a>
                    </div>
                    <div className="posts__item">
                        <a href="">
                            <h3 className="posts__title">How I organize my work with code</h3>
                            <p className="posts__description">Invitation excellence imprudence understood it continuing to.
                                Ye show done an into.</p>
                        </a>
                    </div>
                    <div className="posts__item">
                        <a href="">
                            <h3 className="posts__title">How to use css-preprocessor</h3>
                            <p className="posts__description">Invitation excellence imprudence understood it continuing to.
                                Ye show done an into.</p>
                        </a>
                    </div>
                </div>
                <div className="col-md-5 mr-auto">
                    <div className="posts__item">
                        <a href="">
                            <h3 className="posts__title">What’s new in the IT Industry?</h3>
                            <p className="posts__description">Invitation excellence imprudence understood it continuing to.
                                Ye show done an into.</p>
                        </a>
                    </div>
                    <div className="posts__item">
                        <a href="">
                            <h3 className="posts__title">How I organize my work with code</h3>
                            <p className="posts__description">Invitation excellence imprudence understood it continuing to.
                                Ye show done an into.</p>
                        </a>
                    </div>
                    <div className="posts__item">
                        <a href="">
                            <h3 className="posts__title">How to use css-preprocessor</h3>
                            <p className="posts__description">Invitation excellence imprudence understood it continuing to.
                                Ye show done an into.</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(OtherPost)