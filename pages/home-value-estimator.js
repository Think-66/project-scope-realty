import ClientLayout from "../components/client-layout";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBarHeader from '../components/navBarHeader'

function HomeValueEstimator() {

    const router = useRouter();

    const onSelectProperty = () => {
        router.push('listing-interface')
    }

    return (
        <ClientLayout noHeader={true}>
            <section>
                <div className="b-cen e-bac">
                    <div className="cen-i-top">
                        <NavBarHeader />
                    </div>
                    <div className="cen-i-cen">
                        <div className="container">
                            <div className="cmp-lan-pad-box cmp-hom-val-pad">
                                <div className="cmp-lad-top-pad">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-8 col-lg-8 m-auto">
                                            <div className="cmp-lad-lis-hdr">
                                                <div className="ctl-web-lan-top">
                                                    <h3>How much is my <br />    ?</h3>
                                                </div>
                                                <div className="ctl-web-ser-bot">
                                                    <div className="cmp-lad-flx-box">
                                                        <div className="ctl-lad-key-box">
                                                            <label htmlFor="search"></label>
                                                            <input type="search" id="search" className="ctl-lad-inp-box" placeholder="Enter your home address" />
                                                        </div>
                                                        <div className="ctl-lan-btn-box">
                                                            <button type="submit"> Search <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.75 15.75C4.88401 15.75 1.75 12.616 1.75 8.75C1.75 4.88401 4.88401 1.75 8.75 1.75C12.616 1.75 15.75 4.88401 15.75 8.75C15.75 10.3676 15.2013 11.8571 14.2799 13.0424L18.9937 17.7563L17.7563 18.9937L13.0424 14.2799C11.8571 15.2013 10.3676 15.75 8.75 15.75ZM14 8.75C14 11.6495 11.6495 14 8.75 14C5.8505 14 3.5 11.6495 3.5 8.75C3.5 5.8505 5.8505 3.5 8.75 3.5C11.6495 3.5 14 5.8505 14 8.75Z" fill="black"></path>
                                                            </svg></button>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="b-bot">
                    <div className="bot-i-top">
                        <div className="container">
                            <div className="cmp-lan-lis-fir">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="cmp-lan-lft-pho">
                                            <img src="images/land-photo1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 m-auto">
                                        <div className="cmp-lad-all-pad">
                                            <div className="cmp-agt-hdr-top">
                                                <h3>Explore our listings.</h3>
                                            </div>
                                            <div className="cmp-lad-inf-bot">
                                                <p>Allow us to partner with you during your home search. As a top-ranking real estate firm in New York City, our talented property experts will help you navigate the market and find a place you can call home.</p>
                                            </div>
                                            <div className="ctl-agt-rev-box">
                                                <a href="#!">Search Our Listings</a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cmp-lan-lis-sec">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="cmp-agt-hdr-com">
                                            <h3>Featured Listings</h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 cursor-pointer" onClick={() => onSelectProperty()}>
                                                <div className="cmp-lan-pos-rel">
                                                    <div className="cmp-lan-pho-top">
                                                        <img src="images/landing-listing1.png" alt="" />
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
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 cursor-pointer" onClick={() => onSelectProperty()}>
                                                <div className="cmp-lan-pos-rel">
                                                    <div className="cmp-lan-pho-top">
                                                        <img src="images/landing-listing2.png" alt="" />
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
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 cursor-pointer" onClick={() => onSelectProperty()}>
                                                <div className="cmp-lan-pos-rel">
                                                    <div className="cmp-lan-pho-top">
                                                        <img src="images/landing-listing3.png" alt="" />
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
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 cursor-pointer" onClick={() => onSelectProperty()}>
                                                <div className="cmp-lan-pos-rel">
                                                    <div className="cmp-lan-pho-top">
                                                        <img src="images/landing-listing1.png" alt="" />
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
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 cursor-pointer" onClick={() => onSelectProperty()}>
                                                <div className="cmp-lan-pos-rel">
                                                    <div className="cmp-lan-pho-top">
                                                        <img src="images/landing-listing2.png" alt="" />
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
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 cursor-pointer" onClick={() => onSelectProperty()}>
                                                <div className="cmp-lan-pos-rel">
                                                    <div className="cmp-lan-pho-top">
                                                        <img src="images/landing-listing3.png" alt="" />
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
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cmp-lan-lis-thi cmp-est-wid">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12 mb-5">
                                        <div className="cmp-lad-sec-pad">
                                            <div className="cmp-agt-hrd-top">
                                                <h3>Proud to give back.</h3>
                                            </div>
                                            <div className="cmp-lad-ino-bot">
                                                <p>Scope Realty is proud to be a community philanthropist. We will make a donation from each transaction to your choice of one of these charities:
                                                </p>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                                <div className="ctl-lan-cli-pic">
                                                    <img src="images/aspca.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                                <div className="ctl-lan-cli-pic">
                                                    <img src="images/st.jude.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                                <div className="ctl-lan-cli-pic">
                                                    <img src="images/covenent.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </section>
        </ClientLayout>
    );
}

export default HomeValueEstimator;
