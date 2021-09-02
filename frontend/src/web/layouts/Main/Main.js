import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Main = (props) => {
    const { children } = props

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