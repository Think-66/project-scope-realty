import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  return (
    <ProtectedLayout>

      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="big-head-n text-center ctl-hdr-mar-bot">
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
                            <div className="ctl-nme-lft new-d">
                              <h4>THOMAS HOWELL</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>

                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="ctl-pro-int-bot">
                  <div className="row all-box">
                    <div className="col-md-12 box-up-head">
                      <div className="ctl-hdr-cli">
                        <h4 className="fw-600">Client List</h4>
                      </div>
                    </div>
                    <div className="col-md-6 active">
                      <div className="client-box">
                        <img src="/images/rs-icon.png" alt="Rental Resources" />
                        <p>Add Rental Resources</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="client-box">
                        <img src="/images/sr-icon.png" alt="Rental Resources" />
                        <p>Add Sales Resources</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Link href="/add-event">
                        <div className="client-box">
                          <img src="/images/sd-icon.png" alt="Rental Resources" />
                          <p>Add Events To The Schedule</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <div className="client-box">
                        <img src="/images/tr-icon.png" alt="Rental Resources" />
                        <p>Add Training Resources</p>
                      </div>
                    </div>
                    <div className="clearfix"></div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

    </ProtectedLayout>
  );
}
