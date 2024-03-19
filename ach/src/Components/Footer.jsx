import React from 'react'
import "./footer.scss"
import footerimg from "../assets/images/footerimg.png"
import { Link } from 'react-router-dom'
import ServicesData from '../Data/ServicesData'
function Footer() {
    return (
        <>
            <footer>
                <div className="container py-3 ">
                    <div className="row  py-3 footer-border">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 mb-3">
                            <p><i className=" footer-icon bi bi-envelope"></i> info@achpartners.co.uk</p>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-12 mb-3">
                            <p><i className="footer-icon bi bi-telephone"></i> 020 3524 1031</p>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <p><i className="footer-icon bi bi-geo-alt"></i> Sabichi House 5 Wadsworth Road Perivale UB67JD</p>
                        </div>
                    </div>

                    <div className="row py-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 fs">
                            <p>We are ACH Partners, company primarily focus to deliver comprehensive services to business to improve their performance.</p>
                            <strong>Highlights, Specialties & Features</strong>
                            <p>Fully qualified accountants and tax advisors, Quality service, Quick turnaround, Fixed fee.</p>
                            <strong>Professional Associations & Certifications</strong>
                            <p >Association of Chartered Certified Accountants</p>
                            <img className='w-75 img-fluid' src={footerimg} alt="" />
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 fs">
                            <strong>Address</strong>
                            <p className='my-2'>Ground Floor</p>
                            <p>Francis House</p>
                            <p>2 Park Road</p>
                            <p>Barnet</p>
                            <p>EN5 5RN</p>
                            <p>Phone: 020 3524 1031</p>
                            <strong>Opening Hours</strong>
                            <p>Monday – Friday : 9:00 am – 7:00 pm</p>
                            <p>Saturday – Sunday : Close</p>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className='getintouch'>
                                <h6>Stay in Touch:</h6>
                                <form action="">
                                    <input className='form-control w-50 get-input' type="email" placeholder='Your email address' />
                                    <button type="submit" className="submit mt-4">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
                <div className=" footer-border-top">

                    <ul className="d-flex gap-3 justify-content-end container last-footer">
                        {ServicesData.map((a) => (
                            <li><Link to={`/ourservice/${a.serviceTitle}`}>{a.serviceTitle}</Link></li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
