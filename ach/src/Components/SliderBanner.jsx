import React from 'react'
import BannerData from '../Data/BannerData'
import "./sliderbanner.scss"
import 'animate.css';
import { Link } from 'react-router-dom';
function SliderBanner() {

    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
                <div className="carousel-inner">
                    {BannerData.map((a) => (
                        <div className="carousel-item active position-relative" data-bs-interval="5000">
                            <img src={a.bannerimg} className="d-block w-100 img-fluid" alt="..." />

                            <div className="row banner-caption position-absolute" >
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12" >
                                    <h3 className='banner-title animate__animated animate__fadeInDown'>{a.bannertitle}</h3>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <p className='banner-body animate__animated animate__fadeInDown'>{a.bannerbody}</p>
                                </div>



                                <div className="banner-buttons d-flex gap-2 position-absolute">
                                    <button className='btn btn-primary p-2 bhg animate__animated animate__fadeInLeft'><Link to="/about"> Our Company</Link> </button>
                                    <button className='btn btn-dark p-2 bhg animate__animated animate__fadeInRight'><Link to="/contact"> Get in Touch</Link> </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default SliderBanner
