import React from 'react'

const Main = (props) => {
    const { children, history } = props

    return (
        <>
            <div>
                <h1>Main Layout</h1>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Main