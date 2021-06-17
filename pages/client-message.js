import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function ClientMessage() {
  return (
    <Layout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                Client Message
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ctl-cli-msg-blk">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 ctl-cht-bck-whi">
                    <div className="ctl-onl-cht-box">
                      <ul className="ctl-flx-box-lis">
                        <li>
                          <a href="#!">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                  <div className="col-lg-2 col-md-12 col-sm-12">
                                    <div className="ctl-add-flx-ico">
                                      <div className="ctl-add-onl-ico">
                                        <img
                                          src="/images/add-member.png"
                                          alt=""
                                        />
                                        <div className="ctl-onl-act-cir">
                                          <svg
                                            width={14}
                                            height={15}
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx={7}
                                              cy="7.5"
                                              r={6}
                                              fill="#1BC943"
                                              stroke="white"
                                              strokeWidth={2}
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                    <div className="ctl-onl-mem-txt">
                                      <h3>Nathan Hill, John Doe</h3>
                                      <p>Can you please send me an offer..</p>
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                  <div className="col-lg-2 col-md-12 col-sm-12">
                                    <div className="ctl-add-flx-ico">
                                      <div className="ctl-add-onl-ico">
                                        <img
                                          src="/images/add-member.png"
                                          alt=""
                                        />
                                        <div className="ctl-onl-act-cir">
                                          <svg
                                            width={14}
                                            height={15}
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx={7}
                                              cy="7.5"
                                              r={6}
                                              fill="#1BC943"
                                              stroke="white"
                                              strokeWidth={2}
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                    <div className="ctl-onl-mem-txt">
                                      <h3>Frank Fowler</h3>
                                      <p>Can you please send me an offer..</p>
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                  <div className="col-lg-2 col-md-12 col-sm-12">
                                    <div className="ctl-add-flx-ico">
                                      <div className="ctl-add-onl-ico">
                                        <img
                                          src="/images/add-member.png"
                                          alt=""
                                        />
                                        <div className="ctl-onl-act-cir">
                                          <svg
                                            width={14}
                                            height={15}
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx={7}
                                              cy="7.5"
                                              r={6}
                                              fill="#1BC943"
                                              stroke="white"
                                              strokeWidth={2}
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                    <div className="ctl-onl-mem-txt">
                                      <h3>Carolyn Douglas</h3>
                                      <p>I am intgersted in your service</p>
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                  <div className="col-lg-2 col-md-12 col-sm-12">
                                    <div className="ctl-add-flx-ico">
                                      <div className="ctl-add-onl-ico">
                                        <img
                                          src="/images/add-member.png"
                                          alt=""
                                        />
                                        <div className="ctl-onl-act-cir">
                                          <svg
                                            width={14}
                                            height={15}
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx={7}
                                              cy="7.5"
                                              r={6}
                                              fill="#1BC943"
                                              stroke="white"
                                              strokeWidth={2}
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                    <div className="ctl-onl-mem-txt">
                                      <h3>Maria Reid</h3>
                                      <p>I am intersted in your services</p>
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                  <div className="col-lg-2 col-md-12 col-sm-12">
                                    <div className="ctl-add-flx-ico">
                                      <div className="ctl-add-onl-ico">
                                        <img
                                          src="/images/add-member.png"
                                          alt=""
                                        />
                                        <div className="ctl-onl-act-cir">
                                          <svg
                                            width={14}
                                            height={15}
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <circle
                                              cx={7}
                                              cy="7.5"
                                              r={6}
                                              fill="#1BC943"
                                              stroke="white"
                                              strokeWidth={2}
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                    <div className="ctl-onl-mem-txt">
                                      <h3>Nathan Hill, John Doe</h3>
                                      <p>Can you please send me an offer..</p>
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 cmp-cus-des-pad">
                    <div className="ctl-cli-inf-top">
                      <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="row">
                            <div className="col-lg-2 col-md-12 col-sm-12">
                              <div className="ctl-add-mem-ico ctl-cli-mar-aut">
                                <img src="/images/add-member.png" alt="" />
                              </div>
                            </div>
                            <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                              <div className="ctl-cli-mem-txt">
                                <h3>
                                  Nathan Hill, John Doe, &amp; Frank Fowler
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 m-auto">
                          <div className="ctl-cli-mem-btn">
                            <div className="ctl-bak-cus-btn">
                              <a href="#!">Add Member</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ctl-cli-con-cen">
                      <div className="ctl-cli-con-top">
                        <div className="row">
                          <div className="col-lg-9 col-md-12 col-sm-12 mr-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                                <div className="col-lg-10 col-md-12 col-sm-12">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 mr-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                                <div className="col-lg-10 col-md-12 col-sm-12 ">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 ml-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row ctl-out-goi-mes">
                                <div className="col-lg-10 col-md-12 col-sm-12 ">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico ctl-out-goi-rit">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 ml-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row ctl-out-goi-mes">
                                <div className="col-lg-10 col-md-12 col-sm-12 ">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico ctl-out-goi-rit">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 mr-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                                <div className="col-lg-10 col-md-12 col-sm-12">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 mr-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                                <div className="col-lg-10 col-md-12 col-sm-12 ">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 ml-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row ctl-out-goi-mes">
                                <div className="col-lg-10 col-md-12 col-sm-12 ">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico ctl-out-goi-rit">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-12 col-sm-12 ml-auto">
                            <div className="ctl-msg-mar-bot">
                              <div className="row ctl-out-goi-mes">
                                <div className="col-lg-10 col-md-12 col-sm-12 ">
                                  <div className="cmp-cli-msg-tim">
                                    <div className="ctl-msg-det-txt">
                                      <p>
                                        Hi, Frederick, I have received a message
                                        from you regardin payment issues when
                                        you checkout. Have you read the
                                        instruction?
                                      </p>
                                    </div>
                                    <div className="ctl-msg-clo-tim">
                                      <p> 11:01 AM | Yesterday</p>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-add-mem-ico ctl-out-goi-rit">
                                    <img src="/images/add-member.png" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ctl-cli-opt-bot">
                        <div className="ctl-opt-inf-box">
                          <div className="ctl-add-blo-shw">
                            <div className="ctl-msg-opt-top">
                              <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12">
                                  <div className="ctl-cli-lis-box">
                                    <div className="dropdown">
                                      <button
                                        className="btn  dropdown-toggle ctl-drp-txt-whi"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        Normal
                                      </button>
                                      <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                      >
                                        <a className="dropdown-item" href="#">
                                          Italic
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Bold
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Semi Bold
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-10 col-md-12 col-sm-12 m-auto">
                                  <div className="ctl-msg-opt-lis">
                                    <ul className="ctl-msg-unl-hor">
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M15.6 10.79C16.57 10.12 17.25 9.02 17.25 8C17.25 5.74 15.5 4 13.25 4H7V18H14.04C16.13 18 17.75 16.3 17.75 14.21C17.75 12.69 16.89 11.39 15.6 10.79ZM10 6.5H13C13.83 6.5 14.5 7.17 14.5 8C14.5 8.83 13.83 9.5 13 9.5H10V6.5ZM13.5 15.5H10V12.5H13.5C14.33 12.5 15 13.17 15 14C15 14.83 14.33 15.5 13.5 15.5Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M10 4V7H12.21L8.79 15H6V18H14V15H11.79L15.21 7H18V4H10Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M12 17C15.31 17 18 14.31 18 11V3H15.5V11C15.5 12.93 13.93 14.5 12 14.5C10.07 14.5 8.5 12.93 8.5 11V3H6V11C6 14.31 8.69 17 12 17ZM5 19V21H19V19H5Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.67C3.26 16.67 2.67 17.27 2.67 18C2.67 18.73 3.27 19.33 4 19.33C4.73 19.33 5.33 18.73 5.33 18C5.33 17.27 4.74 16.67 4 16.67ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M2 17H4V17.5H3V18.5H4V19H2V20H5V16H2V17ZM3 8H4V4H2V5H3V8ZM2 11H3.8L2 13.1V14H5V13H3.2L5 10.9V10H2V11ZM7 5V7H21V5H7ZM7 19H21V17H7V19ZM7 13H21V11H7V13Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          {" "}
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#!">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z"
                                              fill="#C4C4C4"
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ctl-msg-inp-cen">
                              <div className="ctl-inp-txt-box">
                                <label htmlFor="message" />
                                <textarea
                                  rows={3}
                                  id="message"
                                  placeholder="Type your message..."
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="ctl-msg-sen-bot">
                            <div className="ctl-sen-cus-btn">
                              <input
                                type="submit"
                                defaultValue="Send Message"
                              />
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
