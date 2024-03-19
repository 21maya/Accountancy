import React from 'react'
import "./services.scss"
import { Link } from 'react-router-dom'
import ServicesData from '../Data/ServicesData'
function Services() {
    return (
        <>
            <section className='bg-body-tertiary py-3'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <h3 className='fw-semibold'>Services</h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/" style={{ color: 'gray' }}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center">
                            <h3 className='fw-bold getintouch-title'>What We Can Offer You</h3>
                        </div>
                    </div>
                    <div className="row my-4 justify-content-center">
                        <div className="col-lg-11 text-secondary col-md-12 col-sm-12 col-12 text-center">
                            <p>We are dedicated group to play an important role to various entities (either small, medium and large) on organizing such as tax consultancy, accounting sevices, financial outsourcing and reporting.</p>
                        </div>

                        <div className="row my-5">
                            {ServicesData.map((a) => (
                                <div className="col-lg-4 service-box my-4 col-md-12 col-sm-12 col-12">
                                    <div className="service-img-box">
                                        <img className='w-100 img-fluid ' src={a.serviceImg} alt="" />
                                        <div className="anim-box">
                                        </div>
                                    </div>
                                    <h4 className='my-3 fw-semibold'>{a.serviceTitle}</h4>
                                    <p>{a.serviceDetails}</p>
                                    <button className='btn p-0 fw-semibold'><Link className='abt-btn' to={`/ourservice/${a.serviceTitle}`} style={{ color: '#1e73be' }}>Read More</Link><i className="position-absolute bi bi-chevron-right abt-chevron px-1" style={{ color: '#1e73be' }}></i> </button>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
