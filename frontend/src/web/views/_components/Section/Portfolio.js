import React, { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../../common/api"

const Portfolio = (props) => {
    const [project, setProject] = useState([])

    useQuery(
        [API.QUERY_KEY_GET_PROJECT], () => API.getProject(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setProject(response.data)
                } else {
                    setProject([])
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <section id="portfolio" className="container section">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="portfolio_header" className="section__title">My projects_</h2>
                </div>
            </div>
            <div className="portfolio-cards">
                {
                    project.length > 0 && project.map((item, index) => (
                        <div className="row project-card" key={index}>
                            <div className="col-md-6 col-lg-5 project-card__img">
                                <img className="" src={item.thumbnail} alt="project-img" />
                            </div>
                            <div className="col-md-6 col-lg-7 project-card__info">
                                <h3 className="project-card__title">{item.name}</h3>
                                <p className="project-card__description" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                <p className="project-card__stack">Tech:</p>
                                <ul className="tags">
                                    {
                                        item.tech.split(',').map((it, index) => (
                                            <li key={index}>{it}</li>
                                        ))
                                    }
                                </ul>
                                <a href="" className="project-card__link">{item.linkRefer}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Portfolio