import { withRouter } from "react-router-dom"
import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../../common/api"

const Resume = (props) => {
    const [resume, setResume] = useState([])
    const [skill, setSkill] = useState([])

    useQuery(
        [API.QUERY_KEY_GET_RESUME], () => API.getResume(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setResume(response.data)
                } else {
                    setResume([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    useQuery(
        [API.QUERY_KEY_GET_SKILL], () => API.getSkill(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setSkill(response.data)
                } else {
                    setSkill([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <section id="resume" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="resume_header" className="section__title">Resume_</h2>
                    <p className="section__description">
                        I have been working with web technologies for a long time. <br />
                        When I first started working on the web, I did freelance work on the internet.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 section__resume resume-list">
                    <h3 className="resume-list_title">education</h3>
                    {
                        resume.length > 0 && resume.map((item, index) => (
                            index == 0 && (
                                <div className="resume-list__block" key={index}>
                                    <p className="resume-list__block-title">{item.mainTitle}</p>
                                    <p className="resume-list__block-date">{item.time}</p>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 section__resume resume-list">
                    <h3 className="resume-list_title">employment</h3>
                    {
                        resume.length > 0 && resume.map((item, index) => (
                            index > 0 && (
                                <div className="resume-list__block" key={index}>
                                    <p className="resume-list__block-title">{item.mainTitle}</p>
                                    <p className="resume-list__block-date">{item.time}</p>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
            <div className="row section__resume progress-list js-progress-list">
                <div className="col-md-12">
                    <h3 className="progress-list__title">general skills</h3>
                    <p className="section__description lower">my knowledge level in web technology</p>
                </div>
                <div className="col-md-5 mr-auto">
                    {
                        skill.length > 0 && skill.map((item, index) => (
                            index < 3 && (
                                <div className="progress-list__skill" key={index}>
                                    <p>
                                        <span className="progress-list__skill-title">{item.tec}</span>
                                        <span className="progress-list__skill-value">{item.now}/{item.max}</span>
                                    </p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: (item.now / item.max * 100) + '%' }}>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
                <div className="col-md-5 mr-auto">
                    {
                        skill.length > 0 && skill.map((item, index) => (
                            index > 2 && (
                                <div className="progress-list__skill" key={index}>
                                    <p>
                                        <span className="progress-list__skill-title">{item.tec}</span>
                                        <span className="progress-list__skill-value">{item.now}/{item.max}</span>
                                    </p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: (item.now / item.max * 100) + '%' }}>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default withRouter(Resume)