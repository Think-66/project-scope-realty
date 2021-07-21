import React, { useState } from "react";
import { useRouter } from "next/router";
import ClientLayout from "../../components/client-layout";
import {
  getListingsDataaById,
  getListingsRealtymById,
} from "../../services/listingApiService";
import { followUpBoss } from "../../services/crmAPIServices";

export default function ListingInterface({ property }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    const data = {
      createdAt: "2021-07-20",
      firstName: formData.firstName,
      lastName: formData.lastName,
      stage: "Lead",
      emails: [formData.email],
      phones: [formData.mobile],
      // assignedLenderId: property.id,
      // customMsg: formData.message,
    };
    const res = await followUpBoss(data);
  };

  const router = useRouter();
  return (
    <>
      <ClientLayout>
        <div className="b-bot">
          <div className="bot-i-top">
            <div className="container">
              <div className="cmp-pro-com-pad">
                <div className="cmp-pro-blo-fir">
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-7 hide-of p-0 product-details-left-background">
                      <div className="cmp-pro-sli-blo-top">
                        <div className="single-carousel-wrapper">
                          <div
                            className="owl-carousel owl-theme single-inner-carousel"
                            styles={{ width: "100%", overflow: "hidden" }}
                          >
                            <div id="carouselContactControls" className="carousel slide" data-ride="carousel">
                              <div className="carousel-inner">
                                {property?.images?.map((o, index) => (<div key={index} className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                                  <img className="d-block w-100" src={o} alt="First slide" />
                                </div>))}
                              </div>
                              <a className="carousel-control-prev" href="#carouselContactControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                              </a>
                              <a className="carousel-control-next" href="#carouselContactControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cmp-pro-sli-blo-cen px-5">
                        <div className="ctl-prd-hdr-top">
                          <h3 style={{ color: "#4AAEE8" }}>Description</h3>
                        </div>
                        <div className="ctl-prd-txt-bot">
                          <p>
                            {property?.description || "No description available"}
                          </p>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="cmp-pro-sli-blo-bot px-5 pb-3">
                        <div className="ctl-prd-hdr-top">
                          <h3 style={{ color: "#4AAEE8" }}>Features</h3>
                        </div>
                        <div className="ctl-prd-fea-bot">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                              <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                  <div className="row">
                                    <div className=" col-sm-12 col-md-4 col-lg-4 m-auto">
                                      <div className="ctl-prd-ico-con">
                                        <img src="/images/i-icon.png" alt="" />
                                      </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-8 col-lg-8 cmp-prd-pad-lft">
                                      <div className="cmp-pro-fea-inf">
                                        <h4>Patio</h4>
                                        <span>Dishwasher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" col-sm-12 col-md-4 col-lg-4 mb-3">
                                  <div className="row">
                                    <div className=" col-sm-12 col-md-4 col-lg-4 m-auto">
                                      <div className="ctl-prd-ico-con">
                                        <img src="/images/i-icon.png" alt="" />
                                      </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-8 col-lg-8 cmp-prd-pad-lft">
                                      <div className="cmp-pro-fea-inf">
                                        <h4>Patio</h4>
                                        <span>Dishwasher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" col-sm-12 col-md-4 col-lg-4 mb-3">
                                  <div className="row">
                                    <div className=" col-sm-12 col-md-4 col-lg-4 m-auto">
                                      <div className="ctl-prd-ico-con">
                                        <img src="/images/i-icon.png" alt="" />
                                      </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-8 col-lg-8 cmp-prd-pad-lft">
                                      <div className="cmp-pro-fea-inf">
                                        <h4>Patio</h4>
                                        <span>Dishwasher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className=" col-sm-12 col-md-5 col-lg-5 ">
                      <div className="cmp-prd-rit-box">
                        <div className="cmp-pro-bck-col">
                          <div className="cmp-pro-rit-col">
                            <div className="cmp-pro-sco-hdr-top">
                              <h4>{property?.address}</h4>
                              <h5>{property?.neighborhood}</h5>
                              <span>${property?.price}</span>
                            </div>
                            <div className="cmp-pro-sco-inf-bot">
                              <div className="row">
                                {property?.rooms && <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                  <div className="row">
                                    <div className=" col-sm-12 col-md-4 col-lg-4 ">
                                      <div className="ctl-prd-ico-con">
                                        <img src="/images/i-icon.png" alt="" />
                                      </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-8 col-lg-8 m-auto">
                                      <div className="cmp-pro-adl-inf">
                                        <h4>{property?.rooms} rooms</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>}
                                {property?.bedRooms && <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                  <div className="row">
                                    <div className=" col-sm-12 col-md-4 col-lg-4 ">
                                      <div className="ctl-prd-ico-con">
                                        <img src="/images/i-icon.png" alt="" />
                                      </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-8 col-lg-8 m-auto">
                                      <div className="cmp-pro-adl-inf">
                                        <h4>{property?.bedRooms} beds</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>}
                                {property?.bathRooms && <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                  <div className="row">
                                    <div className=" col-sm-12 col-md-4 col-lg-4 ">
                                      <div className="ctl-prd-ico-con">
                                        <img src="/images/i-icon.png" alt="" />
                                      </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-8 col-lg-8 m-auto">
                                      <div className="cmp-pro-adl-inf">
                                        <h4>{property?.bathRooms} bath</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>}
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="cmp-pro-rit-dea">
                            <ul className="cmp-sid-lis-det">
                              <li>
                                <p>Listing ID</p>
                                <p>{property?.id}</p>
                              </li>
                              <li>
                                <p>Listed By</p>
                                <p>{property?.agent || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Floor</p>
                                <p>{property?.floor || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Date Listed</p>
                                <p>{property?.date || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Date Available</p>
                                <p>{property?.available || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Min. Lease Term</p>
                                <p>{property?.minLease || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Max. Lease Term</p>
                                <p>{property?.maxLease || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Pet Policy</p>
                                <p>{property?.pet || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Exposure</p>
                                <p>{property?.exposure || "Not Available"}</p>
                              </li>
                              <li>
                                <p>Condition</p>
                                <p>{property.condition || "Not Available"}</p>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="cmp-prd-cot-bot">
                          <button type="button" className="btn btn-primary rounded-pill py-2 w-100" style={{ background: '#4AAEE8', borderColor: '#4AAEE8' }} data-toggle="modal" data-target="#contactModal">
                            Get In Touch
                          </button>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientLayout>
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
                        value={formData.firstName}
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
                        value={formData.lastName}
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
                      <input type="button" onClick={onFormSubmit} className="rounded-pill w-100" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let tempRes = {};
  if (
    context?.query?.property?.length > 1 &&
    context.query.property[0] == "1"
  ) {
    const res = await getListingsDataaById(context.query.property[1]);
    if (res?.LISTINGS?.length > 0) {
      tempRes.price = res.LISTINGS[0].PRICE;
      tempRes.rooms = res.LISTINGS[0].TOTAL_ROOMS;
      tempRes.bathRooms = res.LISTINGS[0].BATHROOMS;
      tempRes.bedRooms = res.LISTINGS[0].BEDROOMS;
      tempRes.neighborhood = res.LISTINGS[0].NEIGHBORHOODS;
      tempRes.id = res.LISTINGS[0].ID;
      tempRes.agent = res.LISTINGS[0].MANAGEMENT_COMPANY;
      tempRes.floor = res.LISTINGS[0].FLOOR_NUMBER;
      tempRes.date = res.LISTINGS[0].DATE_CREATE;
      tempRes.available = res.LISTINGS[0].DATE_AVAILABLE;
      tempRes.minLease = res.LISTINGS[0].MIN_LEASE_TERM;
      tempRes.maxLease = res.LISTINGS[0].MAX_LEASE_TERM;
      tempRes.pet = res.LISTINGS[0].PETS_POLICY;
      tempRes.exposure = res.LISTINGS[0].EXPOSURE_REMARK;
      tempRes.condition = res.LISTINGS[0].CONDITION;
      tempRes.description = res.LISTINGS[0].DESCRIPTION;
      tempRes.images =
        res.LISTINGS[0]?.PHOTOS?.length > 0
          ? res.LISTINGS[0].PHOTOS.map((o) => o.PHOTO_URL)
          : [];
      tempRes.address = res.LISTINGS[0].ADDRESS;
    }
  } else {
    const res = await getListingsRealtymById(context.query.property[1]);
    if (res?.length > 0) {
      tempRes.price = res[0].financials_price;
      tempRes.rooms = res[0].essentials_rooms;
      tempRes.bathRooms = res[0].essentials_bath;
      tempRes.bedRooms = res[0].essentials_beds;
      tempRes.neighborhood = res[0].main_neighborhood;
      tempRes.id = res[0].main_id;
      tempRes.agent = res[0].agents_agent_name;
      tempRes.floor = res[0].essentials_floor;
      tempRes.date = res[0].essentials_date;
      tempRes.available = res[0].essentials_available;
      tempRes.minLease = res[0].financials_monthsfreereqminlease;
      tempRes.pet = res[0].essentials_pets;
      tempRes.description = res[0].main_description;
      tempRes.images = [res[0].main_image];
      tempRes.address = res[0].main_address;
    }
  }
  return { props: { property: tempRes } };
}
