import { withRouter } from "react-router-dom"
import {
    MainMenu,
    StyleSwitcher,
    MobileMenu,
    Header,
    Hello,
    Resume,
    Portfolio,
    Testimonials,
    Blog,
    Contact,
    PortfolioModal
} from '../_components'

const Home = (props) => {
    return (
        <div>
            <MainMenu />
            <MobileMenu />
            <Header />
            <Hello />
            <hr />
            <Resume />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />
            <PortfolioModal />
        </div>
    )
}

export default withRouter(Home)