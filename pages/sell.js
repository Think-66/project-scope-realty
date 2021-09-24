import Link from "next/link";
import ClientLayout from "../components/client-layout";
import BootstrapNavBar from '../components/BootstrapNavBar'
import React, { useState } from 'react'
import { useRouter } from "next/router";

function Sell() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    message: "",
  });

  const onChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async () => {
    let dt = new Date();
    const data = {
      createdAt: dt.toUTCString,
      name: formData.name,
      stage: "Lead",
      email: formData.email,
      phone: formData.mobile,
      note: formData.message,
      // assignedLenderId: property.id,
      // customMsg: formData.message,
      source: window.location.href
    };

    // console.log("data: ", data);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        $('#propertyContactModal').modal('hide');
        router.push('/thankyou');
      }
    });
  }

  return (
    <ClientLayout noHeader={true}>
      <section>
        <div className="b-cen a-bac">
          <div className="cen-i-top">
            <BootstrapNavBar />
          </div>
          <div className="cen-i-cen">
            <div className="container">
              <div className="cmp-lan-pad-box">
                <div className="cmp-lad-top-pad">
                  <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-11 m-auto">
                      <div className="cmp-lad-lis-hdr">
                        <div className="ctl-web-lan-top py-5">
                          <h3 className="alex-custom">
                            Sell your place.
                          </h3>
                        </div>

                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="row d-flex justify-content-center" style={{ marginTop: "-400px" }}>
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                <form action="#!" method="post">
                  <div className="ctl-prd-frm-box">
                    <div className="ctl-cot-inp-box">
                      <label htmlFor="f_name" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required="required"
                        onChange={onChange}
                        value={formData.name}
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
                        value={formData.email}
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
                        value={formData.mobile}
                        onChange={onChange}
                        placeholder="Phone"
                        required="required"
                        aria-required="true"
                      />
                    </div>

                    <div className="ctl-cot-inp-box">
                      <label htmlFor="l_name" />
                      <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={onChange}
                        value={formData.address}
                        placeholder="Address"
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
                        value={formData.message}
                        onChange={onChange}
                      />
                    </div>
                    <div className="ctl-sub-btn-bot">
                      <input type="button" onClick={onFormSubmit} className="rounded w-100" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

export default Sell;
