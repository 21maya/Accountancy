import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.scss"
import Iframe from 'react-iframe'
function Contact() {
    return (
        <>
            <section className='bg-body-tertiary py-3'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <h3 className='fw-semibold'>Contact</h3>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12 col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/" style={{ color: 'gray' }}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
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
                            <h3 className='fw-bold getintouch-title'>GET IN TOUCH WITH US</h3>
                        </div>
                    </div>
                    <div className="row my-4 justify-content-center">
                        <div className="col-lg-11 text-secondary col-md-12 col-sm-12 col-12 text-center">
                            <p>If you need to speak to us about a general query fill in the form below and we will call you back within the same working day.</p>
                        </div>
                        <div className="row text-center my-5">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d620.4333419244535!2d-0.3155097748687747!3d51.53645010594991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe40afd59398381cd!2sACH%20Partners%20Limited!5e0!3m2!1sen!2suk!4v1582478264184!5m2!1sen!2suk" width="100%" height="450" frameborder="0" style="border: 0px; pointer-events: none;" allowfullscreen=""></Iframe>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className='contact-title'>
                                <h5 className='fw-semibold'>Address</h5>
                                <p>Ground Floor, Francis House, 2 Park Road, Barnet, EN5 5RN</p>
                            </div>
                            <div className='my-5 contact-title'>
                                <h5 className='fw-semibold'>Phone number</h5>
                                <p>Call us: 020 3524 1031</p>
                            </div>
                            <div className='contact-title'>
                                <h5 className='fw-semibold'>E-mail address</h5>
                                <p>info@achpartners.co.uk</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className='contact-form'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-light fw-semibold">Your Name (required)</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail2" className="form-label text-light fw-semibold">Your Email (required)</label>
                                        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail3" className="form-label text-light fw-semibold">Subject</label>
                                        <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail4" className="form-label text-light fw-semibold">Your Message</label>
                                        <textarea className="form-control"  id="exampleInputEmail4" style={{ height: 250 }} defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-success">SEND</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Contact
