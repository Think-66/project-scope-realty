export default function FlashCards() {
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
        <section className="flashcard_banner">
          <div className="container">
            <div className="flashcard_bannerwrapper">
              <h2>Flashcards</h2>
              <p>
                Simply click the card to reveal the answer on the other side
              </p>
            </div>
          </div>
        </section>
        <section className="flashcard_wrapper">
          <div className="container">
            <div className="flip-cards panel">
              <div className="flip-card-front">
                <ul className="flipfront-contentlist">
                  <li>
                    {" "}
                    <img src="assets/img/sign.png" alt="Avatar" />
                  </li>
                  <li className="imageright_content">Eminent Domain</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <p className="fliptext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="clearfix"></section>
        {/* ======= Back to top Section ======= */}
        <div id="preloader" />
        {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
      </div>
    </div>
  );
}
