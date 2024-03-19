import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ServicesData from "../Data/ServicesData";

function Search() {
  const [filteredList, setFilteredList] = new useState([]);
  const [searchParams] = useSearchParams();

  // Get search value
  const query = searchParams.get("s");
  // Create copy of services data
  let updatedList = [...ServicesData];
  // Include all elements which includes the search query
  updatedList = updatedList.filter((item) => {
    return item.serviceDetails.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  // Trigger render with updated values
  useEffect(() => {
    setFilteredList(updatedList);
  }, []);

  return (
    <>
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-between">
              <h2 className="page-heading">Search results for:</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Search
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about pt-5">
        <div className="container">
          <div className="row">
            {filteredList.map((item, index) => (
              <div className="col-lg-12 mb-3" key={index}>
                <h2 className="mb-2">
                  {item.serviceTitle}
                </h2>
                <p>{item.serviceDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
