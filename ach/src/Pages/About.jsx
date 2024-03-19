import React from 'react'
import { Link } from 'react-router-dom'
import "./about.scss"
import AboutSliderData from '../Data/AboutSlider'
import ServicesData from '../Data/ServicesData'
function About() {

    return (
        <>
            <section className='bg-body-tertiary py-3'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <h3 className='fw-semibold'>About</h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/" style={{ color: 'gray' }}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className='about-descrp'>
                                <p>
                                    We have team of experienced and talented qualified accountants who understand business and have exceptional taxation skills. ACH Partners is established by highly experienced accountants. We continue to build on our enviable reputation for providing excellent advice and first class service to our business and personal clients alike.</p>

                                <p>We provide accounting, taxation and business advisory services to clients from various sectors including property, real estate & construction, financial services, contractors & freelancers, dental practices & healthcare, wholesalers, distributors & retailers, hotels & restaurants, manufacturing, technology & media, charities, solicitors, and sports & events management. We emphasise service quality and innovation in providing the right solution to your business whether you are a start up or a large enterprise seeking to reduce costs and improve business performance or compliance.</p>
                            </div>

                            <div className='mb-5'>
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {AboutSliderData.map((a) => (
                                            <div className="carousel-item active">
                                                <img src={a.aboutImage} className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon bg-primary" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span className="carousel-control-next-icon bg-primary" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 ms-auto col-md-12 col-sm-12 col-12">
                            <h2 className='fw-semibold ourservice-title'>Our Services</h2>
                            <ul className='service-list'>
                                {ServicesData.map((a) => (
                                    <li><Link to={`/ourservice/${a.serviceTitle}`}>{a.serviceTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
