import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";

export default function JoinConversation() {
  const router = useRouter();

  return (
    <ProtectedLayout>
      <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-8 col-lg-8 col-md-12 col-sm-12 col-12 m-auto">
              <div className="cmp-jon-con">
                <div className="ctl-con-hdr-top">
                  <h3>
                    <span>Alex Munnayer</span> is Requesting You To Join A
                    Conversation On <span>Scope Reality</span>{" "}
                  </h3>
                </div>
                <div className="ctl-con-par-cen">
                  <p>Simply click the button below to join the conversation</p>
                </div>
                <div className="ctl-con-btn-bot">
                  <input type="submit" defaultValue="Join Conversation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProtectedLayout>
  );
}
