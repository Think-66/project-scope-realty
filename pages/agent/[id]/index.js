import React, { useEffect, useState } from "react";
import ClientLayout from "../../../components/client-layout";
import AgentDetails from "../../../components/agent/agent-details";
import AgentMenu from "../../../components/agent/agent-menu";
// import { useParams } from "react-router-dom";
import { useRouter } from "next/router";
import { getAgentById } from "../../../services/agentAPIService";

function Index({ listings, transactions, testimonials, press }) {
  const router = useRouter();
  const { id } = router.query;
  const [agent, setAgent] = useState({});

  const [activeTab, setActiveTab] = useState("listing");

  useEffect(() => {
    console.log("id: ", id);
    getAgentDetails();
  }, []);

  const getAgentDetails = async () => {
    const agent = await getAgentById(id);
    setAgent(agent[0]);
    console.log("agent: ", agent);
  };

  return (
    <ClientLayout darkNav={true}>
      <section>
        <div className="b-cen">
          <div className="cen-i-cen">
            <div className="cmp-bck-gry-blo">
              <div className="ctl-all-pad-blo">
                <div className="container">
                  <AgentDetails details={agent} />

                  <div className="ctl-tab-lnk-bot py-4">
                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            setActiveTab("listing");
                          }}
                          className={activeTab === "listing" ? "active" : ""}
                        >
                          <svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.75 5.25C1.75 6.2165 2.5335 7 3.5 7C4.4665 7 5.25 6.2165 5.25 5.25C5.25 4.2835 4.4665 3.5 3.5 3.5C2.5335 3.5 1.75 4.2835 1.75 5.25ZM7 4.375H19.25V6.125H7V4.375ZM19.25 9.625H7V11.375H19.25V9.625ZM7 16.625H19.25V14.875H7V16.625ZM1.75 15.75C1.75 16.7165 2.5335 17.5 3.5 17.5C4.4665 17.5 5.25 16.7165 5.25 15.75C5.25 14.7835 4.4665 14 3.5 14C2.5335 14 1.75 14.7835 1.75 15.75ZM3.5 12.25C2.5335 12.25 1.75 11.4665 1.75 10.5C1.75 9.5335 2.5335 8.75 3.5 8.75C4.4665 8.75 5.25 9.5335 5.25 10.5C5.25 11.4665 4.4665 12.25 3.5 12.25Z"
                              fill="black"
                            />
                          </svg>
                          <p>Listings</p>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setActiveTab("transactions");
                          }}
                          className={
                            activeTab === "transactions" ? "active" : ""
                          }
                        >
                          <svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7 7.875C7 4.49226 9.74226 1.75 13.125 1.75C16.5077 1.75 19.25 4.49226 19.25 7.875C19.25 11.2577 16.5077 14 13.125 14H11.375V15.75H9.625V17.5H7.875V19.25H1.75V14.5126L7.1295 9.13306C7.04371 8.72241 7 8.30139 7 7.875ZM9.625 14V12.25H13.125C15.5412 12.25 17.5 10.2912 17.5 7.875C17.5 5.45875 15.5412 3.5 13.125 3.5C10.7088 3.5 8.75 5.45875 8.75 7.875C8.75 8.3113 8.8136 8.73808 8.93732 9.14626L9.0894 9.64803L3.5 15.2374V17.5H6.125V15.75H7.875V14H9.625ZM11.375 7.875C11.375 8.8415 12.1585 9.625 13.125 9.625C14.0915 9.625 14.875 8.8415 14.875 7.875C14.875 6.9085 14.0915 6.125 13.125 6.125C12.1585 6.125 11.375 6.9085 11.375 7.875Z"
                              fill="black"
                            />
                          </svg>
                          <p>Transactions</p>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setActiveTab("testimonials");
                          }}
                          className={
                            activeTab === "testimonials" ? "active" : ""
                          }
                        >
                          <svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.25 19.0787L10.5759 15.75H17.5C18.4665 15.75 19.25 14.9665 19.25 14V3.5C19.25 2.5335 18.4665 1.75 17.5 1.75H3.5C2.5335 1.75 1.75 2.5335 1.75 3.5V14C1.75 14.9665 2.5335 15.75 3.5 15.75H5.25V19.0787ZM10.0741 14L7 15.9213V14H3.5V3.5H17.5V14H10.0741Z"
                              fill="black"
                            />
                          </svg>
                          <p>Testimonials</p>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setActiveTab("press");
                          }}
                          className={activeTab === "press" ? "active" : ""}
                        >
                          <svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.85668 3.53491L5.15024 4.72068C3.59716 6.15909 2.625 8.21583 2.625 10.4996C2.625 12.7834 3.59716 14.8402 5.15024 16.2786L3.85668 17.4643C2.0196 15.7115 0.875 13.2392 0.875 10.4996C0.875 7.76001 2.0196 5.28773 3.85668 3.53491ZM7.875 10.4999C7.875 11.9497 9.05025 13.1249 10.5 13.1249C11.9497 13.1249 13.125 11.9497 13.125 10.4999C13.125 9.05017 11.9497 7.87492 10.5 7.87492C9.05025 7.87492 7.875 9.05017 7.875 10.4999ZM11.375 10.4999C11.375 10.9832 10.9832 11.3749 10.5 11.3749C10.0168 11.3749 9.625 10.9832 9.625 10.4999C9.625 10.0167 10.0168 9.62492 10.5 9.62492C10.9832 9.62492 11.375 10.0167 11.375 10.4999ZM7.74593 7.10007L6.44583 5.90831C5.17584 7.03057 4.375 8.67158 4.375 10.4996C4.375 12.3277 5.17584 13.9687 6.44583 15.091L7.74593 13.8992C6.75703 13.0971 6.125 11.8722 6.125 10.4996C6.125 9.1271 6.75703 7.90219 7.74593 7.10007ZM17.1433 3.5352C18.9804 5.28802 20.125 7.76029 20.125 10.4999C20.125 13.2395 18.9804 15.7118 17.1433 17.4646L15.8498 16.2789C17.4028 14.8404 18.375 12.7837 18.375 10.4999C18.375 8.21611 17.4028 6.15938 15.8498 4.72096L17.1433 3.5352ZM16.625 10.4999C16.625 8.67186 15.8242 7.03085 14.5542 5.90859L13.2541 7.10035C14.243 7.90247 14.875 9.12738 14.875 10.4999C14.875 11.8724 14.243 13.0974 13.2541 13.8995L14.5542 15.0912C15.8242 13.969 16.625 12.328 16.625 10.4999Z"
                              fill="black"
                            />
                          </svg>
                          <p>Press</p>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>

        {activeTab === "listing" && (
          <div className="b-bot">
            <div className="bot-i-top">
              <div className="container">
                <div className="cmp-cen-pad-top">
                  <div className="cmp-lis-hdr-top">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-8">
                        <div className="cmp-num-lis-hdr">
                          <h3>Paul's Listing</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmp-lis-hdr-cen">
                    <ul className="cmp-mar-cus-bot">
                      {listings.map((property, key) => {
                        return (
                          <li key={key}>
                            <div className="cmp-lis-flx-inf">
                              <div className="ctl-inf-com-con">
                                <div className="ctl-lis-pic-lft">
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-lis-pic-con">
                                        <img
                                          src="/images/list-photo2.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="ctl-lis-inf-rit">
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <select>
                                            <option value>Heading</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <h3>{property.title}</h3>
                                        <p>{property.address}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <select>
                                            <option value>Heading</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>40b </p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <select>
                                            <option value>Location</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>{property.address}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <select>
                                            <option value>Price</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>{property.price}</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <select>
                                            <option value>Layout</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>1 Bed</p>
                                        <p>1.5 Baths</p>
                                        <p>791 SQFT </p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ctl-com-inf-con">
                                      <div className="ctl-bui-com-hdr">
                                        <div className="ctl-lis-sel-inf">
                                          <select>
                                            <option value>
                                              Date Available
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="ctl-bui-com-des">
                                        <p>Immediate</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="b-bot">
            <div className="bot-i-top">
              <div className="container">
                <div className="cmp-cen-pad-top">
                  <div className="cmp-lis-hdr-top">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-8">
                        <div className="cmp-num-lis-hdr">
                          <h3>Transaction History</h3>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-4">
                        <div className="cmp-key-flx-rit">
                          <div className="ctl-frm-key-box">
                            <label htmlFor="keyword" />
                            <input
                              type="search"
                              id="keyword"
                              className="ctl-key-inp-box"
                              placeholder="Search by keywords"
                            />
                          </div>
                          <div className="ctl-key-btn-box">
                            <button type="submit">
                              <svg
                                width={21}
                                height={21}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.75 15.75C4.88401 15.75 1.75 12.616 1.75 8.75C1.75 4.88401 4.88401 1.75 8.75 1.75C12.616 1.75 15.75 4.88401 15.75 8.75C15.75 10.3676 15.2013 11.8571 14.2799 13.0424L18.9937 17.7563L17.7563 18.9937L13.0424 14.2799C11.8571 15.2013 10.3676 15.75 8.75 15.75ZM14 8.75C14 11.6495 11.6495 14 8.75 14C5.8505 14 3.5 11.6495 3.5 8.75C3.5 5.8505 5.8505 3.5 8.75 3.5C11.6495 3.5 14 5.8505 14 8.75Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmp-lis-hdr-cen">
                    <div className="row">
                      {transactions.map((item, key) => {
                        return (
                          <div
                            key={key}
                            className="col-sm-12 col-md-6 col-lg-6 mb-5"
                          >
                            <div className="cmp-tra-con-blo">
                              <div className="ctl-tra-nme-top">
                                <div className="row">
                                  <div className="col-sm-12 col-md-4 col-lg-4 ">
                                    <div className="ctl-tra-txt-nme">
                                      <div className="ctl-tra-ico-lft">
                                        <img
                                          src="/images/transaction-photo1.png"
                                          alt=""
                                        />
                                      </div>
                                      <div className="ctl-sol-txt">
                                        <h3>SOLD</h3>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-8 col-lg-8 ">
                                    <div className="ctl-tra-pad-cus">
                                      <div className="ctl-tra-txt-top">
                                        <h3>Building</h3>
                                        <p>{item.address}</p>
                                      </div>
                                      <div className="ctl-tra-txt-bot">
                                        <h3>Location</h3>
                                        <p>Murray Hill New York, NY</p>
                                      </div>
                                      <div className="clearfix" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="cmp-rev-inf-bot">
                    <div className="cmp-rev-pag-blo">
                      <nav
                        aria-label="Page navigation example"
                        className="cmp-exp-pge-lnk"
                      >
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="cmp-page-link active"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="cmp-page-link active"
                              href="#"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">»</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className="b-bot">
            <div className="bot-i-top">
              <div className="container">
                <div className="cmp-cen-pad-top">
                  <div className="cmp-lis-hdr-top">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-8">
                        <div className="cmp-num-lis-hdr">
                          <h3>Testimonials</h3>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-4">
                        <div className="cmp-key-flx-rit">
                          <div className="ctl-frm-key-box">
                            <label htmlFor="keyword" />
                            <input
                              type="search"
                              id="keyword"
                              className="ctl-key-inp-box"
                              placeholder="Search by keywords"
                            />
                          </div>
                          <div className="ctl-key-btn-box">
                            <button type="submit">
                              <svg
                                width={21}
                                height={21}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.75 15.75C4.88401 15.75 1.75 12.616 1.75 8.75C1.75 4.88401 4.88401 1.75 8.75 1.75C12.616 1.75 15.75 4.88401 15.75 8.75C15.75 10.3676 15.2013 11.8571 14.2799 13.0424L18.9937 17.7563L17.7563 18.9937L13.0424 14.2799C11.8571 15.2013 10.3676 15.75 8.75 15.75ZM14 8.75C14 11.6495 11.6495 14 8.75 14C5.8505 14 3.5 11.6495 3.5 8.75C3.5 5.8505 5.8505 3.5 8.75 3.5C11.6495 3.5 14 5.8505 14 8.75Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cmp-lis-hdr-cen">
                    <div className="row">
                      {testimonials.map((item) => {
                        return (
                          <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                            <div className="cmp-rev-con-blo">
                              <div className="ctl-rev-nme-top">
                                <div className="row">
                                  <div className="col-sm-12 col-md-6 col-lg-6 ">
                                    <div className="ctl-rev-txt-nme">
                                      <h3>{item.agentName}</h3>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-6 ">
                                    <ul className="ctl-str-con-lis">
                                      <li>
                                        <svg
                                          width={18}
                                          height={16}
                                          viewBox="0 0 18 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.97869 10.1132L4.02939 15.648L8.99998 13.0348L13.9706 15.648L13.0213 10.1132L17.0426 6.19337L11.4853 5.38585L8.99998 0.350098L6.51468 5.38585L0.957397 6.19337L4.97869 10.1132ZM10.6037 9.32765L10.9823 11.535L8.99998 10.4928L7.01768 11.535L7.39627 9.32765L5.79256 7.76441L8.00883 7.44237L8.99998 5.43409L9.99113 7.44237L12.2074 7.76441L10.6037 9.32765Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          width={18}
                                          height={16}
                                          viewBox="0 0 18 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.97869 10.1132L4.02939 15.648L8.99998 13.0348L13.9706 15.648L13.0213 10.1132L17.0426 6.19337L11.4853 5.38585L8.99998 0.350098L6.51468 5.38585L0.957397 6.19337L4.97869 10.1132ZM10.6037 9.32765L10.9823 11.535L8.99998 10.4928L7.01768 11.535L7.39627 9.32765L5.79256 7.76441L8.00883 7.44237L8.99998 5.43409L9.99113 7.44237L12.2074 7.76441L10.6037 9.32765Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          width={18}
                                          height={16}
                                          viewBox="0 0 18 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.97869 10.1132L4.02939 15.648L8.99998 13.0348L13.9706 15.648L13.0213 10.1132L17.0426 6.19337L11.4853 5.38585L8.99998 0.350098L6.51468 5.38585L0.957397 6.19337L4.97869 10.1132ZM10.6037 9.32765L10.9823 11.535L8.99998 10.4928L7.01768 11.535L7.39627 9.32765L5.79256 7.76441L8.00883 7.44237L8.99998 5.43409L9.99113 7.44237L12.2074 7.76441L10.6037 9.32765Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          width={18}
                                          height={16}
                                          viewBox="0 0 18 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.97869 10.1132L4.02939 15.648L8.99998 13.0348L13.9706 15.648L13.0213 10.1132L17.0426 6.19337L11.4853 5.38585L8.99998 0.350098L6.51468 5.38585L0.957397 6.19337L4.97869 10.1132ZM10.6037 9.32765L10.9823 11.535L8.99998 10.4928L7.01768 11.535L7.39627 9.32765L5.79256 7.76441L8.00883 7.44237L8.99998 5.43409L9.99113 7.44237L12.2074 7.76441L10.6037 9.32765Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </li>
                                      <li>
                                        <svg
                                          width={18}
                                          height={16}
                                          viewBox="0 0 18 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.97869 10.1132L4.02939 15.648L8.99998 13.0348L13.9706 15.648L13.0213 10.1132L17.0426 6.19337L11.4853 5.38585L8.99998 0.350098L6.51468 5.38585L0.957397 6.19337L4.97869 10.1132ZM10.6037 9.32765L10.9823 11.535L8.99998 10.4928L7.01768 11.535L7.39627 9.32765L5.79256 7.76441L8.00883 7.44237L8.99998 5.43409L9.99113 7.44237L12.2074 7.76441L10.6037 9.32765Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ctl-rev-txt-cen">
                                <p>{item.description}</p>
                              </div>
                              <div className="ctl-rev-pho-bot">
                                <div className="row">
                                  <div className="col-sm-12 col-md-4 col-lg-2 ">
                                    <div className="ctl-rew-pic-con">
                                      <img src="/images/review1.png" alt="" />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-8 col-lg-10">
                                    <div className="ctl-rev-nme-tim">
                                      <h3>{item.customerName}</h3>
                                      <p>{item.createdAtFormatted}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="cmp-rev-inf-bot">
                    <div className="cmp-rev-pag-blo">
                      <nav
                        aria-label="Page navigation example"
                        className="cmp-exp-pge-lnk"
                      >
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="cmp-page-link active"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="cmp-page-link active"
                              href="#"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">»</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "press" && (
          <div className="b-bot">
            <div className="bot-i-top">
              <div className="container">
                <div className="cmp-cen-pad-top">
                  <div className="cmp-lis-hdr-top">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-8">
                        <div className="cmp-num-lis-hdr">
                          <h3>Press</h3>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8 col-lg-4">
                        <div className="cmp-key-flx-rit">
                          <div className="ctl-frm-key-box">
                            <label htmlFor="keyword" />
                            <input
                              type="search"
                              id="keyword"
                              className="ctl-key-inp-box"
                              placeholder="Search by keywords"
                            />
                          </div>
                          <div className="ctl-key-btn-box">
                            <button type="submit">
                              <svg
                                width={21}
                                height={21}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.75 15.75C4.88401 15.75 1.75 12.616 1.75 8.75C1.75 4.88401 4.88401 1.75 8.75 1.75C12.616 1.75 15.75 4.88401 15.75 8.75C15.75 10.3676 15.2013 11.8571 14.2799 13.0424L18.9937 17.7563L17.7563 18.9937L13.0424 14.2799C11.8571 15.2013 10.3676 15.75 8.75 15.75ZM14 8.75C14 11.6495 11.6495 14 8.75 14C5.8505 14 3.5 11.6495 3.5 8.75C3.5 5.8505 5.8505 3.5 8.75 3.5C11.6495 3.5 14 5.8505 14 8.75Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cmp-lis-hdr-cen">
                    <div className="cmp-prs-inf-top">
                      <div className="row">
                        {press.map((item) => (
                          <div className="col-sm-12 col-md-12 col-lg-4 mb-5">
                            <div className="cmp-pes-con-blo">
                              <div className="ctl-pre-pic-top">
                                <div className="ctl-prs-ico-con">
                                  <img src={item.imagePath} alt="" />
                                </div>
                              </div>
                              <div className="ctl-pea-txt-cen">
                                <div className="ctl-pre-txt-cen">
                                  <div className="ctl-prs-hdr-top">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="ctl-prs-txt-bot">
                                    <p>{item.description}</p>
                                  </div>
                                  <div className="clearfix" />
                                </div>
                                <div className="ctl-pre-pho-bot">
                                  <div className="row">
                                    <div className="col-sm-12 col-md-4 col-lg-2 ">
                                      <div className="ctl-pre-pic-con">
                                        <img
                                          src="assets/images/press-icons.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-8 col-lg-10">
                                      <div className="ctl-pre-nme-tim">
                                        <h3>{item.customerName}</h3>
                                      </div>
                                    </div>
                                    <div className="clearfix" />
                                  </div>
                                </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="cmp-rev-inf-bot">
                    <div className="cmp-rev-pag-blo">
                      <nav
                        aria-label="Page navigation example"
                        className="cmp-exp-pge-lnk"
                      >
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="cmp-page-link active"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">«</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="cmp-page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="cmp-page-link active"
                              href="#"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">»</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </ClientLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const listings = [
    {
      heading: "THE VANDERBIL ,235 East 40th Street 0b Scope REality",
      location: "Murray Hill New",
      price: "104544",
      layout: {},
    },
    {
      heading: "THE VANDERBIL ,235 East 40th Street 0b Scope REality",
      location: "Murray Hill New",
      price: "104544",
      layout: {},
    },
    {
      heading: "THE VANDERBIL ,235 East 40th Street 0b Scope REality",
      location: "Murray Hill New",
      price: "104544",
      layout: {},
    },
  ];

  const transactions = [
    {
      heading: "THE VANDERBIL ,235 East 40th Street 0b Scope REality",
      location: "Murray Hill New",
      price: "104544",
      layout: {},
    },
    {
      heading: "THE VANDERBIL ,235 East 40th Street 0b Scope REality",
      location: "Murray Hill New",
      price: "104544",
      layout: {},
    },
  ];

  const testimonials = [
    {
      agentName: "Andrew Gryniewicz",
      description:
        "I felt like Andrew approached this entire process with care and professionalism. Everyone say's there's no smooth moves in NYC but frankly, this has been one of the easiest transitions in any city I've lived in and it's very much because of.",
      customerName: "Sean Murray",
      createdAtFormatted: "2 Years ago",
    },
    {
      agentName: "Andrew Gryniewicz",
      description:
        "I felt like Andrew approached this entire process with care and professionalism. Everyone say's there's no smooth moves in NYC but frankly, this has been one of the easiest transitions in any city I've lived in and it's very much because of.",
      customerName: "Sean Murray",
      createdAtFormatted: "2 Years ago",
    },
  ];

  const press = [
    {
      title: "I felt like Andrew approached this entire",
      description:
        "I felt like Andrew approached this entire process with care and professionalism. Everyone say's there's no smooth moves in ",
      customerName: "Andrew approached",
      imagePath: "/images/press-photo1.png",
    },
    {
      title: "I felt like Andrew approached this entire",
      description:
        "I felt like Andrew approached this entire process with care and professionalism. Everyone say's there's no smooth moves in ",
      customerName: "Andrew approached",
      imagePath: "/images/press-photo1.png",
    },
    {
      title: "I felt like Andrew approached this entire",
      description:
        "I felt like Andrew approached this entire process with care and professionalism. Everyone say's there's no smooth moves in ",
      customerName: "Andrew approached",
      imagePath: "/images/press-photo1.png",
    },
  ];

  return {
    props: {
      listings,
      transactions,
      testimonials,
      press,
    },
  };
};

export default Index;
