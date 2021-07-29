import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AppLayout from "../components/layout";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <AppLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <img
                style={{
                  textAlign: "center", display: "block", width: "270px",
                  height: "270.59px"
                }}
                src="/images/thank-you.png"
                className="center"
              />
              <h2 style={{ textAlign: "center" }}>Thank you</h2>
              <p style={{ textAlign: "center" }}>
                We will have an agent reach out to you as soon as possible
              </p>
              <div className="d-flex justify-content-center py-3">
                <Link href="/">
                  <div className="ctl-sub-btn-bot">
                    <input type="button" className="rounded" defaultValue="Back Home Now" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
