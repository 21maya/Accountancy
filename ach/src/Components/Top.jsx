import React from 'react'
import "./top.scss"
import { Link } from 'react-router-dom'

function Top() {
    return (
        <>
            <section className='top pt-2'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 top-size col-md-12 col-sm-12 col-12">
                            <ul className='d-flex gap-3 p-0'>
                                <li className='border-end pe-3'><i className="bi bi-telephone"></i> Call us: 020 3524 1031</li>
                                <li><i className="bi bi-envelope"></i> Email: info@achpartners.co.uk</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 top-size col-md-12 col-sm-12 col-12">
                            <ul className='d-flex gap-3 align-items-center justify-content-end'>
                                <li className='question'><i className="bi bi-question-circle"></i> Have any questions?</li>
                                <li className='appoint'><button className='btn btn-primary'> <Link to="/contact">GET AN APPOINTMENT</Link></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Top
