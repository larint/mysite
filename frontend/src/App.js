import { Component } from "react"
import { Router } from "react-router-dom"
import RouterAdmin from './RouterAdmin'
import RouterWeb from './RouterWeb'
import { createBrowserHistory } from 'history'
import "./App.css"
const browserHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <RouterAdmin />
        <RouterWeb />
      </Router>
    )
  }
}

export default App
