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
            <div className="row justify-content-center">
              <div className="col-8 col-lg-8 col-md-12 col-sm-12 col-12 cmp-num-lis-hdr">
                <h3 className="text-center pt-3">
                  Access The Resources You Need Using
                  The Folders Below
                </h3>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 m-auto pt-4">
                <div className="container">
                  <div className="row justify-content-between g-3">
                    <div className="col-lg-5 col-md-12 ctl-lad-inp-box" style={{ height: '150px' }}>
                      <div className="row justify-content-center p-3">
                        <img src="/images/coins.png" height="60px" />
                      </div>
                      <div className="row justify-content-center ctl-pre-nme-tim pt-2">
                        <h3>Sales Resources</h3>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12 ctl-lad-inp-box" style={{ height: '150px' }}>
                      <div className="row justify-content-center p-3">
                        <img src="/images/rental-resource.png" height="60px" />
                      </div>
                      <div className="row justify-content-center ctl-pre-nme-tim pt-2">
                        <h3>Rental Resources</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedLayout>
  );
}
