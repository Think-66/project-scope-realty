import Head from "next/head";

export default function Login() {
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
                  <img src="assets/img/accesslogo.png" />{" "}
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
        <div className="loginpage_wrapper">
          <div className="container">
            <div className="loginform_wrapper">
              <div className="container">
                <h2>
                  <span>Login </span>To Your Account
                </h2>
                <div className="dividerline logindivider"></div>
                <div className="row d-flex">
                  <div className="col-lg-12">
                    <div className="accesslogin_wrap">
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Your email</h6>
                        </label>{" "}
                        <input
                          className="mb-4"
                          type="text"
                          name="email"
                          placeholder="johndoe@gmail.com"
                        />{" "}
                      </div>
                      <div className="row px-3">
                        {" "}
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Password</h6>
                        </label>{" "}
                        <input
                          type="password"
                          name="password"
                          placeholder="* * * * * * * * * *"
                        />{" "}
                      </div>
                      <div className="row px-3 mb-4">
                        <div className="custom-control custom-checkbox custom-control-inline  mb-2">
                          <input
                            id="chk1"
                            type="checkbox"
                            name="chk"
                            className="custom-control-input"
                          />{" "}
                          <label
                            htmlFor="chk1"
                            className="custom-control-label text-sm"
                          >
                            Remember me
                          </label>{" "}
                        </div>{" "}
                        <a
                          href="#"
                          className="ml-auto mb-0 text-sm passwordfld"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <div className="row mb-3 px-3">
                        <button
                          type="submit"
                          className="btn text-center loginbutton"
                        >
                          Login
                        </button>
                      </div>
                      <div className="row mb-4 px-3 register_wrap">
                        <small className="font-weighttext">
                          Don't have an account? <br />
                          <a className="text-danger ">Register here</a>
                        </small>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ======= Back to top Section ======= */}
            <div id="preloader" />
            {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
          </div>
        </div>
      </div>
    </div>
  );
}
