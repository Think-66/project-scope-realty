import Head from "next/head";

export default function Pricing() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Broker Success</title>
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <meta name="description" content />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* Font-Awesome Fonts */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        {/* Vendor CSS Files */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
        />
      </Head>
      <div>
        <header className="header-section">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light loginnav">
              <div className="col-md-2">
                <button
                  className="navbar-toggler col-xs-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand col-xs-4" href="#">
                  <img src="assets/img/Group.png" />{" "}
                </a>
                <a href="#" className="col-xs-4 signin_link signin_linkmobile">
                  SIGN IN
                </a>
              </div>
              <div className="col-lg-8 col-md-8">
                <div
                  className="collapse navbar-collapse login_navbar "
                  id="navbarTogglerDemo03"
                >
                  <ul className="navbar-nav  mr-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Our Guarantee
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Articles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Free Practice Exam
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-2 desktop">
                <a href="#" className="signin_link">
                  SIGN IN
                </a>
              </div>
            </nav>
          </div>
        </header>
        <section className="licensestate_wrap">
          <div className="container">
            <h2 className="licensestate_title">
              What Is Your Licensing State?
            </h2>
            <div className="staterow_wrap">
              <div className="row">
                <div className="licensestate_listwrap">
                  <ul className="licensestate_list listone">
                    <li>
                      <a href="#">AL</a>
                    </li>
                    <li>
                      <a href="#">AK</a>
                    </li>
                    <li>
                      <a href="#">AZ</a>
                    </li>
                    <li>
                      <a href="#">AR</a>
                    </li>
                    <li>
                      <a href="#">CA</a>
                    </li>
                    <li>
                      <a href="#">CO</a>
                    </li>
                    <li>
                      <a href="#">CT</a>
                    </li>
                    <li>
                      <a href="#">DE</a>
                    </li>
                    <li>
                      <a href="#">FL</a>
                    </li>
                    <li>
                      <a href="#">GA</a>
                    </li>
                    <li>
                      <a href="#">HI</a>
                    </li>
                    <li>
                      <a href="#">ID</a>
                    </li>
                    <li>
                      <a href="#">IL</a>
                    </li>
                    <li>
                      <a href="#">IN</a>
                    </li>
                    <li>
                      <a href="#">KS</a>
                    </li>
                    <li>
                      <a href="#">KY</a>
                    </li>
                    <li>
                      <a href="#">LA</a>
                    </li>
                    <li>
                      <a href="#">ME</a>
                    </li>
                  </ul>
                  <ul className="licensestate_list listtwo">
                    <li>
                      <a href="#">MD</a>
                    </li>
                    <li>
                      <a href="#">MA</a>
                    </li>
                    <li>
                      <a href="#">MI</a>
                    </li>
                    <li>
                      <a href="#">MN</a>
                    </li>
                    <li>
                      <a href="#">MS</a>
                    </li>
                    <li>
                      <a href="#">MO</a>
                    </li>
                    <li>
                      <a href="#">MT</a>
                    </li>
                    <li>
                      <a href="#">NE</a>
                    </li>
                    <li>
                      <a href="#">NV</a>
                    </li>
                    <li>
                      <a href="#">NH</a>
                    </li>
                    <li>
                      <a href="#">NJ</a>
                    </li>
                    <li>
                      <a href="#">NM</a>
                    </li>
                    <li>
                      <a href="#">NY</a>
                    </li>
                    <li>
                      <a href="#">NC</a>
                    </li>
                    <li>
                      <a href="#">ND</a>
                    </li>
                    <li>
                      <a href="#">OH</a>
                    </li>
                    <li>
                      <a href="#">OK</a>
                    </li>
                    <li>
                      <a href="#">OR</a>
                    </li>
                    <li>
                      <a href="#">PA</a>
                    </li>
                  </ul>
                  <ul className="licensestate_list listthree">
                    <li>
                      <a href="#">RI</a>
                    </li>
                    <li>
                      <a href="#">SC</a>
                    </li>
                    <li>
                      <a href="#">SD</a>
                    </li>
                    <li>
                      <a href="#">TN</a>
                    </li>
                    <li>
                      <a href="#">TX</a>
                    </li>
                    <li>
                      <a href="#">UT</a>
                    </li>
                    <li>
                      <a href="#">VT</a>
                    </li>
                    <li>
                      <a href="#">VA</a>
                    </li>
                    <li>
                      <a href="#">WA</a>
                    </li>
                    <li>
                      <a href="#">DC</a>
                    </li>
                    <li>
                      <a href="#">WV</a>
                    </li>
                    <li>
                      <a href="#">WI</a>
                    </li>
                    <li>
                      <a href="#">WY</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricingtext_wrap blogtitle_wrap">
          <div className="container">
            <h2>Broker Success Pricing</h2>
            <div className="dividertitle" />
            <p className="Pricing_description blogddescription">
              Our goal is to give you the best possible preparation for a real
              estate license based on your needs. We have designed 3 different
              packages to cater to different budgets based on the combination of
              services people are most interested in. Our three packages for
              Salesperson License and Broker’s License are as follows:
            </p>
          </div>
        </section>
        <section className="pricingtable_wrap">
          <div className="container">
            {/* DIRTY Responsive pricing table HTML */}
            <article className="pricingtablearticle_wrap">
              <div className="pricingcontent_wrap">
                <div className=" col-xs-12 col-lg-3 featureslist">
                  <ul className="pricingcontent_list pricelist_one">
                    <li className="listhead" />
                    <li>Comprehensive &amp; updated Q/A</li>
                    <li>Refund Option</li>
                    <li>75 Preparation Videos</li>
                    <li>Audio Lessons</li>
                    <li>Interactive Flashcards</li>
                    <li>Interactive Vocabulary Sheet</li>
                    <li>Exam Prep E-Book</li>
                    <li>Live Online Webinars</li>
                    <li>Library Access to Pre-recorded Webinars </li>
                  </ul>
                </div>
                {/* pricelist two starts */}
                <div className="pricedefaulthead-tab">
                  <div className="pricedefaulthead">
                    <div className="col-md-1">
                      <span className="txt-top">$99</span>
                      <br />
                      <span className="txt-l">Premium</span>
                    </div>
                    <div 
                      <p className="defaultpricedesc">
                        For just $20 more, the Deluxe package will provide will
                        all the preparatory material for the exam. You can check
                        out the audio and video lessons to improve knowledge and
                        use flashcards and exam prep e-book to test yourself.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-3  col-md-12 pricing-item red">
                  <div className="pricelist_tab">
                    <ul className="pricingcontent_list ">
                      <li className="listhead" />
                      <li>Comprehensive &amp; updated Q/A</li>
                      <li>Refund Option</li>
                      <li>75 Preparation Videos</li>
                      <li>Audio Lessons</li>
                      <li>Interactive Flashcards</li>
                      <li>Interactive Vocabulary Sheet</li>
                      <li>Exam Prep E-Book</li>
                      <li>Live Online Webinars</li>
                      <li>Library Access to Pre-recorded Webinars </li>
                    </ul>
                  </div>
                  <div className="pricelisttwo_tab">
                    <ul className="pricingcontent_list pricelist_two">
                      <li className="listhead">
                        <div className="listheadprice">
                          {" "}
                          <span className="txt-top">$99</span>
                          <br />
                          <span className="txt-l">Premium</span>
                        </div>
                        <div className="pricehoverwrap-head">
                          <div className="col-lg-3">
                            {" "}
                            <span className="txt-top">$99</span>
                            <br />
                            <span className="txt-l">Premium</span>
                          </div>
                          <div className="col-lg-9">
                            <p className="hoverpricedesc">
                              The premium package will help you prepare for and
                              pass the exam and allow you to capitalize on
                              expert knowledge and advice to further your
                              career. This package is specially designed for
                              people who want to hit the ground running by
                              having an edge over competitors.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="tickicon"> </li>
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="signup_wrap">
                        <button className="sugnup_btn">SIGN UP</button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* pricelist two ends */}
                <div className="col-md-12 pricedefaulthead-tab">
                  <div className="pricedefaulthead">
                    <div className="col-md-1">
                      <span className="txt-top">$79</span>
                      <br />
                      <span className="txt-l">Premium</span>
                    </div>
                    <div 
                      <p className="defaultpricedesc">
                        For just $20 more, the Deluxe package will provide will
                        all the preparatory material for the exam. You can check
                        out the audio and video lessons to improve knowledge and
                        use flashcards and exam prep e-book to test yourself.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  col-xs-12  col-md-12 pricing-item red">
                  <div className="pricelist_tab">
                    <ul className="pricingcontent_list ">
                      <li className="listhead" />
                      <li>Comprehensive &amp; updated Q/A</li>
                      <li>Refund Option</li>
                      <li>75 Preparation Videos</li>
                      <li>Audio Lessons</li>
                      <li>Interactive Flashcards</li>
                      <li>Interactive Vocabulary Sheet</li>
                      <li>Exam Prep E-Book</li>
                      <li>Live Online Webinars</li>
                      <li>Library Access to Pre-recorded Webinars </li>
                    </ul>
                  </div>
                  <div className="pricelisttwo_tab">
                    <ul className="pricingcontent_list pricelist_three">
                      <li className="listhead">
                        <div className="listheadprice">
                          {" "}
                          <span className="txt-top">$79</span>
                          <br />
                          <span className="txt-l">Deluxe</span>
                        </div>
                        <div className="pricehoverwrap-head">
                          <div className="col-lg-3">
                            {" "}
                            <span className="txt-top">$79</span>
                            <br />
                            <span className="txt-l">Deluxe</span>
                          </div>
                          <div className="col-lg-9">
                            <p className="hoverpricedesc">
                              For just $20 more, the Deluxe package will provide
                              will all the preparatory material for the exam.
                              You can check out the audio and video lessons to
                              improve knowledge and use flashcards and exam prep
                              e-book to test yourself.{" "}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="signup_wrap">
                        <button className="sugnup_btn">SIGN UP</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 pricedefaulthead-tab">
                  <div className="pricedefaulthead">
                    <div className="col-md-1">
                      <span className="txt-top">$59</span>
                      <br />
                      <span className="txt-l">Premium</span>
                    </div>
                    <div 
                      <p className="defaultpricedesc">
                        Our Basic Package is for people who want to opt for
                        simple guidance but do their own research and
                        preparation for the exam. We will provide you with a
                        detailed list of questions and answers about the
                        industry updated to include the latest state
                        regulations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-3 col-md-12 pricing-item red">
                  <div className="pricelist_tab">
                    <ul className="pricingcontent_list ">
                      <li className="listhead" />
                      <li>Comprehensive &amp; updated Q/A</li>
                      <li>Refund Option</li>
                      <li>75 Preparation Videos</li>
                      <li>Audio Lessons</li>
                      <li>Interactive Flashcards</li>
                      <li>Interactive Vocabulary Sheet</li>
                      <li>Exam Prep E-Book</li>
                      <li>Live Online Webinars</li>
                      <li>Library Access to Pre-recorded Webinars </li>
                    </ul>
                  </div>
                  <div className="pricelisttwo_tab">
                    <ul className="pricingcontent_list pricelist_four">
                      <li className="listhead">
                        <div className="listheadprice">
                          {" "}
                          <span className="txt-top">$59</span>
                          <br />
                          <span className="txt-l">Basic</span>
                        </div>
                        <div className="pricehoverwrap-head">
                          <div className="col-lg-3">
                            {" "}
                            <span className="txt-top">$59</span>
                            <br />
                            <span className="txt-l">Basic</span>
                          </div>
                          <div className="col-lg-9">
                            <p className="hoverpricedesc">
                              Our Basic Package is for people who want to opt
                              for simple guidance but do their own research and
                              preparation for the exam. We will provide you with
                              a detailed list of questions and answers about the
                              industry updated to include the latest state
                              regulations.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="tickicon" />
                      <li className="tickicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="crossicon" />
                      <li className="signup_wrap">
                        <button className="sugnup_btn">SIGN UP</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <section className="pricingtext_wrap">
            <div className="container">
              <h2>Why Choose Us</h2>
              <div className="dividertitle" />
              <p className="Pricing_description">
                Broker Success’s goal is to use our expertise to make the
                license application process easier and more accessible. Our
                packages are designed with two key factors in mind:
              </p>
              <p></p>
              <ul className="chose_list">
                <li> 1. Affordability </li>
                <li>2. Excellence</li>
              </ul>
              <p className="Pricing_description">
                All our packages are set at an affordable rate to make the
                license application process budget-friendly. However, we ensure
                that we achieve this without compromising on quality. All our
                packages will give you comprehensive lessons and exam
                preparation material. They will not only help you ace the exam
                but also add value in terms of career development.
              </p>
            </div>
          </section>
        </section>
        <div className="clearfix" />
        <section className="contactsec_wrap">
          <div className="container clearfix">
            <div className="row">
              <div className="contactdesc">
                <div className="col-lg-8 ">
                  <h2>Contact Us</h2>
                  <p>
                    Do you have more questions for us? We’re here to help.
                    Please get in touch with us if you need clarity regarding
                    our packages or any other details.{" "}
                  </p>
                </div>
                <div className="col-lg-4 contct-btnwrap">
                  <button type="button" className="btn btn-primary contct-btn">
                    CONTACT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className=" text-lg-start footer_wrap">
          {/* Grid container */}
          <div className="container p-4 ">
            {/*Grid row*/}
            <div className="row footlinkswrap">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-2 mb-4 mb-md-0 my-logo">
                <img className src="assets/img/Group.png" alt="logo" />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5 Help &amp; Support</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-dark">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Stay Safe
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                <h5 Social</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-dark">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-2 col-md-2 mb-4 mb-md-0">
                <h5 About us</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-dark">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-2 col-md-3 mb-4 mb-md-0">
                <h5 Follow Us</h5>
                <ul className="listinline">
                  <li>
                    <a href="#!" className="text-dark">
                      <img src="assets/img/facebook.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      <img src="assets/img/twitter.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">
                      <img src="assets/img/instagram.png" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3 copyright"
            style={{ background: "#0C0C0C" }}
          >
            Copyright @ 2019
          </div>
          {/* Copyright */}
        </footer>
        {/* ======= Back to top Section ======= */}
        <div id="preloader" />
        {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
      </div>
    </div>
  );
}
