import Head from "next/head";

export default function Teacher() {
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
        {/* teacher-start */}
        <section className="teachers">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-6 practicecon_wrap">
                <h2>
                  <span>Our</span> Teachers.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="col-sm-6 col-lg-6 practiceimg_wrap">
                <img src="assets/img/teacher/Group-406.png" />
              </div>
            </div>
          </div>
        </section>
        {/* teacher-end */}
        {/* team-start */}
        <section className="team">
          <div className="container">
            <div className="row teams">
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/Ellipse-53.png" />
                  <h6>Paul Croves</h6>
                  <p>Property Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-2.png" />
                  <h6>Josephine</h6>
                  <p>Law Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-3.png" />
                  <h6>Judith</h6>
                  <p>Business Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-4.png" />
                  <h6>Maria</h6>
                  <p>Business Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 Jonathan">
                <div className="team-box">
                  <img src="assets/img/teacher/team-5.png" />
                  <h6>Jonathan</h6>
                  <p>Economy Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-6.png" />
                  <h6>Melissa</h6>
                  <p>English Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-7.png" />
                  <h6>Charles</h6>
                  <p>English Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-8.png" />
                  <h6>Meredith</h6>
                  <p>English Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="team-box">
                  <img src="assets/img/teacher/team-9.png" />
                  <h6>Louisa</h6>
                  <p>English Teacher</p>
                  <i className="fa fa-linkedin linkdin" aria-hidden="true" />
                  <i
                    className="fa fa-facebook-official facebook"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-end */}
        {/* practice-start */}
        <section className="practice">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="exam">
                  <h1>Start a Practice Exam</h1>
                  <p>
                    To get started, click on the category of your choice to
                    start the practice exam. Please note, every time you begin a
                    new exam, the questions will be changed for practice
                    purposes. We recommend you begin with vocabulary before you
                    move to other topics.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="exam exam-image">
                  <img src="assets/img/hero-img.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* practice-end */}
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
