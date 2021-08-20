import { Component } from "react"
import { Router } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import RouterAdmin from './RouterAdmin'
import RouterWeb from './RouterWeb'
import { createBrowserHistory } from 'history'
import "./App.css"
const browserHistory = createBrowserHistory()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <Router history={browserHistory}>
          <RouterAdmin />
          <RouterWeb />
        </Router>
      </QueryClientProvider>
    )
  }
}

export default App
