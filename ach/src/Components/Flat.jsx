import React from 'react'
import "./flat.scss"
import FlatData from '../Data/FlatData'
import { Link } from 'react-router-dom'
function Flat() {
    return (
        <>
            <div className="container">
                <div className="row my-5 justify-content-between">
                    {FlatData.map((a)=>(
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 flatimg-gap">
                            <div className="img-box position-relative">
                                <img className='w-100 img-fluid' src={a.flatImg} alt="" />
                                <h6 className='flat-btn position-absolute fw-bold text-light'>{a.flatHeading.toUpperCase()} <i className="position-absolute bi bi-chevron-right"></i> </h6>
                                <div className="top-anim w-100 position-absolute">
                                    <p>{a.flatBody}</p>
                                    <button className='btn btn-primary px-4 top-anim-btn fw-bold'><Link to={`/business/${a.id}`} style={{color:'black'}}>{a.flatBtn}</Link><i className="position-absolute bi bi-chevron-right px-1"></i> </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Flat
