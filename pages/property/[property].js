import { Hidden } from "@material-ui/core";
import Link from "next/link";
import ClientLayout from "../../components/client-layout";

function Property() {
  return (
    <ClientLayout>
      <div className="b-bot">
        <div className="bot-i-top">
          <div className="container">
            <div className="cmp-pro-com-pad">
              <div className="cmp-pro-blo-fir">
                <div className="row">
                  <div className="col-sm-12 col-md-7 col-lg-7 hide-of">
                    <div className="cmp-pro-sli-blo-top">
                      <div className="single-carousel-wrapper">
                        <div
                          className="owl-carousel owl-theme single-inner-carousel"
                          styles={{ width: "100%", overflow: "hidden" }}
                        >
                          <div
                            className="item"
                            styles={{ width: "100%", overflow: "hidden" }}
                          >
                            <img
                              src="/images/slide-1.jpg"
                              alt="slide"
                              styles={{ width: "100%", overflow: "hidden" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cmp-pro-sli-blo-cen">
                      <div className="ctl-prd-hdr-top">
                        <h3>Description</h3>
                      </div>
                      <div className="ctl-prd-txt-bot">
                        <p>
                          This is a fantastic 2 bedroom 1 Bath on East 105th
                          Street and Third Avenue. The apartment can be
                          converted into a 3 bedroom. Large full size bedroom
                          with 9 foot tall closets and oversized windows. New
                          hardwood flooring and brand new stainless steel
                          appliances throughout. Private backyard / patio area!
                          - Full Size Bedroom-Private Backyard Space - Heat
                          &amp; Water Included- Short distance to great
                          restaurants- Short distance to 103rd Street (6) train-
                          Brand new stainless steel appliances- Live in super
                          (Fantastic Management)- Laundry downstairs- 8 Brand
                          new windows with all four exposures and tons of bright
                          light- Great layout *DO NOT BUZZ APARTMENT WHEN YOU
                          ARRIVE FOR A SHOWING
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="ctl-prd-sli-das-cen">
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 ">
                          <div className="cmp-das-lne-box" />
                        </div>
                      </div>
                    </div>
                    <div className="cmp-pro-sli-blo-bot">
                      <div className="ctl-prd-hdr-top">
                        <h3>Features</h3>
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
                            <h4>175 East 105th Street 1R</h4>
                            <h5>East Harlem Apartment</h5>
                            <span>$2,750</span>
                          </div>
                          <div className="cmp-pro-sco-inf-bot">
                            <div className="row">
                              <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div className="row">
                                  <div className=" col-sm-12 col-md-4 col-lg-4 ">
                                    <div className="ctl-prd-ico-con">
                                      <img src="/images/i-icon.png" alt="" />
                                    </div>
                                  </div>
                                  <div className=" col-sm-12 col-md-8 col-lg-8 m-auto">
                                    <div className="cmp-pro-adl-inf">
                                      <h4>4.5 rooms</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div className="row">
                                  <div className=" col-sm-12 col-md-4 col-lg-4 ">
                                    <div className="ctl-prd-ico-con">
                                      <img src="/images/i-icon.png" alt="" />
                                    </div>
                                  </div>
                                  <div className=" col-sm-12 col-md-8 col-lg-8 m-auto">
                                    <div className="cmp-pro-adl-inf">
                                      <h4>2.5 beds</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                                <div className="row">
                                  <div className=" col-sm-12 col-md-4 col-lg-4 ">
                                    <div className="ctl-prd-ico-con">
                                      <img src="/images/i-icon.png" alt="" />
                                    </div>
                                  </div>
                                  <div className=" col-sm-12 col-md-8 col-lg-8 m-auto">
                                    <div className="cmp-pro-adl-inf">
                                      <h4>1 bath</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="cmp-pro-rit-dea">
                          <ul className="cmp-sid-lis-det">
                            <li>
                              <p>Listing ID</p>
                              <p>144253</p>
                            </li>
                            <li>
                              <p>Listed By</p>
                              <p>AAG Management, Inc.</p>
                            </li>
                            <li>
                              <p>Floor</p>
                              <p>Unknown 0</p>
                            </li>
                            <li>
                              <p>Date Listed</p>
                              <p>2/14/2019</p>
                            </li>
                            <li>
                              <p>Date Available</p>
                              <p>TBD</p>
                            </li>
                            <li>
                              <p>Min. Lease Term</p>
                              <p>Unknown</p>
                            </li>
                            <li>
                              <p>Max. Lease Term</p>
                              <p>Unknown</p>
                            </li>
                            <li>
                              <p>Pet Policy</p>
                              <p>Pets OK</p>
                            </li>
                            <li>
                              <p>Exposure</p>
                              <p>Unknown</p>
                            </li>
                            <li>
                              <p>Condition</p>
                              <p>Unknown</p>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="cmp-prd-cot-bot">
                        <div className="ctl-prd-hdr-top">
                          <h3>Contact</h3>
                        </div>
                        <div className="ctl-prd-sec-cen">
                          <h4>A Scope agent for more information</h4>
                        </div>
                        <div className="cmp-prd-frm-bot">
                          <form action="#!" method="post">
                            <div className="ctl-prd-frm-box">
                              <div className="ctl-cot-inp-box">
                                <label htmlFor="f_name" />
                                <input
                                  type="text"
                                  name="f_name"
                                  id="f_name"
                                  placeholder="First Name"
                                  required="required"
                                  aria-required="true"
                                />
                              </div>
                              <div className="ctl-cot-inp-box">
                                <label htmlFor="l_name" />
                                <input
                                  type="text"
                                  name="l_name"
                                  id="l_name"
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
                                  placeholder="Email Address"
                                  required="required"
                                  aria-required="true"
                                />
                              </div>
                              <div className="ctl-cot-inp-box">
                                <label htmlFor="phone" />
                                <input
                                  type="number"
                                  name="phone"
                                  id="phone"
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
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="ctl-sub-btn-bot">
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix" />
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
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const property = {
    fee: "NO FEE",
    title: "60 Water Street",
    description: "Studio 1 bath",
    type: "Appartment",
    price: "$ 3,595",
    image: "/images/landing-listing1.png",
  };

  return { props: property };
};

export default Property;
