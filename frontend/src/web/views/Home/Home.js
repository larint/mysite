import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../common/api"
import {
    MainMenu,
    MobileMenu,
    Header,
    Hello,
    Resume,
    Portfolio,
    Contact
} from '../_components'

const Home = (props) => {
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <MainMenu />
            <MobileMenu />
            <Header profile={profile} />
            <Hello profile={profile} />
            <hr />
            <Resume />
            <Portfolio />
            <Contact profile={profile} />
        </div>
    )
}

export default Home