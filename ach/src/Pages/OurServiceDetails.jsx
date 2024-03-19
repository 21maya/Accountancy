import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./ourservicedetails.scss"
import OurServiceData from '../Data/OurServicesData'
import ServicesData from '../Data/ServicesData'
function OurServiceDetails() {
    let { stitle } = useParams();
    { var abc = OurServiceData.find((a) => a.serviceTitle == stitle) }
    return (
        <>

            <section>
                <section className='bg-body-tertiary py-3'>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                <h3 className='fw-semibold'>{abc.serviceTitle}</h3>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12 ">
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item  ms-auto"><Link to="/" style={{ color: 'gray' }}>Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{abc.serviceTitle}</li>
                                    </ol>
                                </nav>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 left-paragraph">
                                <h5 className='fw-semibold text-dark'>{abc.Title1}</h5 >
                                <p>{abc.serviceDescription1}</p>
                                <p>{abc.paragraph1}</p>
                                <h5 className='fw-semibold text-dark'>{abc.Title2}</h5 >
                                <p>{abc.paragraph2}</p>
                                <h5 className='fw-semibold text-dark'>{abc.Title3}</h5 >
                                <p>{abc.paragraph3}</p>

                            </div>

                            <div className="img-content col-lg-3 mb-4 col-md-12 col-sm-12 col-12">
                                <img className='w-75 img-fluid mt-3' src={abc.serviceImg} alt="" />
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
            </section>
        </>
    )
}

export default OurServiceDetails
