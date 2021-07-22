import { Provider } from "next-auth/client";
import Head from 'next/head'
import React, { useState } from 'react'
import { followUpBoss } from "../services/crmAPIServices";
import { useRouter } from 'next/router'

import "../public/css/vendors/bootstrap.min.css";
import "../public/css/vendors/calender-style.css";
import "../public/css/vendors/calender-theme.css";
import "../public/css/main.css";
import "../public/css/responsive.css";
import "../public/css/core.css";
import "../public/css/custom.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const onChange = (e) => {
    e.persist();
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async () => {
    let dt = new Date();

    const data = {
      createdAt: dt.toUTCString,
      firstName: contactFormData.firstName,
      lastName: contactFormData.lastName,
      stage: "Lead",
      emails: [contactFormData.email],
      phones: [contactFormData.mobile],
      // assignedLenderId: property.id,
      // customMsg: formData.message,
      source: window.location.href,
      // custMessage: formData.message
    };

    const res = await followUpBoss(data);
    $('#contactModal').modal('hide');
    router.push('/listing-interface/confirm');
  };

  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Head>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/calendar.min.js"></script>
        {/* <script src="/js/main.js"></script> */}
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/app.js"></script>
      </Head>
      <Component {...pageProps} />
      <div className="modal" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ top: '10%' }} role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ background: '#3A4A54' }}>
              <div className="container">
                <div className="row justify-content-end">
                  <button type="button" style={{ color: 'white' }} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="row modal-title px-5" id="contactModalLabel" style={{ color: 'white' }}><h3>I am interested In This Property</h3>
                  <div style={{ color: '#4AAEE8' }}>Fill out the form below</div>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="cmp-prd-frm-bot">
                <form action="#!" method="post">
                  <div className="ctl-prd-frm-box">
                    <div className="ctl-cot-inp-box">
                      <label htmlFor="f_name" />
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        required="required"
                        onChange={onChange}
                        value={contactFormData.firstName}
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-cot-inp-box">
                      <label htmlFor="l_name" />
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={onChange}
                        value={contactFormData.lastName}
                        placeholder="Last Name"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-cot-inp-box">
                      <label htmlFor="email" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={onChange}
                        value={contactFormData.email}
                        placeholder="Email Address"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-cot-inp-box">
                      <label htmlFor="phone" />
                      <input
                        type="number"
                        name="mobile"
                        id="mobile"
                        value={contactFormData.mobile}
                        onChange={onChange}
                        placeholder="Phone"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-cot-inp-box">
                      <label htmlFor="message" />
                      <textarea
                        rows={4}
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={contactFormData.message}
                        onChange={onChange}
                      />
                    </div>
                    <div className="ctl-sub-btn-bot">
                      <input type="button" onClick={onFormSubmit} className="rounded-pill w-100" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
