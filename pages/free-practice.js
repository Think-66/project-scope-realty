export default function FreePractice() {
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
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
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
        {/* practice-start */}
        <section className="free-practice">
          <div className="container">
            <h1 className="test-heading">
              Free Practice <span>Test</span>
            </h1>
            <div className="row">
              <div className="col-lg-7">
                <div className="test">
                  <div className="questionstab_content">
                    <h1 className="questions">Questions Topics</h1>
                    <div className="col-lg-12 tab_wrapper">
                      {/* Tab navigation */}
                      <div 
                        {" "}
                        <button className="prevtab btn ">
                          <img src="assets/img/prev.png" alt="previous" />
                        </button>
                      </div>
                      <div 
                        <ul
                          className="nav nav-tabs questionstab_nav"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="newyork-tab"
                              data-toggle="tab"
                              href="#newyork-tab"
                              role="tab"
                              aria-controls="newyork-tab"
                              aria-selected="true"
                            >
                              1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="mortage-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              2
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="another-tab"
                              data-toggle="tab"
                              href="#another-tab"
                              role="tab"
                              aria-controls="another-tab"
                              aria-selected="false"
                            >
                              3
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="another-tab"
                              data-toggle="tab"
                              href="#another-tab-2"
                              role="tab"
                              aria-controls="another-tab"
                              aria-selected="false"
                            >
                              4
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div 
                        <button className="nexttab btn">
                          <img src="assets/img/next.png" alt="next" />
                        </button>
                      </div>
                    </div>
                    {/* Tab content */}
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="newyork-tab"
                        role="tabpanel"
                        aria-labelledby="newyork-tab"
                      >
                        <form>
                          <div className="questioncontent_wrap">
                            <h4 className="topic">Questions Topics</h4>
                            <p>
                              An individual who ciolates the license law and is
                              convicted of a misdemeanor in New York may be
                              subject to which oh the following punishments?
                            </p>
                          </div>
                          <div className="answer_wrap">
                            <h4>Answer</h4>
                            <input
                              type="radio"
                              id="newyorkone"
                              name="newyorkanswer"
                              defaultValue="Up to a year in jail"
                            />
                            <label htmlFor="newyorkone">
                              Up to a year in jail
                            </label>
                            <br />
                            <input
                              type="radio"
                              id="newyorktwo"
                              name="newyorkanswer"
                              defaultValue="Up to a year in jail plus a fine of up to $1,000
							"
                            />
                            <label htmlFor="newyorktwo">
                              Up to a year in jail plus a fine of up to $1,000
                            </label>
                            <br />
                            <input
                              type="radio"
                              id="newyorkthree"
                              name="newyorkanswer"
                              defaultValue="A fine of up to $500"
                            />
                            <label htmlFor="newyorkthree">
                              A fine of up to $500
                            </label>
                            <br />
                            <input
                              type="radio"
                              id="newyorkfour"
                              name="newyorkanswer"
                              defaultValue="Up to ayear in jail and a fine of up to $500"
                            />
                            <label htmlFor="newyorkfour">
                              Up to ayear in jail and a fine of up to $500
                            </label>
                          </div>
                        </form>
                        <div className="col-lg-12 checkanswer_wrap">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <button className="nexttab btn">
                              CHECK ANSWER
                            </button>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 feedback_wrap">
                            <a href className="provide">
                              PROVIDE FEEDBACK
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="mortage-tab"
                        role="tabpanel"
                        aria-labelledby="mortage-tab"
                      >
                        <h1>Tab Mortgage Content</h1>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="another-tab"
                        role="tabpanel"
                        aria-labelledby="another-tab"
                      >
                        <h1>Tab Another content</h1>
                      </div>
                    </div>
                    {/* Tab carousel */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ready">
                  <h1>
                    Ready to <span>finally pass?</span>
                  </h1>
                  <div className="ready-body">
                    <h5>Detail package</h5>
                    <p>Practice Questions</p>
                    <p>Concept Videos</p>
                    <p>Audio Lessons</p>
                    <p>Interactive Flashcards</p>
                    <p>Live Online Webinars</p>
                    <p>120-day Money Back Guarantee</p>
                  </div>
                  <a href="#" className="join">
                    JOIN NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* practice-end */}
        {/* carousel-section-start */}
        <section
          className="carousel-section testimonial-slider-section"
          data-aos="fade-up"
        >
          <div className="carousel-container">
            <h2 className="common-head dark-blue">
              How others <span>love us</span>
            </h2>
            <div className="owl-carousel-testimonial owl-carousel owl-theme">
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-common btn-blue float-right"
            >
              View More
            </a>
          </div>
        </section>
        {/* carousel-section-end */}
        <footer className="footer-section">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 footer-inner">
                  {/*Column1*/}
                  <div className="footer-logo">
                    <a className="navbar-brand" href="index.html">
                      <img
                        src="assets/img/logo.svg"
                        className="img-logo img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6 footer-inner">
                  {/*Column1*/}
                  <div className="footer-pad">
                    <h4>Help &amp; Support</h4>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Stay Safe</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6 pl-lg-5 footer-inner">
                  {/*Column1*/}
                  <div className="footer-pad">
                    <h4>Social</h4>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Youtube</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 footer-inner">
                  {/*Column1*/}
                  <div className="footer-pad">
                    <h4>About us</h4>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 footer-inner">
                  <h4>Follow Us</h4>
                  <ul className="social-network social-circle list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="icoFacebook" title="Facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="icoTwitter" title="Linkedin">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="icoInstagram" title="Instagram">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-center">Copyright @ 2019</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ======= Back to top Section ======= */}
        <a href="#" className="back-to-top">
          <i className="fa fa-caret-up" />
        </a>
        <div id="preloader" />
        {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
      </div>
    </div>
  );
}
