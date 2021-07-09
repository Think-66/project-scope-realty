import ClientLayout from "../../../components/client-layout";
import AgentDetails from "../../../components/agent/agent-details";
import AgentMenu from "../../../components/agent/agent-menu";

function Listing({ data }) {
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
                        <h3>Paul's Listing</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cmp-lis-hdr-cen">
                  <ul className="cmp-mar-cus-bot">
                    {data.map((property, key) => {
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
                                          <option value>Date Available</option>
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
    {
      heading: "THE VANDERBIL ,235 East 40th Street 0b Scope REality",
      location: "Murray Hill New",
      price: "104544",
      layout: {},
    },
  ];

  return { props: { data } };
};

export default Listing;
