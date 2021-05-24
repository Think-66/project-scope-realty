import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function ProfileBilling() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="big-head text-center ctl-hdr-mar-bot">Profile</h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ctl-pro-inf-blo">
                <div className="ctl-pro-int-top ctl-bor-bot">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-dis-flx">
                        <div className="ctl-pit-lft">
                          <img src="/images/profile1.png" alt="" title />
                        </div>
                        <div className="ctl-inf-rit">
                          <div className="ctl-hdr-nme">
                            <h4>NAME</h4>
                          </div>
                          <div className="ctl-nme-det">
                            <div className="ctl-nme-lft">
                              <h4>THOMAS HOWELL</h4>
                            </div>
                            <div className="ctl-edt-rit">
                              <img src="/images/edit.svg" alt="" title />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto">
                      <ul className="ctl-rit-lnk">
                        <li>
                          <a href="#!">
                            <img src="/images/profile.svg" alt="" title />{" "}
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href="#!" className="ctl-act-cls">
                            <img src="/images/billing.svg" alt="" title />{" "}
                            Billing
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="/images/refer.svg" alt="" title />
                            Refer A Friend
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ctl-pro-int-bot">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-hdr-txt">
                        <h4>Personal Account</h4>
                      </div>
                      <div className="ctl-inf-bot">
                        <div className="ctl-com-inp ctl-mar-bot">
                          <label htmlFor="number">ROUTING NUMBER</label>
                          <input
                            type="number"
                            id="number"
                            placeholder="000000000"
                          />
                        </div>
                        <div className="ctl-com-inp">
                          <label htmlFor="acc_num">ACCOUNT NUMBER</label>
                          <input
                            type="number"
                            id="acc_num"
                            placeholder="000000000"
                          />
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="ctl-hdr-txt">
                        <h4>Business Account (Optional)</h4>
                      </div>
                      <div className="ctl-inf-bot">
                        <div className="ctl-com-inp ctl-mar-bot">
                          <label htmlFor="number">ROUTING NUMBER</label>
                          <input
                            type="number"
                            id="number"
                            placeholder="000000000"
                          />
                        </div>
                        <div className="ctl-com-inp">
                          <label htmlFor="acc_num">ACCOUNT NUMBER</label>
                          <input
                            type="number"
                            id="acc_num"
                            placeholder="000000000"
                          />
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
