import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";
import ReactPaginate from 'react-paginate';

export default function Dashboard() {
  const router = useRouter();

  return (
    <ProtectedLayout>

      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 style={{ color: "#466A7F", fontWeight: 600, paddingBottom: "20px" }} className="text-center">
                Scope Realty Training
              </h2>
            </div>
            <div className="col-lg-12 ">
              <div style={{ width: "100%" }} className="container">
                <div className="row">
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-02.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York? <br />Do you want to rent or buy a property?</p>
                  </div>
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-02.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York? <br />Do you want to rent or buy a property?</p>
                  </div>
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-03.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York?<br /> Do you want to rent or buy a property?</p>
                  </div>
                </div><br />
                <div className="row">
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-04.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York? <br />Do you want to rent or buy a property?</p>
                  </div>
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-05.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York? <br />Do you want to rent or buy a property?</p>
                  </div>
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-06.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York?<br /> Do you want to rent or buy a property?</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-07.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York? <br />Do you want to rent or buy a property?</p>
                  </div>
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-08.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York? <br />Do you want to rent or buy a property?</p>
                  </div>
                  <div className="col-sm">
                    <img style={{ paddingRight: "25px", paddingBottom: "20px" }} src="/images/training-09.png" width="90%" alt="" title="" />
                    <h3 style={{ color: "#466A7F", fontWeight: 600 }}>Search Our Listings Now</h3>
                    <p style={{ color: "#466A7F" }}>Are you looking for a home in New York?<br /> Do you want to rent or buy a property?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row justify-content-center mt-3">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={() => { }}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </ProtectedLayout>
  );
}
