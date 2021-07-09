import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function ClientSideECheck() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <div>
        <section className="single-page-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                  Payment
                </h2>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 m-auto">
                <div className="ctl-pro-inf-blk ctl-mar-bot">
                  <div className="ctl-hdr-txt">
                    <h4>Payments Details</h4>
                  </div>
                  <div className="ctl-inf-bot">
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="acc_num">ACCOUNT NUMBER</label>
                      <input
                        type="number"
                        id="acc_num"
                        placeholder={"000000000"}
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="number">ROUTING NUMBER</label>
                      <input
                        type="number"
                        id="number"
                        placeholder={"000000000"}
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="amount">Amount</label>
                      <input
                        type="number"
                        id="amount"
                        placeholder={"000000000"}
                      />
                    </div>
                    <div className="ctl-sen-ech ctl-mar-bot">
                      <input
                        type="checkbox"
                        id="eCheck"
                        className="ctl-che-wid"
                      />
                      <label htmlFor="eCheck">Send an eCheck</label>
                    </div>
                    <div className="ctl-btn-con-bot">
                      <div className="ctl-con-cus-btn">
                        <a href="#!">
                          Continue
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 5L19 12L12 19"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedLayout>
  );
}
