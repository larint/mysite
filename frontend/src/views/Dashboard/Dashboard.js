import { withRouter } from "react-router"

const Dashboard = (props) => {
    const { children, history } = props

    return (
        <div>
            Dashboard
        </div>
    )
}

export default withRouter(Dashboard)