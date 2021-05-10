import Head from "next/head";

export default function Billing() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Broker Success</title>

        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <meta name="description" content="" />
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

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
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
        <section className="billinpage_wrapper">
          <div className="container">
            <div className="col-md-12 pl-0 pr-0">
              <div className="common-head-section">
                <h2>
                  Your <strong>Billings</strong>
                </h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="billingpage_formwrapper">
                <form method="post" className="billing_form">
                  <div className="col-xs-12 col-lg-6 billing_leftsec">
                    <h4 className="billform_title">Billing Address</h4>
                    <div className="form-group">
                      <label htmlFor="nameoncard">Name on Card</label>
                      <input
                        type="text"
                        id="nameoncard"
                        name="nameoncard"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="billaddress">Billing street</label>
                      <input
                        type="text"
                        id="billaddress"
                        name="billaddress"
                        placeholder="123 Main St."
                      />
                    </div>
                    <div className="form-group citywrap">
                      <div className="row pl-3 pr-0">
                        <div className="form-group col-xs-12 col-md-6 col-lg-6 pl-0 pr-0 city">
                          <label htmlFor="City">City</label>
                          <input
                            type="text"
                            id="City"
                            name="City"
                            placeholder="Blue spring"
                          />
                        </div>
                        <div className="form-group col-xs-12 col-md-6 col-lg-6 pr-0 state">
                          <label htmlFor="State">State</label>
                          <input
                            type="text"
                            id="State"
                            name="State"
                            placeholder="Kentucky"
                          />
                        </div>
                      </div>
                      <div className="row pl-0 pr-0">
                        <div className="form-group col-xs-12 col-md-6 col-lg-6 pr-0 zip">
                          <label htmlFor="ZIP">ZIP</label>
                          <input
                            type="number"
                            id="ZIP"
                            name="ZIP"
                            placeholder={29030}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-lg-6 billing_rightsec">
                    <h4 className="billform_title">Payment method</h4>
                    <div className="form-group">
                      <label htmlFor="cardnumber">Card number</label>
                      <input
                        className="inputicon"
                        type="text"
                        id="cardnumber"
                        name="cardnumber"
                        placeholder="1200 2300 2222 2334"
                      />
                    </div>
                    <div className="form-group citywrap">
                      <div className="row pl-3 pr-0">
                        <div className="form-group col-xs-12 col-md-6 col-lg-6 pl-0 pr-0 ">
                          <label htmlFor="expdate">Expiry date</label>
                          <div className="expdate_wrap">
                            <input
                              type="text"
                              className="col-xs-6"
                              id="expdate"
                              name="expdate"
                              placeholder={02}
                            />
                            <input
                              className="expyear"
                              type="text"
                              id="State"
                              name="State"
                              placeholder={25}
                            />
                          </div>
                        </div>
                        <div className="form-group cvvfield col-xs-12 col-md-6 col-lg-6 ">
                          <label htmlFor="CVV ">CVV </label>
                          <input
                            type="password"
                            id="CVV "
                            name="CVV "
                            placeholder={29030}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xs-12 col-lg-3">
                <input type="submit" className="save_btn" defaultValue="SAVE" />
              </div>
            </div>
          </div>
        </section>
        {/* ======= Back to top Section ======= */}
        <div id="preloader" />
      </div>
    </div>
  );
}
