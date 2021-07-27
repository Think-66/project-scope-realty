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
                <h3 className="pt-3">
                  Rental Resources
                </h3>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 m-auto pt-4">
                <iframe src="https://drive.google.com/embeddedfolderview?id=1FvJH2w_9hLcp4tvVxSTKAeytlnh23Of_#grid" width="100%" height="1000" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedLayout>
  );
}
