import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function ProfileClientFile() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                Client File
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ctl-fil-inf-blk ctl-mar-bot">
                <div className="ctl-hdr-fil-top">
                  <div className="ctl-ico-bck-top">
                    <div className="ctl-bak-cus-btn">
                      <a href="#!">
                        <svg
                          width={20}
                          height={14}
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.54503 12.853L1.00005 7M6.54503 1.14697L1.00005 7M1.00005 7L19.1801 7"
                            stroke="#0A0A0A"
                            strokeWidth="1.4"
                          />
                        </svg>
                        Back
                      </a>
                    </div>
                  </div>
                  <div className="ctl-inf-fil-bot">
                    <div className="ctl-fil-ico-lft">
                      <div className="ctl-fie-ico">
                        <img src="/images/file.png" alt="" />
                      </div>
                    </div>
                    <div className="ctl-fil-hdr-rit">
                      <h3> File #2324242</h3>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="ctl-hdr-fil-bot">
                  <div className="ctl-fil-con-wid">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="ctl-doc-fil-img">
                          <img src="/images/document-file.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ctl-dow-doc-bot">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="ctl-dow-cus-btn">
                          <a href="/images/document-file.png" download>
                            Download{" "}
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.5774 6.80324L9.8333 9.54732V0.72583H8.16663V9.54732L5.42256 6.80324L4.24404 7.98175L8.99997 12.7377L13.7559 7.98175L12.5774 6.80324ZM17.3333 15.7258V12.3925H15.6666V15.7258H2.33329V12.3925H0.666626V15.7258C0.666626 16.6463 1.41282 17.3925 2.33329 17.3925H15.6666C16.5871 17.3925 17.3333 16.6463 17.3333 15.7258Z"
                                fill="#466A7F"
                              />
                            </svg>
                          </a>
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
      </section>
    </ProtectedLayout>
  );
}
