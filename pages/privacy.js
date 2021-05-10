import Head from "next/head";

export default function Privacy() {
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
        {/* start privecy */}
        <section className="privecy">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="privecy-content">
                  <h1>
                    Privacy <span>Policy</span>
                  </h1>
                  <img src="assets/img/teacher/Rectangle-1.png" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="privecy-body">
                  <p className="policy">
                    This privacy policy has been compiled to better serve those
                    who are concerned with how their 'Personally identifiable
                    information' (PII) is being used online. PII, as used in US
                    privacy law and information security, is information that
                    can be used on its own or with other information to
                    identify, contact, or locate a single person, or to identify
                    an individual in context. Please read our privacy policy
                    carefully to get a clear understanding of how we collect,
                    use, protect or otherwise handle your Personally
                    Identifiable Information in accordance with our website. By
                    accessing or using this website, you agree to this privacy
                    policy. This policy may change from time to time. Your
                    continued use of this website after we make changes is
                    deemed to be acceptance of these changes, so please check
                    the policy periodically for updates.
                  </p>
                  <h1>
                    What personal information do we collect from the people that
                    visit our blog, website or app?
                  </h1>
                  <p>
                    When ordering or registering on our site, as appropriate,
                    you may be asked to enter your name, email address, mailing
                    address, credit card information or other details to help
                    you with your experience.
                  </p>
                  <h1>When do we collect information?</h1>
                  <p>
                    We collect information from you when you place an order,
                    subscribe to a newsletter, respond to a survey, fill out a
                    form, Use Live Chat, Open a Support Ticket or enter
                    information on our site.
                  </p>
                  <p>Provide us with feedback on our products or services</p>
                  <h1>How do we use your information?</h1>
                  <p>
                    We may use the information we collect from you when you
                    register, make a purchase, sign up for our newsletter,
                    respond to a survey or marketing communication, surf the
                    website, or use certain other site features in the following
                    ways: We may use the information we collect from you when
                    you register, make a purchase, sign up for our newsletter,
                    respond to a survey or marketing communication, surf the
                    website, or use certain other site features in the following
                    ways:
                  </p>
                  <ul>
                    <li>
                      To personalize user's experience and to allow us to
                      deliver the type of content and product offerings in which
                      you are most interested.
                    </li>
                    <li>
                      To improve our website in order to better serve you.
                    </li>
                    <li>
                      To allow us to better service you in responding to your
                      customer service requests.
                    </li>
                    <li>
                      To administer a contest, promotion, survey or other site
                      feature.
                    </li>
                    <li>To quickly process your transactions.</li>
                    <li>
                      To ask for ratings and reviews of services or products
                    </li>
                    <li>
                      To follow up with them after correspondence (live chat,
                      email or phone inquiries)
                    </li>
                  </ul>
                  <h1>How do we protect visitor information?</h1>
                  <p>
                    Our website is scanned on a regular basis for security holes
                    and known vulnerabilities in order to make your visit to our
                    site as safe as possible.
                  </p>
                  <p>We use regular Malware Scanning.</p>
                  <p>
                    Your personal information is contained behind secured
                    networks and is only accessible by a limited number of
                    persons who have special access rights to such systems, and
                    are required to keep the information confidential. In
                    addition, all sensitive/credit information you supply is
                    encrypted via Secure Socket Layer (SSL) technology.
                  </p>
                  <p>
                    We implement a variety of security measures when a user
                    places an order enters, submits, or accesses their
                    information to maintain the safety of your personal
                    information.
                  </p>
                  <p>
                    All transactions are processed through a gateway provider
                    and are not stored or processed on our servers.
                  </p>
                  <p>
                    The safety and security of your information also depends on
                    you. Where we have given you (or where you have chosen) a
                    password for access to certain parts of our website, you are
                    responsible for keeping this password confidential. We ask
                    you not to share your password with anyone. We urge you to
                    be careful about giving out information in public areas of
                    the website like message boards. The information you share
                    in public areas may be viewed by any user of the website.
                  </p>
                  <p>
                    Unfortunately, the transmission of information via the
                    internet is not completely secure. Although we do our best
                    to protect your personal information, we cannot guarantee
                    the security of your personal information transmitted to our
                    website. Any transmission of personal information is at your
                    own risk. We are not responsible for circumvention of any
                    privacy settings or security measures contained on the
                    website.
                  </p>
                  <h1>Do we use 'cookies'?</h1>
                  <p>
                    Yes. Cookies are small files that a site or its service
                    provider transfers to your computer's hard drive through
                    your Web browser (if you allow) that enables the site's or
                    service provider's systems to recognize your browser and
                    capture and remember certain information. For instance, we
                    use cookies to help us remember and process the items in
                    your shopping cart. They are also used to help us understand
                    your preferences based on previous or current site activity,
                    which enables us to provide you with improved services. We
                    also use cookies to help us compile aggregate data about
                    site traffic and site interaction so that we can offer
                    better site experiences and tools in the future.
                  </p>
                  <p>We use cookies to:</p>
                  <ul>
                    <li>
                      Help remember and process the items in the shopping cart.
                    </li>
                    <li>
                      Understand and save user's preferences for future visits.
                    </li>
                    <li>
                      Compile aggregate data about site traffic and site
                      interactions in order to offer better site experiences and
                      tools in the future. We may also use trusted third-party
                      services that track this information on our behalf.
                    </li>
                  </ul>
                  <p>
                    You can choose to have your computer warn you each time a
                    cookie is being sent, or you can choose to turn off all
                    cookies. You do this through your browser (like Internet
                    Explorer) settings. Each browser is a little different, so
                    look at your browser's Help menu to learn the correct way to
                    modify your cookies.
                  </p>
                  <h1>If users disable cookies in their browser:</h1>
                  <p>
                    If you disable cookies off, some features will be disabled
                    It will turn off some of the features that make your site
                    experience more efficient and some of our services will not
                    function properly.
                  </p>
                  <h1>Third-party disclosure</h1>
                  <p>
                    We do not sell, trade, or otherwise transfer to outside
                    parties your personally identifiable information unless we
                    provide users with advance notice. This does not include
                    website hosting partners and other parties who assist us in
                    operating our website, conducting our business, or serving
                    our users, so long as those parties agree to keep this
                    information confidential. We may also release information
                    when it's release is appropriate to comply with the law,
                    enforce our site policies, or protect ours or others'
                    rights, property, or safety.
                  </p>
                  <p>
                    However, non-personally identifiable visitor information may
                    be provided to other parties for marketing, advertising, or
                    other uses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end privecy */}
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
