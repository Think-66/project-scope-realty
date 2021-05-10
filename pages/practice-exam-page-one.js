import React from 'react';
import Head from "next/head";

export default function PracticeExamPageOne() {
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
        <link rel="stylesheet" href="../public/css/bootstrap.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../public/css/main.css" />
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
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-6 text-left">
                <a href="#">
                  <img
                    src="assets/img/logo.svg"
                    className="img-logo img-fluid"
                  />
                </a>
              </div>
              <div className="col-6 text-right">
                <div className="dropdown">
                  <a
                    className="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <span className="mr-2 text-gray-600">John Doe</span>
                    <img
                      className="img-profile rounded-circle"
                      src="assets/img/Frame1.png"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <img src="assets/img/switch.svg" /> Switch States
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/img/refer_earn.svg" /> Refer And Earn
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/img/profile.svg" /> Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/img/billing.svg" /> Billing
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/img/setting.svg" /> Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <img src="assets/img/logout.svg" /> Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="practiceexam_tablewrap">
          <div className="container">
            <h2>
              My Practice <span>Exams</span>
            </h2>
            <div className="dividerline" />
            <div className="courselist_wrapper">
              <ul className="courselists">
                <li className="course_title pr-90">Financing</li>
                <li className="accessshr pr-90">Accessed 20 hours ago</li>
                <li className="scorecard pr-90">Score: 0 / 0 (% correct)</li>
                <li>
                  <button className="resume_btn">RESUME</button>{" "}
                  <button className="delete_btn">DELETE</button>
                </li>
              </ul>
              <ul className="courselists">
                <li className="course_title pr-90">Financing</li>
                <li className="accessshr pr-90">Accessed 20 hours ago</li>
                <li className="scorecard pr-90">Score: 0 / 0 (% correct)</li>
                <li>
                  <button className="resume_btn">RESUME</button>{" "}
                  <button className="delete_btn">DELETE</button>
                </li>
              </ul>
              <ul className="courselists">
                <li className="course_title pr-90">Financing</li>
                <li className="accessshr pr-90">Accessed 20 hours ago</li>
                <li className="scorecard pr-90">Score: 0 / 0 (% correct)</li>
                <li>
                  <button className="resume_btn">RESUME</button>{" "}
                  <button className="delete_btn">DELETE</button>
                </li>
              </ul>
              <ul className="courselists">
                <li className="course_title pr-90">Financing</li>
                <li className="accessshr pr-90">Accessed 20 hours ago</li>
                <li className="scorecard pr-90">Score: 0 / 0 (% correct)</li>
                <li>
                  <button className="resume_btn">RESUME</button>{" "}
                  <button className="delete_btn">DELETE</button>
                </li>
              </ul>
              <ul className="courselists">
                <li className="course_title pr-90">Financing</li>
                <li className="accessshr pr-90">Accessed 20 hours ago</li>
                <li className="scorecard pr-90">Score: 0 / 0 (% correct)</li>
                <li>
                  <button className="resume_btn">RESUME</button>{" "}
                  <button className="delete_btn">DELETE</button>
                </li>
              </ul>
              <ul className="courselists">
                <li className="course_title pr-90">Financing</li>
                <li className="accessshr pr-90">Accessed 20 hours ago</li>
                <li className="scorecard pr-90">Score: 0 / 0 (% correct)</li>
                <li>
                  <button className="resume_btn">RESUME</button>{" "}
                  <button className="delete_btn">DELETE</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bluetable_wrapper">
          <div className="container">
            <h4>Start New Salesperson Practice Exam</h4>
            <p>
              Click on a category to begin a new practice exam. Each time you
              start a new exam, the questions are randomized. We recommend
              starting with vocabulary before moving on to the other topics.
            </p>
            <ul className="bluebox_list">
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
              <li>Bundle of Rights</li>
            </ul>
          </div>
        </section>
        <div className="container">
          <section className="joinbox_wrapper">
            <p>
              Join our <strong> Question of the Day </strong> mailing list to
              revieve a new question hand-picked daily by joe to help you
              prepare for your exam.
              <a href className="joinnow_link">
                Join Now
              </a>
            </p>
          </section>
        </div>
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
        <div id="preloader" />
        {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
      </div>
    </div>
  );
}
