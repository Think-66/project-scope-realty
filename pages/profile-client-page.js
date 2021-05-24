import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function ProfileClientPage() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="big-head text-center ctl-hdr-mar-bot">
                Client Page
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ctl-pro-inf-blo">
                <div className="ctl-pro-int-top ctl-bor-bot">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="ctl-dis-flx">
                        <div className="ctl-pit-lft">
                          <img src="/images/profile1.png" alt="" />
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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-inf-bot">
                        <div className="ctl-com-inp ctl-mar-bot">
                          <label htmlFor="addr">ADDRESS LINE 1:</label>
                          <input
                            type="text"
                            id="addr"
                            placeholder="THE VANDERBILT"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-com-inp ctl-mar-bot">
                        <label htmlFor="addrr">
                          ADDRESS LINE 2 (OPTIONAL):
                        </label>
                        <input
                          type="text"
                          id="addrr"
                          placeholder="235 East 40th Street 40B Scope Reality"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="city">CITY:</label>
                            <input
                              type="text"
                              id="city"
                              placeholder="New York"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="zipcode">ZIP CODE:</label>
                            <input
                              type="number"
                              id="zipcode"
                              placeholder="10016"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="state">STATE:</label>
                            <input
                              type="text"
                              id="state"
                              placeholder="New York"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="ctl-com-inp ctl-mar-bot">
                            <label htmlFor="country">COUNTRY:</label>
                            <input
                              type="text"
                              id="country"
                              placeholder="United States"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-com-inp ctl-mar-bot">
                        <label htmlFor="timezone">TIME ZONE:</label>
                        <input type="text" id="timezone" placeholder="GMT-4" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-com-inp ctl-mar-bot">
                        <label htmlFor="pnumber">PHONE NUMBER:</label>
                        <input
                          type="number"
                          id="pnumber"
                          placeholder="+1 222 333 22"
                        />
                      </div>
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
