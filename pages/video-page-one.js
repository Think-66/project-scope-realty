import Head from "next/head";

export default function VideoPageOnce() {
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
        <section className="accordion-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="common-head-section">
                  <h1 className="common-head">
                    <strong>Real Estate</strong> Videos
                  </h1>
                  <p>
                    The videos below will help you better understand the various
                    concepts you will encounter on your real estate exam.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                {/*Accordion wrapper*/}
                <div
                  className="accordion md-accordion mCustomScrollbar"
                  id="accordionEx"
                  role="tablist"
                  aria-multiselectable="true"
                  data-mcs-theme="dark"
                >
                  {/* Accordion card */}
                  <div className="card">
                    {/* Card header */}
                    <div className="card-header" role="tab" id="headingOne1">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne1"
                        aria-expanded="true"
                        aria-controls="collapseOne1"
                      >
                        <h5 className="mb-0">
                          Bundle of Rights{" "}
                          <i className="fas fa-angle-down rotate-icon" />
                        </h5>
                      </a>
                    </div>
                    {/* Card body */}
                    <div
                      id="collapseOne1"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne1"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body d-lg-flex">
                        <div className="card-body-right pt-3 pt-lg-0 order-1 order-lg-2">
                          <figure>
                            <img
                              className="img-fluid"
                              src="assets/img/video_img.png"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="card-body-left w-75 pr-lg-5 order-2 order-lg-1">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-common"
                          >
                            WATCH VIDEO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Accordion card */}
                  {/* Accordion card */}
                  <div className="card">
                    {/* Card header */}
                    <div className="card-header" role="tab" id="headingTwo2">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        <h5 className="mb-0">
                          Who is Giving and Who is Receiving? The -OR -EE Rule{" "}
                          <i className="fas fa-angle-down rotate-icon" />
                        </h5>
                      </a>
                    </div>
                    {/* Card body */}
                    <div
                      id="collapseTwo2"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo2"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body">
                        <div className="card-body-left">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-common"
                          >
                            WATCH VIDEO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Accordion card */}
                  {/* Accordion card */}
                  <div className="card">
                    {/* Card header */}
                    <div className="card-header" role="tab" id="headingThree3">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseThree3"
                        aria-expanded="false"
                        aria-controls="collapseThree3"
                      >
                        <h5 className="mb-0">
                          What is a License?{" "}
                          <i className="fas fa-angle-down rotate-icon" />
                        </h5>
                      </a>
                    </div>
                    {/* Card body */}
                    <div
                      id="collapseThree3"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree3"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body">
                        <div className="card-body-left">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-common"
                          >
                            WATCH VIDEO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Accordion card */}
                  {/* Accordion card */}
                  <div className="card">
                    {/* Card header */}
                    <div className="card-header" role="tab" id="headingFour4">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseFour4"
                        aria-expanded="false"
                        aria-controls="collapseFour4"
                      >
                        <h5 className="mb-0">
                          Real Property vs Personal Property{" "}
                          <i className="fas fa-angle-down rotate-icon" />
                        </h5>
                      </a>
                    </div>
                    {/* Card body */}
                    <div
                      id="collapseFour4"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour4"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body">
                        <div className="card-body-left">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-common"
                          >
                            WATCH VIDEO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Accordion card */}
                  {/* Accordion card */}
                  <div className="card">
                    {/* Card header */}
                    <div className="card-header" role="tab" id="headingFive5">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseFive5"
                        aria-expanded="false"
                        aria-controls="collapseFive5"
                      >
                        <h5 className="mb-0">
                          Appurtenance{" "}
                          <i className="fas fa-angle-down rotate-icon" />
                        </h5>
                      </a>
                    </div>
                    {/* Card body */}
                    <div
                      id="collapseFive5"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive5"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body">
                        <div className="card-body-left">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-common"
                          >
                            WATCH VIDEO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Accordion card */}
                </div>
                {/* Accordion wrapper */}
              </div>
            </div>
          </div>
        </section>
        {/* ======= Back to top Section ======= */}
        <div id="preloader" />
        {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
      </div>
    </div>
  );
}
