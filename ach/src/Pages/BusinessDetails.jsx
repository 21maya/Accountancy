import React from 'react'
import { Link, useParams } from 'react-router-dom'
import FlatData from '../Data/FlatData'
import ServicesData from '../Data/ServicesData';
function BusinessDetails() {
    let { bid } = useParams();
    { var abc = FlatData.find((a) => a.id == bid )}
    return (
        <>
            <section>
                <section className='bg-body-tertiary py-3'>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5 col-md-3 col-sm-12 col-12">
                                <h3 className='fw-semibold'>{abc.flatHeading}</h3>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-12 col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/" style={{ color: 'gray' }}>Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{abc.flatHeading}</li>
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
                                <p>{abc.flatBody}</p>
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

export default BusinessDetails
