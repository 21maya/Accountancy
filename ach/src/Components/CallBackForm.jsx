import React from 'react'
import "./callbackform.scss"
function CallBackForm() {
    return (
        <>
            <section className="call-back-form text-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4 text-end col-md-10 col-sm-10 col-10">
                            <h3 className='fw-bold'>GET A CALL BACK</h3>
                            <p> If you need to speak to us about a general query fill in the form right and we will call you back within the same working day.</p>
                        </div>
                        <div className="col-lg-7 offset-lg-1 col-md-12 col-sm-12 col-12">
                            <div className="form-box">
                                <p>How can we help?*</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="dropdown">
                                            <button className="btn-field dropdown-toggle text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                I would like to discuss about project
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">I would like to discuss about services:</a></li>
                                                <li><a className="dropdown-item" href="#">I would like to discuss project:</a></li>
                                                <li><a className="dropdown-item" href="#">I would like to contact:</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 email-field col-md-12 col-sm-12 col-12">
                                        <input className='btn-field' type="email" placeholder='Your Email' />
                                    </div>

                                </div>
                                <div className="row my-3">
                                    <div className="col-lg-6">
                                        <input className='btn-field' type="text" placeholder='Your phone number' />
                                    </div>
                                    <div className="col-lg-4 email-field">
                                        <button className='btn btn-success submit-btn'>Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallBackForm
