import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function ProfileSignIn() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
      {/* <section className="single-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                Sign in to Scope Reality
              </h2>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 m-auto">
              <div className="ctl-pro-inf-blk ctl-mar-bot">
                <div className="ctl-inf-bot">
                  <div className="ctl-com-inp ctl-mar-bot">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="thomas@mail.com"
                    />
                  </div>
                  <div className="ctl-com-inp ctl-mar-bot">
                    <label htmlFor="pwd">PASSWORD</label>
                    <input
                      type="password"
                      id="pwd"
                      placeholder="*************"
                    />
                    <a href="#!" className="ctl-fot-pwd">
                      Forget your password?
                    </a>
                  </div>
                  <div className="ctl-sigin ctl-mar-bot">
                    <input type="submit" defaultValue="Sign in" />
                  </div>
                  <div className="ctl-not-mem">
                    <h4 className="ctl-not-mem">
                      Not a member?{" "}
                      <a href="#!" className="ctl-fot-pwd">
                        Register
                      </a>
                    </h4>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
              </div>
              <div className="ctl-pro-inf-scp">
                <div className="ctl-scp-top">
                  <h4>SCOPE REALTY AGENTS:</h4>
                </div>
                <div className="ctl-scp-bot">
                  <div className="ctl-sco-ico-lft">
                    <a href="#!">
                      {" "}
                      <img src="/images/image12.png" alt="" title="" />
                    </a>
                  </div>
                  <div className="ctl-sco-ico-rit">
                    <a href="#!">
                      {" "}
                      <img src="/images/image11.png" alt="" title="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
