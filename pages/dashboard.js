import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function Dashboard() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="big-head text-center ctl-hdr-mar-bot">
                Dashboard
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ctl-pro-inf-blo">
                <div className="ctl-pro-int-top ctl-bor-bot">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="ctl-dis-flx">
                        <div className="ctl-pit-lft">
                          <img src="/images/profile1.png" alt="" title="" />
                        </div>
                        <div className="ctl-inf-rit">
                          <div className="ctl-nme-det">
                            <div className="ctl-nme-lft">
                              <h4>THOMAS HOWELL</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ctl-pro-int-bot">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="ctl-hdr-cli">
                        <h4>Client List</h4>
                      </div>
                      <div className="ctl-inf-bot">
                        <div className="cmp-armilk-tabl-inf">
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                              <div>
                                <table className="ctl-tab-bor-inf ctl-tab-bodr">
                                  <thead className="ctl-tabl-head">
                                    <tr className="ctl-tabl-hdr-txt">
                                      <th scope="col">
                                        <input
                                          type="radio"
                                          className="ctl-chk-box"
                                        />{" "}
                                        CLIENT NAME
                                      </th>
                                      <th scope="col">FILE NAME</th>
                                      <th scope="col">DATE</th>
                                      <th scope="col" />
                                    </tr>
                                  </thead>
                                  <tbody className="ctl-tab-bod ctl-tabl-bg">
                                    <tr className="ctl-tabl-inf-txt ctl-tab-bod-bac">
                                      <td data-label="CLIENT NAME">
                                        <input
                                          type="radio"
                                          className="ctl-chk-box"
                                        />{" "}
                                        Emily Blunt
                                      </td>
                                      <td data-label="FILE NAME">
                                        File name #6523
                                      </td>
                                      <td data-label="DATE">
                                        Mar 221, 2020 - 10:20
                                      </td>
                                      <td data-label>
                                        <div className="ctl-res-flx ">
                                          <div className="ctl-req-btn ctl-btn-rit">
                                            <a href="#!">Request File</a>
                                          </div>
                                          <div className="ctl-vie-btn ctl-btn-rit">
                                            <a href="#!">
                                              View File{" "}
                                              <img
                                                src="/images/arow.png"
                                                alt=""
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="ctl-tabl-inf-txt ctl-tab-bod-bac">
                                      <td data-label="CLIENT NAME">
                                        <input
                                          type="radio"
                                          className="ctl-chk-box"
                                        />{" "}
                                        Emily Blunt
                                      </td>
                                      <td data-label="FILE NAME">
                                        File name #6523
                                      </td>
                                      <td data-label="DATE">
                                        Mar 221, 2020 - 10:20
                                      </td>
                                      <td data-label>
                                        <div className="ctl-res-flx ">
                                          <div className="ctl-req-btn ctl-btn-rit">
                                            <a href="#!">Request File</a>
                                          </div>
                                          <div className="ctl-vie-btn ctl-btn-rit">
                                            <a href="#!">
                                              View File{" "}
                                              <img
                                                src="/images/arow.png"
                                                alt=""
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="ctl-tabl-inf-txt ctl-tab-bod-bac">
                                      <td data-label="CLIENT NAME">
                                        <input
                                          type="radio"
                                          className="ctl-chk-box"
                                        />{" "}
                                        Emily Blunt
                                      </td>
                                      <td data-label="FILE NAME">
                                        File name #6523
                                      </td>
                                      <td data-label="DATE">
                                        Mar 221, 2020 - 10:20
                                      </td>
                                      <td data-label>
                                        <div className="ctl-res-flx ">
                                          <div className="ctl-req-btn ctl-btn-rit">
                                            <a href="#!">Request File</a>
                                          </div>
                                          <div className="ctl-vie-btn ctl-btn-rit">
                                            <a href="#!">
                                              View File{" "}
                                              <img
                                                src="/images/arow.png"
                                                alt=""
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="ctl-tabl-inf-txt ctl-tab-bod-bac">
                                      <td data-label="CLIENT NAME">
                                        <input
                                          type="radio"
                                          className="ctl-chk-box"
                                        />{" "}
                                        Emily Blunt
                                      </td>
                                      <td data-label="FILE NAME">
                                        File name #6523
                                      </td>
                                      <td data-label="DATE">
                                        Mar 221, 2020 - 10:20
                                      </td>
                                      <td data-label>
                                        <div className="ctl-res-flx ">
                                          <div className="ctl-req-btn ctl-btn-rit">
                                            <a href="#!">Request File</a>
                                          </div>
                                          <div className="ctl-vie-btn ctl-btn-rit">
                                            <a href="#!">
                                              View File{" "}
                                              <img
                                                src="/images/arow.png"
                                                alt=""
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
}
