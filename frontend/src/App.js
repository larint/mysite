import React, { Component } from "react"
import { Router } from "react-router-dom"
import RouterApp from './RouterApp'
import { createBrowserHistory } from "history"

const browserHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <RouterApp />
      </Router>
    )
  }
}

export default App
