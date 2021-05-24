import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function PracticeExamPageOne() {
  const router = useRouter();

  return (
    <div>
      <div>
        <header>
          <div className="b-top" />
        </header>
        {/* listing view section */}
        <section>
          <div className="b-cen c-bac">
            <div className="cen-i-top">
              <div className="cmp-nav-shw-blo">
                <div className="container">
                  <nav className="navbar navbar-expand-lg">
                    <div className="col-lg-2 col-md-2 col-sm-12">
                      <a className="navbar-brand col-xs-4" href="#">
                        <img src="/images/logo.svg" />{" "}
                      </a>
                      <button
                        className="navbar-toggler col-xs-2"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                      <div
                        className="collapse navbar-collapse login_navbar "
                        id="navbarTogglerDemo03"
                      >
                        <ul className="navbar-nav  ml-auto ">
                          <li className="nav-item">
                            <a className=" ctl-nav-lnk-txt" href="#">
                              Our Team{" "}
                              <span className="sr-only">(current)</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className=" ctl-nav-lnk-txt" href="#">
                              About Us
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className=" ctl-nav-lnk-txt" href="#">
                              Rent
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className=" ctl-nav-lnk-txt" href="#">
                              Buy
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className=" ctl-nav-lnk-txt" href="#">
                              Sell
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                      <a href="#" className="clt-sig-lnk">
                        SIGN IN
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="cen-i-cen">
              <div className="container">
                <div className="cmp-pad-top-pad">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>Listing Type</h3>
                      </div>
                      <div className="cmp-lis-typ">
                        <ul className="ctl-ulo-lis">
                          <li>
                            <div className="ctl-lis-btn">
                              <input
                                type="radio"
                                id="listing_type"
                                name="listing"
                              />
                              <label htmlFor="listing_type">For Rent</label>
                            </div>
                          </li>
                          <li>
                            <div className="ctl-lis-btn">
                              <input
                                type="radio"
                                id="listing_sale"
                                name="listing"
                              />
                              <label htmlFor="listing_sale">For Sale</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="cmp-lis-hdr">
                        <h3>Features</h3>
                      </div>
                      <div className="cmp-lis-typ">
                        <ul className="ctl-ulo-lis">
                          <li>
                            <div className="ctl-lis-btn">
                              <input type="checkbox" id="pets" />
                              <label htmlFor="pets">Pets Ok</label>
                            </div>
                          </li>
                          <li>
                            <div className="ctl-lis-btn">
                              <input type="checkbox" id="house" />
                              <label htmlFor="house">Has Open House</label>
                            </div>
                          </li>
                          <li>
                            <div className="ctl-lis-btn">
                              <input type="checkbox" id="new_listing" />
                              <label htmlFor="new_listing">New Listing</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <div className="ctl-tab-eso-top">
                        <div className="ctl-pil-tab-top">
                          <div className="cmp-lis-hdr">
                            <h3>Search By</h3>
                          </div>
                          <ul
                            className="ctl-tab-ind-bot nav nav-tabs"
                            id="myTabMD"
                            role="tablist"
                          >
                            <li className="nav-item waves-effect waves-light">
                              <a
                                className="active"
                                id="first-tab"
                                data-toggle="tab"
                                href="#tab-first"
                                role="tab"
                                aria-controls="tab-first"
                                aria-selected="true"
                              >
                                Location
                              </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                              <a
                                id="second-tab"
                                data-toggle="tab"
                                href="#tab-second"
                                role="tab"
                                aria-controls="tab-second"
                                aria-selected="false"
                              >
                                Zip Code
                              </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                              <a
                                id="third-tab"
                                data-toggle="tab"
                                href="#tab-third"
                                role="tab"
                                aria-controls="tab-third"
                                aria-selected="false"
                              >
                                Bedrooms
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-content cmp-lft-pad"
                          id="myTabContentMD"
                        >
                          <div
                            className="tab-pane fade active show"
                            id="tab-first"
                            role="tabpanel"
                            aria-labelledby="first-tab"
                          >
                            <div className="cmp-lis-hdr">
                              <h3>Location</h3>
                            </div>
                            <div className="ctl-tab-eso-top">
                              <div className="ctl-frm-pot-box">
                                <label htmlFor="location" />
                                <input
                                  type="search"
                                  id="location"
                                  className="ctl-pot-inp-box"
                                  placeholder="Type location"
                                  required
                                />
                              </div>
                              <div className="ctl-pot-btn-bot">
                                <button type="submit">
                                  <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="24--basic--screenshot">
                                      <path
                                        d="M4.65869 13.2009L5.625 14.062L6.59131 13.2009C9.67697 10.4509 11.25 8.00823 11.25 5.72166C11.25 2.47541 8.75872 0 5.625 0C2.49128 0 0 2.47541 0 5.72166C0 8.00823 1.57303 10.4509 4.65869 13.2009ZM5.625 1.875C7.72586 1.875 9.375 3.51363 9.375 5.72166C9.375 7.28695 8.15813 9.23146 5.625 11.5473C3.09187 9.23146 1.875 7.28695 1.875 5.72166C1.875 3.51363 3.52414 1.875 5.625 1.875ZM5.625 2.8125C7.1783 2.8125 8.4375 4.0717 8.4375 5.625C8.4375 7.1783 7.1783 8.4375 5.625 8.4375C4.0717 8.4375 2.8125 7.1783 2.8125 5.625C2.8125 4.0717 4.0717 2.8125 5.625 2.8125ZM4.6875 5.625C4.6875 5.10723 5.10723 4.6875 5.625 4.6875C6.14277 4.6875 6.5625 5.10723 6.5625 5.625C6.5625 6.14277 6.14277 6.5625 5.625 6.5625C5.10723 6.5625 4.6875 6.14277 4.6875 5.625Z"
                                        transform="translate(1.875 0.9375)"
                                        id="icon"
                                        fill="#000000"
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-second"
                            role="tabpanel"
                            aria-labelledby="second-tab"
                          >
                            <div className="cmp-lis-hdr">
                              <h3>Zip Code</h3>
                            </div>
                            <div className="ctl-tab-eso-top">
                              <div className="ctl-frm-pot-box">
                                <label htmlFor="zipcode" />
                                <input
                                  type="text"
                                  id="zipcode"
                                  className="ctl-pot-inp-box"
                                  placeholder="Type Zipcode"
                                  required
                                />
                              </div>
                              <div className="ctl-pot-btn-bot">
                                <button type="submit">
                                  <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="24--basic--screenshot">
                                      <path
                                        d="M4.65869 13.2009L5.625 14.062L6.59131 13.2009C9.67697 10.4509 11.25 8.00823 11.25 5.72166C11.25 2.47541 8.75872 0 5.625 0C2.49128 0 0 2.47541 0 5.72166C0 8.00823 1.57303 10.4509 4.65869 13.2009ZM5.625 1.875C7.72586 1.875 9.375 3.51363 9.375 5.72166C9.375 7.28695 8.15813 9.23146 5.625 11.5473C3.09187 9.23146 1.875 7.28695 1.875 5.72166C1.875 3.51363 3.52414 1.875 5.625 1.875ZM5.625 2.8125C7.1783 2.8125 8.4375 4.0717 8.4375 5.625C8.4375 7.1783 7.1783 8.4375 5.625 8.4375C4.0717 8.4375 2.8125 7.1783 2.8125 5.625C2.8125 4.0717 4.0717 2.8125 5.625 2.8125ZM4.6875 5.625C4.6875 5.10723 5.10723 4.6875 5.625 4.6875C6.14277 4.6875 6.5625 5.10723 6.5625 5.625C6.5625 6.14277 6.14277 6.5625 5.625 6.5625C5.10723 6.5625 4.6875 6.14277 4.6875 5.625Z"
                                        transform="translate(1.875 0.9375)"
                                        id="icon"
                                        fill="#000000"
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-third"
                            role="tabpanel"
                            aria-labelledby="third-tab"
                          >
                            <div className="cmp-lis-hdr">
                              <h3>Bedrooms</h3>
                            </div>
                            <div className="ctl-tab-eso-top">
                              <div className="ctl-frm-pot-box">
                                <label htmlFor="bedrooms" />
                                <input
                                  type="text"
                                  id="bedrooms"
                                  className="ctl-pot-inp-box"
                                  placeholder="Type Bedrooms"
                                  required
                                />
                              </div>
                              <div className="ctl-pot-btn-bot">
                                <button type="submit">
                                  <svg
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 15 15"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="24--basic--screenshot">
                                      <path
                                        d="M4.65869 13.2009L5.625 14.062L6.59131 13.2009C9.67697 10.4509 11.25 8.00823 11.25 5.72166C11.25 2.47541 8.75872 0 5.625 0C2.49128 0 0 2.47541 0 5.72166C0 8.00823 1.57303 10.4509 4.65869 13.2009ZM5.625 1.875C7.72586 1.875 9.375 3.51363 9.375 5.72166C9.375 7.28695 8.15813 9.23146 5.625 11.5473C3.09187 9.23146 1.875 7.28695 1.875 5.72166C1.875 3.51363 3.52414 1.875 5.625 1.875ZM5.625 2.8125C7.1783 2.8125 8.4375 4.0717 8.4375 5.625C8.4375 7.1783 7.1783 8.4375 5.625 8.4375C4.0717 8.4375 2.8125 7.1783 2.8125 5.625C2.8125 4.0717 4.0717 2.8125 5.625 2.8125ZM4.6875 5.625C4.6875 5.10723 5.10723 4.6875 5.625 4.6875C6.14277 4.6875 6.5625 5.10723 6.5625 5.625C6.5625 6.14277 6.14277 6.5625 5.625 6.5625C5.10723 6.5625 4.6875 6.14277 4.6875 5.625Z"
                                        transform="translate(1.875 0.9375)"
                                        id="icon"
                                        fill="#000000"
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                <div className="cmp-pad-bot-pad">
                  <div className="row">
                    <div className="col-lg-8 ml-auto">
                      <div className="ctl-cmp-flx-blo">
                        <div className="cmp-sho-adv-lft">
                          <div className="ctl-adv-ser-blo">
                            <h3>SHOW ADVANCE SEARCH</h3>
                          </div>
                        </div>
                        <div className="cmp-sho-adv-rit">
                          <div className="ctl-com-flx-blo">
                            <div className="ctl-frn-pot-box " id="ctlInputBox">
                              <label htmlFor="search" />
                              <input
                                type="text"
                                id="search"
                                className="ctl-pot-inp-box"
                                placeholder="Type Zipcode"
                                required
                              />
                            </div>
                            <div className="ctl-poa-inp-box">
                              <button type="submit" id="ctlSubmit">
                                {" "}
                                SEARCH
                                <svg
                                  width={21}
                                  height={21}
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.75 15.75C4.88401 15.75 1.75 12.616 1.75 8.75C1.75 4.88401 4.88401 1.75 8.75 1.75C12.616 1.75 15.75 4.88401 15.75 8.75C15.75 10.3676 15.2013 11.8571 14.2799 13.0424L18.9937 17.7563L17.7563 18.9937L13.0424 14.2799C11.8571 15.2013 10.3676 15.75 8.75 15.75ZM14 8.75C14 11.6495 11.6495 14 8.75 14C5.8505 14 3.5 11.6495 3.5 8.75C3.5 5.8505 5.8505 3.5 8.75 3.5C11.6495 3.5 14 5.8505 14 8.75Z"
                                    fill="black"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="b-bot">
            <div className="bot-i-top">
              <div className="container">
                <div className="cmp-cen-pad-top">
                  <div className="cmp-lis-hdr-top">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-7">
                        <div className="cmp-num-lis-hdr">
                          <h3>6 Listing</h3>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-5">
                        <div className="cmp-key-flx-rit">
                          <div className="ctl-frm-key-box">
                            <label htmlFor="keyword" />
                            <input
                              type="search"
                              id="keyword"
                              className="ctl-key-inp-box"
                              placeholder="Search by keywords"
                            />
                          </div>
                          <div className="ctl-key-btn-box">
                            <button type="submit"> Search</button>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmp-lis-hdr-cen">
                    <ul className="cmp-mar-cus-bot">
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo1.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo2.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo1.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo2.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo1.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo2.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo1.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cmp-lis-flx-inf">
                          <div className="ctl-inf-com-con">
                            <div className="ctl-lis-pic-lft">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-lis-pic-con">
                                    <img src="/images/list-photo2.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-lis-inf-rit">
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <h3>The Vanderbil </h3>
                                    <p>235 East 40th Street </p>
                                    <p> 40b Scope REality </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Heading</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>40b </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Location</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Murray Hill New York, NY </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Price</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>$1,007,777</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Layout</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>1 Bed</p>
                                    <p>1.5 Baths</p>
                                    <p>791 SQFT </p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                              <div>
                                <div className="ctl-com-inf-con">
                                  <div className="ctl-bui-com-hdr">
                                    <div className="ctl-lis-sel-inf">
                                      <select>
                                        <option value>Date Available</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ctl-bui-com-des">
                                    <p>Immediate</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* *************** Footer ******************* */}
        <footer className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <h3 className="ft-head">Headquarters</h3>
                <ul className="ft-list">
                  <li>
                    68 West 39th Street, 2nd Fl <br />
                    New York, NY 10018
                  </li>
                  <li>(212) 408-1620</li>
                  <li>(347) 619-6229 fax</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <h3 className="ft-head">COmpany</h3>
                <ul className="ft-list">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <h3 className="ft-head">More</h3>
                <ul className="ft-list">
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">ASPCA</a>
                  </li>
                  <li>
                    <a href="#">St. Jude Children's Research Hospital</a>
                  </li>
                  <li>
                    <a href="#">Covenant House New York</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-stripe">
            <p>© Copyright 2021</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
