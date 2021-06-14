import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AppLayout from "../components/layout";

export default function NotFound() {
  const router = useRouter();

  return (
    <AppLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                Client Message
              </h2>
              <img
                style={{ textAlign: "center", display: "block" }}
                src="/images/404.png"
                className="center"
              />
              <h2 style={{ textAlign: "center" }}>Opps!</h2>
              <p style={{ textAlign: "center" }}>
                We can’t seen to find the page the you are looking for
              </p>
              <a
                style={{
                  textAlign: "center",
                  display: "block",
                  background: "#4AAEE8",
                }}
                href="#"
                className="cta-btn btn-sm mt-20"
              >
                {" "}
                Message us for more informations
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
