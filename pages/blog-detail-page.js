export default function BlogDetailPage() {
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
        <section>
          <div className="container">
            <div className="featuredimage_wrap">
              <img src="assets/img/blogdetail.png" alt="featured image" />
            </div>
          </div>
        </section>
        <section className="pricingtext_wrap">
          <div className="container">
            <h2>Tittle blog will be here</h2>
            <div className="dividertitle" />
            <div className="accessblog_content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                facilisis ac eros sit amet imperdiet. Sed eget nisi et lectus
                fermentum interdum. Duis at massa feugiat, bibendum lectus
                volutpat, hendrerit tortor. Nam volutpat placerat arcu, ut
                condimentum augue viverra ac. Duis bibendum augue ut lorem
                tincidunt rhoncus. Phasellus at lectus auctor, pretium tortor
                in, varius risus. Aliquam ornare eget urna sed egestas. Cras
                convallis in justo quis tincidunt. Cras feugiat ex et nibh
                sodales, quis ullamcorper libero euismod. Ut mollis posuere
                risus, vitae commodo est lobortis vel. Maecenas metus nunc,
                mattis sit amet lorem et, pulvinar ullamcorper ipsum. Maecenas
                rutrum dapibus bibendum. Vivamus et tristique elit, ut venenatis
                lectus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. In quis ligula magna.
                Suspendisse finibus iaculis vulputate.
              </p>
              <p>
                Donec ac porttitor eros, in porta enim. Nullam iaculis porta
                turpis eget commodo. Phasellus ultricies gravida erat mollis
                aliquet. Curabitur sit amet nulla et risus iaculis posuere sed
                sed urna. Sed in ultrices augue. Maecenas sodales nibh sed erat
                pharetra suscipit. Donec venenatis, sapien ut rhoncus semper,
                nisi lorem semper quam, et posuere ante nunc a nisi.{" "}
              </p>
              <p>
                Proin eu mattis lorem. Aenean at facilisis leo. Pellentesque
                sollicitudin sodales risus, at tristique dui aliquam nec.
                Vivamus convallis tempus sapien quis mattis. Phasellus vel
                consequat orci. Sed id varius erat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam eu est a dui consequat egestas
                placerat a est. Aenean in hendrerit ante, in sagittis nunc. Cras
                pellentesque urna magna.
              </p>
              <p>
                In hac habitasse platea dictumst. Cras sed massa erat. Maecenas
                feugiat luctus dui in ornare. Proin ac pellentesque tellus. Nunc
                lacus sem, viverra sit amet odio sit amet, fermentum auctor
                odio. Aenean sodales enim in vestibulum laoreet. In risus ante,
                tempor ut hendrerit vitae, ornare id magna. Aliquam erat
                volutpat.
              </p>
              <p>
                Sed non elementum nisl, vitae vulputate eros. Etiam suscipit
                erat non elit rhoncus ullamcorper. Etiam fringilla consequat
                nulla, ac euismod enim viverra vel. Ut eleifend luctus est, vel
                ultrices urna. Donec et scelerisque erat. Praesent dictum ac
                arcu sed tincidunt. Phasellus at finibus nibh, quis condimentum
                orci.
              </p>
            </div>
          </div>
        </section>
        <section className="pricingtext_wrap">
          <div className="container">
            <h2>Related Posts</h2>
            <div className="dividertitle" />
          </div>
        </section>
        <section className="bloglists_wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 bloglist_item bloglist_item1">
                <div>
                  {" "}
                  <img src="assets/img/blog/blogone.png" />
                </div>
                <h2 className="bloglist-title">Tittle blog will be here</h2>
                <p className="bloglist-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 bloglist_item bloglist_item2 bloglist_item1">
                <div>
                  <img src="assets/img/blog/blogtwo.png" />
                </div>
                <h2 className="bloglist-title">Tittle blog will be here</h2>
                <p className="bloglist-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-lg-4  col-md-6 bloglist_item  bloglist_item2">
                <div>
                  {" "}
                  <img src="assets/img/blog/blogthree.png" />
                </div>
                <h2 className="bloglist-title">Tittle blog will be here</h2>
                <p className="bloglist-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
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
