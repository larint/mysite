import React from "react"
import { withRouter } from "react-router"
import { useScript } from "../../components"
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Main = (props) => {
    const { children } = props

    useScript(
        'assets/js/popper.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/menu.js',
        'assets/js/jquery.waypoints.js',
        'assets/js/progress-list.js',
        'assets/js/section.js',
        'assets/js/portfolio-filter.js',
        'assets/js/slider-carousel.js',
        'assets/js/mobile-menu.js',
        'assets/js/contacts.js',
        'assets/js/mbclicker.min.js',
        'assets/js/site-btn.js'
    )

    return (
        <HelmetProvider>
            <Helmet>
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>MySite Dung Bui</title>
                <link rel="icon" href="favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Inconsolata" rel="stylesheet" />
                <link href="https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css" rel="stylesheet" />
            </Helmet>
            {children}
        </HelmetProvider>
    )
}

export default withRouter(Main)