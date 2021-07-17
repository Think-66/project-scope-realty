import Link from "next/link";
import ClientLayout from "../components/client-layout";
import { useRouter } from "next/router";
import NavBarHeader from '../components/navBarHeader'

function Index({ featured }) {

  const router = useRouter();

  const onSearch = () => {
    router.push('listings')
  }

  return (
    <ClientLayout noHeader={true}>
      <section>
        <div className="b-cen a-bac">
          <div className="cen-i-top">
            <NavBarHeader />
          </div>
          <div className="cen-i-cen">
            <div className="container">
              <div className="cmp-lan-pad-box">
                <div className="cmp-lad-top-pad">
                  <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-11 m-auto">
                      <div className="cmp-lad-lis-hdr">
                        <div className="ctl-web-lan-top">
                          <h3 className="alex-custom">
                            Enjoy a Stress-Free and Smooth Property Buying
                            Experience with us.
                          </h3>
                          <p className="ctl-lan-cus-pad">
                            Let us help you find a place that you can call home
                            sweet home.
                          </p>
                        </div>
                        <div className="ctl-web-ser-bot">
                          <div className="cmp-lad-flx-box">
                            <div className="ctl-lad-key-box">
                              <label htmlFor="search" />
                              <input
                                type="search"
                                id="search"
                                className="ctl-lad-inp-box"
                                placeholder="Search by keywords"
                              />
                            </div>
                            <div className="ctl-lan-btn-box">
                              <button type="submit" onClick={() => onSearch()}> Search</button>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cmp-pad-bot-pad">
                  <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-2">
                      <div className="ctl-lan-cli-pic">
                        <img src="/images/netflix.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                      <div className="ctl-lan-cli-pic">
                        <img src="/images/hgtv.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                      <div className="ctl-lan-cli-pic">
                        <img src="/images/bravio.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                      <div className="ctl-lan-cli-pic">
                        <img src="/images/nbc.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                      <div className="ctl-lan-cli-pic">
                        <img src="/images/discovery.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                      <div className="ctl-lan-cli-pic">
                        <img src="/images/netflix.png" alt="" />
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
        <div className="b-bot">
          <div className="bot-i-top">
            <div className="container">
              <div className="cmp-lan-lis-fir">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="cmp-lan-lft-pho">
                      <img src="/images/land-photo1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 m-auto">
                    <div className="cmp-lad-all-pad">
                      <div className="cmp-lad-hdr-top">
                        <h3>Search Our Listings Now</h3>
                      </div>
                      <div className="cmp-lad-inf-bot">
                        <p>
                          Are you looking for a home in New York? Do you want to
                          rent or buy a property? Wondering how to start your
                          search for a place that feels like home and with your
                          budget? You have come to the right place. Scope Realty
                          is where we help people find their dream homes
                          according to their needs, budget, and preferences. We
                          take pride in being the preferred and top-ranked real
                          estate firm in New York among home buyers. If you are
                          searching for a place that you can call home, we can
                          help.
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmp-lan-lis-sec">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="cmp-fea-hdr-com">
                      <h3>Featured Listings</h3>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                      {featured.map((item) => (
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                          <div className="cmp-lan-pos-rel">
                            <div className="cmp-lan-pho-top">
                              <Link href={`/property/${item.id}`}>
                                <img src={item.image} alt="" />
                              </Link>
                            </div>
                            <div className="cmp-lan-ovr-bot">
                              <div className="ctl-lan-txt-top">
                                <p>NO FEE</p>
                              </div>
                              <div className="ctl-lan-txt-cen">
                                <h3>60 Water Street</h3>
                              </div>
                              <div className="ctl-lan-txt-bot">
                                <p>Studio 1 bath</p>
                                <p>Appartment</p>
                                <p>$3,595</p>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmp-lan-lis-thi">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
                    <div className="cmp-lad-sec-pad">
                      <div className="cmp-lad-hrd-top">
                        <h3>
                          House-Hunting is Our Specialty—It is What We Do the
                          Best
                        </h3>
                      </div>
                      <div className="cmp-lad-ino-bot">
                        <p>
                          At Scope Realty, we are true specialists in finding
                          homes. Unlike other realtors, we will never impose our
                          choice on you or convince you to buy the property or
                          rent one to earn a commission. That is not our style.
                          And besides, we find it unethical.
                        </p>
                        <p>
                          Over the years, we have built our market reputation
                          based on trust, reliance, service transparency, and
                          work ethics. Thus, you can rest assured that we’ll be
                          searching for a home for you just like family when you
                          come to us.
                        </p>
                        <p>
                          To assist you with your home search, we first empower
                          you with data, knowledge, and the latest market
                          listings. This ensures that you have all the
                          information that you need to make your search for your
                          new home successful. Moreover, providing you with
                          complete knowledge also ensures process transparency
                          to make an informed decision to rent or buy property
                          without any ambiguity or confusion.
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="cmp-hou-rit-pho">
                      <img src="/images/land-house.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bot-i-cen">
            <div className="cmp-lan-lis-fou">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 m-auto">
                  <div className="cmp-lad-sec-pad">
                    <div className="cmp-lad-hra-top">
                      <h3>Start Your Search Online</h3>
                    </div>
                    <div className="cmp-lad-ina-bot">
                      <p>
                        Serving home buyers for years, we understand the
                        changing consumer behavior and market trends. Today’s
                        property buyers start their search over the web. And
                        what better way to do so than by searching through our
                        authentic and up-to-date market listings.
                      </p>
                      <p>
                        Properties listed with Scope Realty can be viewed in our
                        featured listing option. We provide you with an
                        immersive experience as each property in our listings
                        has photos attached with them. This gives you a clear
                        idea of what the property looks like in reality and its
                        visual appearance. Also, we also provide proper
                        descriptions and other crucial and relevant details like
                        pricing, features, availability status, minimum and
                        maximum lease term, pet policy, floors, listing by and
                        ID, etc.
                      </p>
                      <p>
                        All this information helps you decide whether to proceed
                        with learning more about the property or move to another
                        one. In other words, it’s a stress-free way to shortlist
                        properties. Thus, we spare you from visiting several
                        homes in-person, which can be otherwise time-consuming
                        and frustrating for many buyers.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bot-i-bot">
            <div className="container">
              <div className="cmp-lan-lis-fiv">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 m-auto">
                    <div className="cmp-hou-rit-pho">
                      <img src="/images/land-connect.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="cmp-lad-sec-pad">
                      <div className="cmp-lad-hrd-top">
                        <h3>Connect With Our Seasoned Realtors</h3>
                      </div>
                      <div className="cmp-lad-ino-bot">
                        <p>
                          As you browse through our market listings to find a
                          home to rent or purchase, feel free to seek assistance
                          from our seasoned realtors. Being a top-rated real
                          estate firm in New York, our team of property experts
                          are here to assist you at every stage of the property
                          buying process.
                        </p>
                        <p>
                          We will help you navigate through the market, answer
                          all inquiries and queries to complete satisfaction,
                          and assist you with your search to find a home to your
                          liking and within your budget.
                        </p>
                        <p>
                          The perfect combination of our hands-on industry
                          experience, expertise, real estate market knowledge,
                          and negotiation skills enable us to help you find the
                          best place to live and close the deal successfully.
                          Our realtors work in your best interest as your
                          trusted partner.
                        </p>
                        <p>
                          Moreover, if you are seeking a home to rent, we will
                          negotiate the best rental terms for you so that it is
                          easier for you to pay rent and live peacefully without
                          any worries. Our growing team of competent and skilled
                          real estate salespeople is focused on helping property
                          buyers, and tenants find homes easily and swiftly with
                          zero stress or frustration.
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmp-lan-lis-six">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
                    <div className="cmp-lad-sec-pad">
                      <div className="cmp-lad-hrd-top">
                        <h3>Contact us Today</h3>
                      </div>
                      <div className="cmp-lad-ino-bot">
                        <p>
                          Our success can be gauged by our growing number of
                          clients, including satisfied customers and referrals.
                          Plus, we have earned accolades and recognition for our
                          work and efforts. For example, we have earned a spot
                          in the Top 100 NYC Businesses for 2018.
                        </p>
                        <p>
                          Moreover, once you partner with us and we close your
                          transaction, we will make a donation from that
                          transaction to your choice of one of the charities we
                          support—ASPCA, St. Jude Children’s Hospital, and
                          Covenant House New York.
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="cmp-hou-rit-pho">
                      <img src="/images/land-contact.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bot-i-rit">
            <div className="container">
              <div className="cmp-give-cha-box">
                <div className="row">
                  <div className="col-sm-12 col-md-7 col-lg-7 m-auto">
                    <div className="ctl-giv-cha-blo">
                      <div className="ctl-giv-hdr-top">
                        <h3>Give us a chance to serve you too.</h3>
                        <p>
                          You will be just as happy with our services as our
                          other clients.
                        </p>
                      </div>
                      <div className="ctl-giv-brn-bot">
                        <a href="#!">Contact us today</a>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </section>
    </ClientLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const featured = [
    {
      id: 1,
      fee: "NO FEE",
      title: "60 Water Street",
      description: "Studio 1 bath",
      type: "Appartment",
      price: "$ 3,595",
      image: "/images/landing-listing1.png",
    },
    {
      id: 2,
      fee: "NO FEE",
      title: "60 Water Street",
      description: "Studio 1 bath",
      type: "Appartment",
      price: "$ 3,595",
      image: "/images/landing-listing2.png",
    },
    {
      id: 3,
      fee: "NO FEE",
      title: "60 Water Street",
      description: "Studio 1 bath",
      type: "Appartment",
      price: "$ 3,595",
      image: "/images/landing-listing3.png",
    },
  ];

  return { props: { featured } };
};

export default Index;
