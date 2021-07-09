import ClientLayout from "../../../components/client-layout";
import AgentDetails from "../../../components/agent/agent-details";
import AgentMenu from "../../../components/agent/agent-menu";

function Transactions({ data }) {
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
                    {data.map((item, key) => {
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
      </section>
    </ClientLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const data = [
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

  return { props: { data } };
};

export default Transactions;
