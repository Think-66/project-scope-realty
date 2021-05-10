import Head from "next/head";

export default function Member() {
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
        <section className="bannertitle-sec">
          <div className="container">
            <h4 className="bannertitle">
              <span className="study">Study</span> Material
            </h4>
            <p>Simply click an option below to get started</p>
          </div>
        </section>
        <section className="courses_wrapper pb-0">
          <div className="container">
            <div className="row text-center course_row">
              <div className="col-md-6 col-lg-4 profilebox_wrapper">
                <a href="#">
                  <div className="course_item">
                    <p className="profile_avatar">
                      {" "}
                      <img src="assets/img/Practice Exams.png" />{" "}
                    </p>
                    <h5>Practice Exams</h5>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 profilebox_wrapper">
                <a href="#">
                  <div className="course_item">
                    <p className="profile_avatar">
                      {" "}
                      <img src="assets/img/Exam Prep Videos.png" />{" "}
                    </p>
                    <h5>Exam Prep Videos</h5>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 profilebox_wrapper">
                <a href="#">
                  <div className="course_item">
                    <p className="profile_avatar">
                      {" "}
                      <img src="assets/img/Flashcards.png" />{" "}
                    </p>
                    <h5>Flashcards</h5>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 profilebox_wrapper">
                <a href="#">
                  <div className="course_item">
                    <p className="profile_avatar">
                      {" "}
                      <img src="assets/img/Vocabulary Practice.png" />{" "}
                    </p>
                    <h5>Vocabulary Practice</h5>
                  </div>
                </a>
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
