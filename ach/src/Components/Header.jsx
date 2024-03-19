import React, { useRef, useState } from 'react'
import logo from "../assets/images/logo.png"
import "./header.scss"
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Services from '../Pages/Services'
import BusinessDetails from '../Pages/BusinessDetails'
import OurServiceDetails from '../Pages/OurServiceDetails'
import Search from '../Pages/Search'
function Header() {
    const searchRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
  
    const toggleSearch = () => {
      setVisible(visible === true ? false : true);
      setVisible(!visible); // Logical NOT(!) Operator
    };
    
    const submitSearch = () => {
      let search_text = searchRef.current.value;
      navigate('/search?s=' + search_text, { replace: true });
    };
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg border-bottom">
                    <div className="container py-2 top-size">
                        <Link className="navbar-brand" to="/"><img className='logo' src={logo} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">CONTACT</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="#"><i className="rounded-circle text-white bg-secondary-subtle px-2 py-1 bi bi-search"></i></Link>
                                </li> */}
                                <li className="nav-item nav-item-search">
                                    <Link to="#" className="nav-link pe-0" onClick={toggleSearch}>
                                        <span>
                                            <i
                                                className={"bi " + (visible ? "bi-x" : "bi-search")}
                                            ></i>
                                        </span>
                                    </Link>
                                    <form
                                        className={"search-form " + (visible ? "open" : "close")}
                                    >
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                ref={searchRef}
                                                className="form-control"
                                                placeholder="Search..."
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    onClick={submitSearch}
                                                >
                                                    <i className="{bi bi-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/business/:bid" element={<BusinessDetails />} />
                <Route path="/ourservice/:stitle" element={<OurServiceDetails />} />
                <Route path="/search" element={<Search />}></Route>
            </Routes>
        </>
    )
}

export default Header
