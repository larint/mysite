import { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import RouterAdmin from './RouterAdmin'
import RouterWeb from './RouterWeb'
import { createBrowserHistory } from 'history'
import './i18n'
import "./App.css"
const browserHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <BrowserRouter history={browserHistory} location={browserHistory.location}>
        <RouterAdmin />
        <RouterWeb />
      </BrowserRouter>
    )
  }
}

export default App
