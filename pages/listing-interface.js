import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function ListingInterface() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h2 className="big-head">420 East 80th Street PH</h2>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="single-carousel-wrapper mt-20">
                <div className="owl-carousel owl-theme single-inner-carousel">
                  <div className="item">
                    <img src="/images/slide-1.jpg" alt="slide" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="sidebar-single mt-20">
                <div className="single-side-bar-wrapper">
                  <div className="sidebar-header">
                    <h3 className="price">$10,250</h3>
                    <p className="ammenities">
                      5 rooms | 3 beds | 1 bath | 2,137 SQFT
                    </p>
                    <p>Upper East Side Apartment</p>
                  </div>
                  <ul className="side-bar-list">
                    <li>
                      <p>Listing ID</p>
                      <p>196035</p>
                    </li>
                    <li>
                      <p>Listed By</p>
                      <p>The Ashford</p>
                    </li>
                    <li>
                      <p>Floor</p>
                      <p>Unknown</p>
                    </li>
                    <li>
                      <p>Date Listed</p>
                      <p>5/16/2019</p>
                    </li>
                    <li>
                      <p>Date Available</p>
                      <p>TBD</p>
                    </li>
                    <li>
                      <p>Min. Lease Term</p>
                      <p>12</p>
                    </li>
                    <li>
                      <p>Max. Lease Term</p>
                      <p>12</p>
                    </li>
                    <li>
                      <p>Pet Policy</p>
                      <p>Pets OK</p>
                    </li>
                    <li>
                      <p>Exposure</p>
                      <p>Unknown</p>
                    </li>
                    <li>
                      <p>Condition</p>
                      <p>Unknown</p>
                    </li>
                  </ul>
                </div>
                <a href="#" className="cta-btn btn-lg mt-20">
                  {" "}
                  Message us for more informations
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="wrapper">
                <div className="single-desc mt-20">
                  <h3 className="head">Description</h3>
                  <p className="para">
                    NO BROKER FEES. 420 East 80th Street apartments are ideally
                    located in the Upper East Side of Manhattan between York
                    Avenue and 1st Avenue. They are also within walking distance
                    of the 77th Street Station. Surrounding your new 420 East
                    80th Street apartments home, you will find upscale dining
                    and shopping as well as prominent theatres and nightlife.
                    Exclusive Upper East Side location and 420 East 80th Street
                    apartments are less than a mile from MET. Air Conditioner,
                    Dishwasher, Large Closets, Microwave, Balcony, Patio, View,
                    Doorman, Concierge, Cover Park, Laundry, Receiving Room,
                    Transportation
                  </p>
                </div>
                <div className="features mt-60">
                  <div className="row">
                    <div className="col-12 mb-20">
                      <h3 className="head">Features</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/bellboy 1.svg" alt="" />
                        <span>Doorman</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/subway 1.svg" alt="" />
                        <span>Subway</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/open-door 1.svg" alt="" />
                        <span>Receiving Room</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/elevator 1.svg" alt="" />
                        <span>Elevator</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/washer 1.svg" alt="" />
                        <span>Laundry</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/bellboy 1.svg" alt="" />
                        <span>Concierge</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/barbell 1.svg" alt="" />
                        <span>Health Club</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/boxes 1.svg" alt="" />
                        <span>Storage</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/super 1.png" alt="" />
                        <span>Live In Super</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/garage 1.svg" alt="" />
                        <span>Garage</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/valet 1.svg" alt="" />
                        <span>Valet</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="ft-wrap">
                        <img src="/images/Union.svg" alt="" />
                        <span>One Month Free</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="cta-btn mt-20 btn-lg">
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
}
