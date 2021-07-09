import ClientLayout from "../../../components/client-layout";
import AgentDetails from "../../../components/agent/agent-details";
import AgentMenu from "../../../components/agent/agent-menu";

function Testimonials({ data }) {
  return (
    <ClientLayout darkNav={true}>
      <section>
        <div className="b-cen">
          <div className="cen-i-cen">
            <div className="cmp-bck-gry-blo">
              <div className="ctl-all-pad-blo">
                <div className="container">
                  <AgentDetails />
                  <AgentMenu />
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
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
                    {data.map((item) => {
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
      </section>
    </ClientLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const data = [
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

  return { props: { data } };
};

export default Testimonials;
