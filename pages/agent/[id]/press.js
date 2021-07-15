import ClientLayout from "../../../components/client-layout";
import AgentDetails from "../../../components/agent/agent-details";
import AgentMenu from "../../../components/agent/agent-menu";
import { NavItem } from "react-bootstrap";

function Press({ data }) {
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
                      {data.map((item) => (
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
      </section>
    </ClientLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const data = [
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

  return { props: { data } };
};

export default Press;
