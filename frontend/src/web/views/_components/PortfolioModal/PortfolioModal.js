
const PortfolioModal = (props) => {
    return (
        <div className="modal fade portfolio-modal" id="portfolioModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
                        <p className="portfolio-modal__title">Mobile and desktop app for London hostel store</p>
                        <img className="portfolio-modal__img" src="assets/img/img_project_1_mono.png" alt="modal_img" />
                        <p className="portfolio-modal__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            conse.
                        </p>
                        <div className="portfolio-modal__link">
                            <a href="">www.superapp.com</a>
                        </div>
                        <div className="portfolio-modal__stack">
                            <p className="portfolio-modal__stack-title">Using stack:</p>
                            <ul className="tags">
                                <li>html5</li>
                                <li>css3</li>
                                <li>JavaScript</li>
                                <li>bower</li>
                                <li>grunt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioModal