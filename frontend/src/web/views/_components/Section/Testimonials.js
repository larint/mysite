import { withRouter } from "react-router-dom"

const Testimonials = (props) => {
    return (
        <div id="testimonials" className="section">
            <div className="background slider-carousel" style={{ backgroundImage: 'url(assets/img/img_bg_main.jpg)' }}>
                <div className="container">
                    <div id="carouselTestimonials" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselTestimonials" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselTestimonials" data-slide-to="1"></li>
                            <li data-target="#carouselTestimonials" data-slide-to="2"></li>
                            <li data-target="#carouselTestimonials" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p className="slider-carousel__title">Antonio Anderson</p>
                                        <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr></hr>
                                        <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                                            cease too the decay. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p className="slider-carousel__title">Antonio Anderson</p>
                                        <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr></hr>
                                        <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                                            cease too the decay. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p className="slider-carousel__title">Antonio Anderson</p>
                                        <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr></hr>
                                        <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                                            cease too the decay. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                        <p className="slider-carousel__title">Antonio Anderson</p>
                                        <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                                        <hr></hr>
                                        <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                                            cease too the decay. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonials" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonials" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        <div className="slider-carousel__circle">
                            <p><i className="fa fa-quote-right" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withRouter(Testimonials)