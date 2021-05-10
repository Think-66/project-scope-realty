import Head from "next/head";

export default function IndividualStateRequirement() {
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
        {/* header start */}
        {/* requirement start */}
        <section className="requirement">
          <div className="req-text">
            <h1>
              State license <span>Requirements</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="req-image pay-images">
            <img src="assets/img/license.png" />
          </div>
        </section>
        {/* requirement end */}
        {/* state-form start */}
        <section className="state-form">
          <div className="container">
            <div className="main-form">
              <div className="stat-box">
                <form>
                  <select>
                    <option selected disabled>
                      Select your state
                    </option>
                    <option>Punjab</option>
                    <option>Bihar</option>
                    <option>UP</option>
                  </select>
                </form>
              </div>
              <div className="stat-box">
                <form>
                  <select>
                    <option selected disabled>
                      Select your profession
                    </option>
                    <option>Developer</option>
                    <option>Developer</option>
                    <option>Designer</option>
                  </select>
                </form>
              </div>
              <div className="stat-box">
                <form>
                  <select>
                    <option selected disabled>
                      Select your education
                    </option>
                    <option>BA</option>
                    <option>MCA</option>
                    <option>BCA</option>
                  </select>
                </form>
              </div>
              <div className="go-btn">
                <a href="#">GO</a>
              </div>
            </div>
          </div>
        </section>
        {/* state-form end */}
        {/* bookstore start */}
        <section className="bookstore tops">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pay-now m-0 tops">
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill state-pay"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className="state-pay active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Real estate license requirement
                      </a>
                      <a
                        className="state-pay"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Appraisal license requirement
                      </a>
                      <a
                        className="state-pay"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Home inspections requirement
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
                      <div className="row">
                        <div className="col-md-12 state-heading">
                          <h1>California Real Estate License Requirements</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="books-content">
                            <h3>
                              California real estate salesperson license:
                              Successful completion of three college-level
                              courses, including:{" "}
                            </h3>
                            <ul>
                              <li>
                                Real Estate Principles and Real Estate Practice,
                                as well as one of the following courses -- Real
                                Estate Appraisal, Property Management, Real
                                Estate Finance, Real Estate Economics, Legal
                                Aspects of Real Estate, Real Estate Office
                                Administration, General Accounting, Business
                                Law, Escrows, Mortgage Loan Brokering and
                                Lending, Computer Applications in Real Estate
                                and Common Interest Developments.
                              </li>
                            </ul>
                            <h3>
                              California real estate broker license: Successful
                              completion of the following 8 statutorily required
                              college-level courses:{" "}
                            </h3>
                            <ul>
                              <li>Real Estate Practice</li>
                              <li>Legal Aspects of Real Estate</li>
                              <li>Real Estate Finance</li>
                              <li>Real Estate Appraisal</li>
                              <li>Real Estate Economics or Accounting*</li>
                            </ul>
                            <h3>
                              They must also complete three of the following
                              courses:{" "}
                            </h3>
                            <ul>
                              <li>Real Estate Principles</li>
                              <li>Business Law</li>
                              <li>Property Management</li>
                              <li>Escrow</li>
                              <li>Real Estate Office Administration</li>
                              <li>Mortgage Loan Brokering and Lending</li>
                              <li>Advanced Legal Aspects of Real Estate</li>
                              <li>Advanced Real Estate Finance</li>
                              <li>Advanced Real Estate Appraisal</li>
                              <li>Computer Applications in Real Estate</li>
                              <li>Common Interest Developments</li>
                            </ul>
                            <p>
                              *Note: If both Real Estate Economics and
                              Accounting are taken, only two courses from the
                              above group are required.
                            </p>
                            <h3>California State Reciprocity:</h3>
                            <p>
                              California has no reciprocity with any other state
                              to allow a waiver of any of the requirements to
                              obtain a license.{" "}
                            </p>
                            <p>
                              In applying for the real estate broker or
                              salesperson examination, evidence of completion
                              (i.e. transcripts) of the statutory courses in
                              out-of-state institutions is acceptable if the
                              institution is accredited by the Western
                              Association of Schools and Colleges or a
                              comparable regional accrediting entity, and each
                              course counts as three semester-units of credit or
                              four quarter-units of credit. Courses completed
                              through foreign institutions of higher learning
                              must be evaluated by a foreign credentials
                              evaluation service approved by the Department of
                              Real Estate.
                            </p>
                            <p>
                              Unless prior approval has been granted by the
                              California Real Estate Commissioner, no private
                              vocational real estate school outside the State of
                              California may grant credit for the required
                              pre-license courses. Out-of-state residents must
                              file a Consent to Service of Process with the
                              California Department of Real Estate. This form
                              must be completed, signed, notarized and submitted
                              to the California Department of Real Estate with
                              the original or renewal application.
                            </p>
                            <p>
                              Brokers must maintain a California business
                              address if engaging in business in California. If
                              not engaging in business in California, brokers
                              must also file an Out-of-State Broker
                              Acknowledgment.{" "}
                            </p>
                            <p>
                              Salespersons must be licensed with a California
                              broker if engaging in business in California.
                            </p>
                            <p>
                              Applicants for a California real estate license
                              must submit one set of classifiable fingerprints,
                              acceptable to the State Department of Justice
                              (DOJ). Applicants who reside outside of California
                              must submit their fingerprints directly to the
                              California Department of Real Estate. A
                              fingerprint card (FBI Applicant FD-258 Rev 3/10)
                              will be provided to all out-of-state applicants
                              with the original license application. It should
                              be taken to a local law enforcement agency for
                              completion. The appropriate fingerprint fee must
                              be submitted to the California Department of Real
                              Estate with the completed fingerprint card,
                              original license application, and license fee.
                            </p>
                            <p>
                              California Continuing Education (CE) and License
                              Renewal Requirements:
                            </p>
                            <p>
                              California real estate licenses must be renewed
                              every four years from the date on the license.
                            </p>
                            <p>
                              License renewal requires the completion of 45
                              clock hours of California Department of Real
                              Estate approved real estate CE consisting of:
                            </p>
                            <p>
                              One 8-hour survey course that covers the five
                              required subjects (Ethics, Agency, Trust Fund
                              Handling, Fair Housing and Risk Management) OR 15
                              hours of continuing education courses in the
                              following subjects: Ethics, Agency, Trust Fund
                              Handling, Fair Housing and Risk Management
                              Additionally agents must complete at least 18
                              clock hours of consumer protection courses, and
                              can meet the 45-clock-hour requirement with any
                              real estate classes related to either consumer
                              service or consumer protection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-12 state-heading">
                          <h1>California Real Estate License Requirements</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="books-content">
                            <h3>
                              California real estate salesperson license:
                              Successful completion of three college-level
                              courses, including:{" "}
                            </h3>
                            <ul>
                              <li>
                                Real Estate Principles and Real Estate Practice,
                                as well as one of the following courses -- Real
                                Estate Appraisal, Property Management, Real
                                Estate Finance, Real Estate Economics, Legal
                                Aspects of Real Estate, Real Estate Office
                                Administration, General Accounting, Business
                                Law, Escrows, Mortgage Loan Brokering and
                                Lending, Computer Applications in Real Estate
                                and Common Interest Developments.
                              </li>
                            </ul>
                            <h3>
                              California real estate broker license: Successful
                              completion of the following 8 statutorily required
                              college-level courses:{" "}
                            </h3>
                            <ul>
                              <li>Real Estate Practice</li>
                              <li>Legal Aspects of Real Estate</li>
                              <li>Real Estate Finance</li>
                              <li>Real Estate Appraisal</li>
                              <li>Real Estate Economics or Accounting*</li>
                            </ul>
                            <h3>
                              They must also complete three of the following
                              courses:{" "}
                            </h3>
                            <ul>
                              <li>Real Estate Principles</li>
                              <li>Business Law</li>
                              <li>Property Management</li>
                              <li>Escrow</li>
                              <li>Real Estate Office Administration</li>
                              <li>Mortgage Loan Brokering and Lending</li>
                              <li>Advanced Legal Aspects of Real Estate</li>
                              <li>Advanced Real Estate Finance</li>
                              <li>Advanced Real Estate Appraisal</li>
                              <li>Computer Applications in Real Estate</li>
                              <li>Common Interest Developments</li>
                            </ul>
                            <p>
                              *Note: If both Real Estate Economics and
                              Accounting are taken, only two courses from the
                              above group are required.
                            </p>
                            <h3>California State Reciprocity:</h3>
                            <p>
                              California has no reciprocity with any other state
                              to allow a waiver of any of the requirements to
                              obtain a license.{" "}
                            </p>
                            <p>
                              In applying for the real estate broker or
                              salesperson examination, evidence of completion
                              (i.e. transcripts) of the statutory courses in
                              out-of-state institutions is acceptable if the
                              institution is accredited by the Western
                              Association of Schools and Colleges or a
                              comparable regional accrediting entity, and each
                              course counts as three semester-units of credit or
                              four quarter-units of credit. Courses completed
                              through foreign institutions of higher learning
                              must be evaluated by a foreign credentials
                              evaluation service approved by the Department of
                              Real Estate.
                            </p>
                            <p>
                              Unless prior approval has been granted by the
                              California Real Estate Commissioner, no private
                              vocational real estate school outside the State of
                              California may grant credit for the required
                              pre-license courses. Out-of-state residents must
                              file a Consent to Service of Process with the
                              California Department of Real Estate. This form
                              must be completed, signed, notarized and submitted
                              to the California Department of Real Estate with
                              the original or renewal application.
                            </p>
                            <p>
                              Brokers must maintain a California business
                              address if engaging in business in California. If
                              not engaging in business in California, brokers
                              must also file an Out-of-State Broker
                              Acknowledgment.{" "}
                            </p>
                            <p>
                              Salespersons must be licensed with a California
                              broker if engaging in business in California.
                            </p>
                            <p>
                              Applicants for a California real estate license
                              must submit one set of classifiable fingerprints,
                              acceptable to the State Department of Justice
                              (DOJ). Applicants who reside outside of California
                              must submit their fingerprints directly to the
                              California Department of Real Estate. A
                              fingerprint card (FBI Applicant FD-258 Rev 3/10)
                              will be provided to all out-of-state applicants
                              with the original license application. It should
                              be taken to a local law enforcement agency for
                              completion. The appropriate fingerprint fee must
                              be submitted to the California Department of Real
                              Estate with the completed fingerprint card,
                              original license application, and license fee.
                            </p>
                            <p>
                              California Continuing Education (CE) and License
                              Renewal Requirements:
                            </p>
                            <p>
                              California real estate licenses must be renewed
                              every four years from the date on the license.
                            </p>
                            <p>
                              License renewal requires the completion of 45
                              clock hours of California Department of Real
                              Estate approved real estate CE consisting of:
                            </p>
                            <p>
                              One 8-hour survey course that covers the five
                              required subjects (Ethics, Agency, Trust Fund
                              Handling, Fair Housing and Risk Management) OR 15
                              hours of continuing education courses in the
                              following subjects: Ethics, Agency, Trust Fund
                              Handling, Fair Housing and Risk Management
                              Additionally agents must complete at least 18
                              clock hours of consumer protection courses, and
                              can meet the 45-clock-hour requirement with any
                              real estate classes related to either consumer
                              service or consumer protection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="row">
                        <div className="col-md-12 state-heading">
                          <h1>California Real Estate License Requirements</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="books-content">
                            <h3>
                              California real estate salesperson license:
                              Successful completion of three college-level
                              courses, including:{" "}
                            </h3>
                            <ul>
                              <li>
                                Real Estate Principles and Real Estate Practice,
                                as well as one of the following courses -- Real
                                Estate Appraisal, Property Management, Real
                                Estate Finance, Real Estate Economics, Legal
                                Aspects of Real Estate, Real Estate Office
                                Administration, General Accounting, Business
                                Law, Escrows, Mortgage Loan Brokering and
                                Lending, Computer Applications in Real Estate
                                and Common Interest Developments.
                              </li>
                            </ul>
                            <h3>
                              California real estate broker license: Successful
                              completion of the following 8 statutorily required
                              college-level courses:{" "}
                            </h3>
                            <ul>
                              <li>Real Estate Practice</li>
                              <li>Legal Aspects of Real Estate</li>
                              <li>Real Estate Finance</li>
                              <li>Real Estate Appraisal</li>
                              <li>Real Estate Economics or Accounting*</li>
                            </ul>
                            <h3>
                              They must also complete three of the following
                              courses:{" "}
                            </h3>
                            <ul>
                              <li>Real Estate Principles</li>
                              <li>Business Law</li>
                              <li>Property Management</li>
                              <li>Escrow</li>
                              <li>Real Estate Office Administration</li>
                              <li>Mortgage Loan Brokering and Lending</li>
                              <li>Advanced Legal Aspects of Real Estate</li>
                              <li>Advanced Real Estate Finance</li>
                              <li>Advanced Real Estate Appraisal</li>
                              <li>Computer Applications in Real Estate</li>
                              <li>Common Interest Developments</li>
                            </ul>
                            <p>
                              *Note: If both Real Estate Economics and
                              Accounting are taken, only two courses from the
                              above group are required.
                            </p>
                            <h3>California State Reciprocity:</h3>
                            <p>
                              California has no reciprocity with any other state
                              to allow a waiver of any of the requirements to
                              obtain a license.{" "}
                            </p>
                            <p>
                              In applying for the real estate broker or
                              salesperson examination, evidence of completion
                              (i.e. transcripts) of the statutory courses in
                              out-of-state institutions is acceptable if the
                              institution is accredited by the Western
                              Association of Schools and Colleges or a
                              comparable regional accrediting entity, and each
                              course counts as three semester-units of credit or
                              four quarter-units of credit. Courses completed
                              through foreign institutions of higher learning
                              must be evaluated by a foreign credentials
                              evaluation service approved by the Department of
                              Real Estate.
                            </p>
                            <p>
                              Unless prior approval has been granted by the
                              California Real Estate Commissioner, no private
                              vocational real estate school outside the State of
                              California may grant credit for the required
                              pre-license courses. Out-of-state residents must
                              file a Consent to Service of Process with the
                              California Department of Real Estate. This form
                              must be completed, signed, notarized and submitted
                              to the California Department of Real Estate with
                              the original or renewal application.
                            </p>
                            <p>
                              Brokers must maintain a California business
                              address if engaging in business in California. If
                              not engaging in business in California, brokers
                              must also file an Out-of-State Broker
                              Acknowledgment.{" "}
                            </p>
                            <p>
                              Salespersons must be licensed with a California
                              broker if engaging in business in California.
                            </p>
                            <p>
                              Applicants for a California real estate license
                              must submit one set of classifiable fingerprints,
                              acceptable to the State Department of Justice
                              (DOJ). Applicants who reside outside of California
                              must submit their fingerprints directly to the
                              California Department of Real Estate. A
                              fingerprint card (FBI Applicant FD-258 Rev 3/10)
                              will be provided to all out-of-state applicants
                              with the original license application. It should
                              be taken to a local law enforcement agency for
                              completion. The appropriate fingerprint fee must
                              be submitted to the California Department of Real
                              Estate with the completed fingerprint card,
                              original license application, and license fee.
                            </p>
                            <p>
                              California Continuing Education (CE) and License
                              Renewal Requirements:
                            </p>
                            <p>
                              California real estate licenses must be renewed
                              every four years from the date on the license.
                            </p>
                            <p>
                              License renewal requires the completion of 45
                              clock hours of California Department of Real
                              Estate approved real estate CE consisting of:
                            </p>
                            <p>
                              One 8-hour survey course that covers the five
                              required subjects (Ethics, Agency, Trust Fund
                              Handling, Fair Housing and Risk Management) OR 15
                              hours of continuing education courses in the
                              following subjects: Ethics, Agency, Trust Fund
                              Handling, Fair Housing and Risk Management
                              Additionally agents must complete at least 18
                              clock hours of consumer protection courses, and
                              can meet the 45-clock-hour requirement with any
                              real estate classes related to either consumer
                              service or consumer protection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* bookstore end */}
        {/* practice exam start */}
        <section className="practicesec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 practicecon_wrap cs">
                <h2>Start a Practice Exam</h2>
                <p>
                  To get started, click on the category of your choice to start
                  the practice exam. Please note, every time you begin a new
                  exam, the questions will be changed for practice purposes. We
                  recommend you begin with vocabulary before you move to other
                  topics.
                </p>
              </div>
              <div className="col-lg-6 practiceimg_wrap">
                <img src="assets/img/about/practiceimg.png" alt="featureicon" />
              </div>
            </div>
          </div>
        </section>
        {/* practice exam end */}
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
