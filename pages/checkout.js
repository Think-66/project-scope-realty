export default function Checkout() {
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
        <link rel="stylesheet" href="assets/css/custom.css" />
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
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.package {\n    width: 100%;\n    background: url(assets/img/teacher/Group-252.png);\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    padding: 24px 60px;\n\t  margin-top: 8%;\n\t  padding-bottom: 7%;\n}\n",
          }}
        />
      </Head>
      <div>
        <header className="header-section">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light loginnav">
              <div className="col-md-2 col-lg-2">
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
                    <li className="nav-item">
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
              <div className="col-xs-2  desktop">
                <a href="#" className="signin_link">
                  SIGN IN
                </a>
              </div>
            </nav>
          </div>
        </header>
        {/* start checkout */}
        <section className="checkout">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="checkout-heading">
                  <h1>Check out</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <form className="email">
                  <label>Email address</label>
                  <br />
                  <input type="email" placeholder="Type your email address" />
                </form>
              </div>
              <div className="col-lg-5" />
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="pay-now">
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className=" active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        <img src="assets/img/visa.png" />
                      </a>
                      <a
                        className
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        <img src="assets/img/paypal.png" />
                      </a>
                      <a
                        className
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        <img src="assets/img/apay.png" />
                      </a>
                      <a
                        className
                        id="nav-about-tab"
                        data-toggle="tab"
                        href="#nav-about"
                        role="tab"
                        aria-controls="nav-about"
                        aria-selected="false"
                      >
                        <img src="assets/img/gpay.png" />
                      </a>
                    </div>
                  </nav>
                  <div
                    className="tab-content py-3 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form>
                        <h4>Payment Detail</h4>
                        <div className="p-0 box">
                          <div className="form-card">
                            <input
                              type="text"
                              name="holdername"
                              placeholder="Name"
                            />
                            <div className="row">
                              <div className="col-8 col-md-6">
                                <input
                                  type="text"
                                  name="cardno"
                                  id="cr_no"
                                  placeholder="0000-0000-0000-0000"
                                  minLength={19}
                                  maxLength={19}
                                />{" "}
                              </div>
                              <div className="col-4 col-md-6">
                                <input
                                  type="text"
                                  name="exp"
                                  id="exp"
                                  placeholder="MM/YY"
                                  minLength={5}
                                  maxLength={5}
                                />{" "}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <input
                                  type="password"
                                  name="cvcpwd"
                                  placeholder="CVV"
                                  className="placeicon"
                                  minLength={3}
                                  maxLength={3}
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  name="zip"
                                  placeholder="ZIP CODE"
                                  className="placeicon"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                {" "}
                                <input
                                  type="submit"
                                  defaultValue="Next"
                                  className="btn btn-info placeicon"
                                />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <p>Login to your paypal to continue the payment</p>
                      <form className="email">
                        <input type="email" placeholder="Email address" />
                        <input type="password" placeholder="Password" />
                        <input
                          type="submit"
                          defaultValue="LOGIN"
                          className="btn btn-info placeicon"
                        />
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <p>
                        Make sure you already have apple account to pay using
                        Apple Pay
                      </p>
                      <form className="email">
                        <input
                          type="submit"
                          defaultValue="USE APPLE PAY"
                          className="btn btn-info placeicon pay"
                        />
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      <p>Login to your paypal to continue the payment</p>
                      <form className="email">
                        <input type="email" placeholder="Email address" />
                        <input type="password" placeholder="Password" />
                        <input
                          type="submit"
                          defaultValue="LOGIN"
                          className="btn btn-info placeicon"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="checkout-body">
                  <div className="package">
                    <h5>
                      <span className="pre">Premium</span> package
                    </h5>
                    <div className="detail">
                      <p>Detail package</p>
                      <h5>
                        Comprehensive &amp; updated Q/A{" "}
                        <span>Exam Prep E-Book</span>
                      </h5>
                      <h5>
                        Refund Option<span>Interactive Vocabulary Sheet</span>
                      </h5>
                      <h5>
                        75 Preparation Videos<span>Live Online Webinars</span>
                      </h5>
                      <h5>
                        Audio Lessons
                        <span>Library Access to Pre-recorded Webinars </span>
                      </h5>
                      <h5>Interactive Flashcards</h5>
                    </div>
                    <div className="pay">
                      <p>
                        You have to pay<span>$99</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end checkout */}
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
