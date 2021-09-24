import ClientLayout from "../components/client-layout";
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'

function Sell() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    link: "",
    description: "",
    date: "",
    startTime: "",
    endTime: ""
  });

  const onChange = (e) => {
    e.persist();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const onFormSubmit = async (e) => {
    axios.post('/api/event/event', formData).then((res) => { console.log(res.data) })
    setFormData({
      name: "",
      link: "",
      description: "",
      date: "",
      startTime: "",
      endTime: ""
    })
    e.preventDefault()
  }

  return (
    <ClientLayout>
      <section className="single-page-sec">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-sm-12">
            <div className="col-12 justify-content-center my-4" style={{ textAlign: "center" }}>
              <h1>Add Events To The Schedule</h1>
            </div>
            <div className="card">
              <div className="card-body">
                <div style={{ textAlign: "center" }}>
                  <h5 className="card-title my-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </div>
                <form onSubmit={onFormSubmit} method="post">
                  <div className="ctl-prd-frm-box">
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="name">EVENT NAME</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Event Name"
                        required
                        onChange={onChange}
                        value={formData.name}
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="date">DATE</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Date"
                        required
                        onChange={onChange}
                        value={formData.date}
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="time">START TIME</label>
                      <input
                        type="time"
                        name="startTime"
                        id="startTime"
                        placeholder="Time"
                        required
                        onChange={onChange}
                        value={formData.startTime}
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="time">END TIME</label>
                      <input
                        type="time"
                        name="endTime"
                        id="endTime"
                        placeholder="Time"
                        required
                        onChange={onChange}
                        value={formData.endTime}
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="description">DESCRIPTION</label>
                      <textarea
                        name="description"
                        id="description"
                        placeholder="Description"
                        required
                        onChange={onChange}
                        value={formData.description}
                        aria-required="true"
                        style={{ width: "100%", padding: "10px" }}
                        rows={4}
                      />
                    </div>
                    <div className="ctl-com-inp ctl-mar-bot">
                      <label htmlFor="link">Link/Resources (optional)</label>
                      <input
                        type="test"
                        name="link"
                        id="link"
                        placeholder="https://"
                        onChange={onChange}
                        value={formData.link}
                        aria-required="true"
                      />
                    </div>
                    <div className="ctl-sub-btn-bot">
                      <input type="submit" className="rounded w-100" defaultValue="Submit" />
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
