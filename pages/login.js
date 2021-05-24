import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { signIn, csrfToken } from "next-auth/client";

Login.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState(null);

  return (
    <Layout noFooter={true}>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <section className="single-page-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
                  Sign in to Scope Reality
                </h2>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 m-auto">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signIn("email", { email });
                  }}
                  className="login_form"
                >
                  <div className="ctl-pro-inf-blk ctl-mar-bot">
                    <div className="ctl-inf-bot">
                      <div className="ctl-com-inp ctl-mar-bot">
                        <label htmlFor="email">EMAIL</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="thomas@mail.com"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                      {/* <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="pwd">PASSWORD</label>
                      <input
                        type="password"
                        id="pwd"
                        placeholder="*************"
                      />
                      <a href="#!" className="ctl-fot-pwd">
                        Forget your password?
                      </a>
                    </div> */}
                      <div className="ctl-sigin ctl-mar-bot">
                        <input type="submit" defaultValue="Sign in" />
                      </div>
                      <div className="ctl-not-mem">
                        <h4 className="ctl-not-mem">
                          Not a member?
                          <a href="#!" className="ctl-fot-pwd">
                            Register
                          </a>
                        </h4>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                  </div>
                </form>

                <div className="ctl-pro-inf-scp">
                  <div className="ctl-scp-top">
                    <h4>SCOPE REALTY AGENTS:</h4>
                  </div>
                  <div className="ctl-scp-bot">
                    <div className="ctl-sco-ico-lft">
                      <a href="#!">
                        {" "}
                        <img src="/images/image12.png" alt="" />
                      </a>
                    </div>
                    <div className="ctl-sco-ico-rit">
                      <a onClick={() => signIn("google")}>
                        <img src="/images/image11.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
