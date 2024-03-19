import React from 'react'
import "./ourServices.scss"
import OurServiceData from '../Data/OurServicesData'
import { Link } from 'react-router-dom'
function OurServices() {
    return (
        <>
            <section className='our-services'>
                <div className="container py-5">
                    <h2 className='fw-semibold ourservice-title'>Our Services</h2>
                    <div className="row my-5 flex-wrap">
                        {OurServiceData.map((a) => (
                            <div className="col-lg-3 offset-lg-1 my-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-9 offset-2">
                                <div className='service-box'>
                                    <h5 className='fw-semibold'>{a.serviceTitle}</h5>
                                    <p className='service-description'>{a.serviceDescription}</p>
                                    <button className='btn btn-success px-4'><Link to={`/ourservice/${a.serviceTitle}`}>READ MORE</Link> <i className="position-absolute bi bi-chevron-right ps-2"></i></button >
                                    <div className='icon-box'>
                                        <i className={`service-icon ${a.serviceIcon}`}></i>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices
