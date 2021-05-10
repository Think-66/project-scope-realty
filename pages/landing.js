import Head from "next/head";

export default function Template() {
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
        <link rel="stylesheet" href="assets/css/landing.css" />
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
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: "\n  \n\n" }}
        />
      </Head>
      <div>
        <header className="header-section">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light loginnav">
              <div className="col-md-2 col-lg-2">
                <a className="navbar-brand col-xs-4" href="#">
                  <img src="assets/img/Group.png" />{" "}
                </a>
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
        {/* landing-slider-start */}
        <section className="landing-slider">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="landing-slider-text">
                  <h1>
                    Prepare. Conquer. <br /> <span>Succeed.</span>
                  </h1>
                  <p>
                    Sign up with us to get instant access to resources, practice
                    questions, training tools and all that you need to ace your
                    exam and get licensed. We set you up for real estate
                    examination success so that you can excel in your career!
                  </p>
                  <form>
                    <div className="row">
                      <div className="col-md-7 col-lg-8">
                        <div className="landing-form">
                          <input
                            type="email"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-4">
                        <div className="landing-btn">
                          <button className="btn">GET STARTED</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="landing-slider-image">
                  <img src="assets/img/hero-img.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* landing-slider-end */}
        {/* Innovative start */}
        <section className="Innovative">
          <div className="container">
            <div className="row success">
              <div className="col-sm-6 col-md-6">
                <div className="content">
                  <h1>Interactive and Innovative Content</h1>
                  <p>
                    At Broker Success, you get various interactive and
                    innovative online study material to maximize your chances of
                    successfully passing the exam. We offer you all from exam
                    preparation videos to vocabulary practice, flashcard
                    practice, state-specific question and practice exams. We
                    ensure that you are well-prepared and ready to take the exam
                    with sheer confidence.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="innovative-image">
                  <img src="assets/img/landing-1.png" />
                </div>
              </div>
            </div>
            <div className="row success">
              <div className="col-sm-6 col-md-6">
                <div className="innovative-image">
                  <img src="assets/img/service_img2.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="content">
                  <h1>State-Specific Practice Questions</h1>
                  <p>
                    Access and answer thousands of state-specific questions to
                    prepare for the examination. By answering these questions,
                    you can easily learn about your weak areas and master them
                    before the exam date. At Broker Success, you will get access
                    to questions and their answers with explanations in detail.
                    This will help you understand why the answer is right or
                    wrong, further helping you move up the learning curve.
                  </p>
                </div>
              </div>
            </div>
            {/* mobile-row */}
            <div className="row success ms">
              <div className="col-sm-6 col-md-6">
                <div className="content">
                  <h1>State-Specific Practice Questions</h1>
                  <p>
                    Access and answer thousands of state-specific questions to
                    prepare for the examination. By answering these questions,
                    you can easily learn about your weak areas and master them
                    before the exam date. At Broker Success, you will get access
                    to questions and their answers with explanations in detail.
                    This will help you understand why the answer is right or
                    wrong, further helping you move up the learning curve.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="innovative-image">
                  <img src="assets/img/service_img2.png" />
                </div>
              </div>
            </div>
            {/* mobile-row */}
            <div className="row success">
              <div className="col-sm-6 col-md-6">
                <div className="content">
                  <h1>Explainer Videos—Get Exam Ready</h1>
                  <p>
                    Stay engaged, understand better, and retain information more
                    effectively. These videos are developed to help students
                    prepare for the real estate examination while enjoying the
                    process of learning. Let’s not dread the process. Instead,
                    experience meaningful learning that helps you gain knowledge
                    you can use to pass the exam and benefit from in the
                    long-run.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="innovative-image">
                  <img src="assets/img/service_img3.png" />
                </div>
              </div>
            </div>
            <div className="row success">
              <div className="col-sm-6 col-md-6">
                <div className="innovative-image">
                  <img src="assets/img/service_img4.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="content">
                  <h1>Ready to Start Your Prep?</h1>
                  <p>
                    We at Broker Success believe that practice makes perfect.
                    And there is no better way to practice and prepare for the
                    real estate exam than to register with us. Our real estate
                    innovative course structure and tools are proven to help
                    students in all stages of their real estate career. Whether
                    you’re starting off or want to take your career to a new
                    level, we can help you prepare for inevitable success.
                  </p>
                </div>
              </div>
            </div>
            {/* mobile-row */}
            <div className="row success ms">
              <div className="col-sm-6 col-md-6">
                <div className="content">
                  <h1>Ready to Start Your Prep?</h1>
                  <p>
                    We at Broker Success believe that practice makes perfect.
                    And there is no better way to practice and prepare for the
                    real estate exam than to register with us. Our real estate
                    innovative course structure and tools are proven to help
                    students in all stages of their real estate career. Whether
                    you’re starting off or want to take your career to a new
                    level, we can help you prepare for inevitable success.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="innovative-image">
                  <img src="assets/img/service_img4.png" />
                </div>
              </div>
            </div>
            {/* mobile-row */}
          </div>
        </section>
        {/* Innovative end */}
        {/* get-started-start */}
        <section className="get-started">
          <div className="container">
            <h1>Get Started</h1>
            <div className="row">
              <div className="col-6 col-sm-3 col-md-3">
                <div className="get-box">
                  <img src="assets/img/get.png" />
                  <h4>Updated Content</h4>
                  <p>
                    Revolutionary and up-to-date practice material for effective
                    learning and career progression.
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-3">
                <div className="get-box">
                  <img src="assets/img/get.png" />
                  <h4>Immediate Access</h4>
                  <p>
                    Sign up and access content right away online from anywhere.
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-3">
                <div className="get-box">
                  <img src="assets/img/get.png" />
                  <h4>Follow Your Progress</h4>
                  <p>
                    Easily view lessons completed, time spent on a course and
                    practice exam scores.
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-md-3">
                <div className="get-box">
                  <img src="assets/img/get.png" />
                  <h4>Practice Questions for All States</h4>
                  <p>
                    We support all 50 states, meaning you can get practice
                    questions for your state easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* get-started-end */}
        {/* carousel-section-start */}
        <section
          className="carousel-section testimonial-slider-section"
          data-aos="fade-up"
        >
          <div className="carousel-container">
            <h2 className="common-head dark-blue">Testimonial</h2>
            <div className="owl-carousel-testimonial owl-carousel owl-theme">
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item-list">
                <div className="carousel-item-list-card">
                  <div className="testimonial-profile d-flex align-items-center">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/profileImage.png"
                        alt="Profile Pic"
                      />
                    </figure>
                    <h3>John Doe</h3>
                  </div>
                  <div className="testimonial-profile-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-common btn-blue float-right"
            >
              View More
            </a>
          </div>
        </section>
        {/* carousel-section-end */}
        {/* refer-start */}
        <section className="refer">
          <div className="container">
            <div className="row refer-body">
              <div className="col-sm-6 col-md-6">
                <div className="refer-image">
                  <img src="assets/img/refer.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="refer-text">
                  <h1>Refer and Earn</h1>
                  <p>
                    We give you a chance to start earning even before you become
                    a real estate agent. All you have to do is refer a person to
                    Broker Success and earn up to $20. Strategize your exam
                    preparation for success. Click here for quality advice and
                    suggestions.
                  </p>
                  <a href="#">EARN NOW</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* refer-end */}
        {/* flashcards-start */}
        <section className="flashcards">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="flashcard-text">
                  <h1>Flashcards</h1>
                  <p>
                    Use our flashcards to test yourself quickly if you get the
                    answers correct. Take advantage of our most versatile study
                    tool to engage in active recall and fast learning.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="flashcard-image">
                  <img src="assets/img/flashcard.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* flashcards-end */}
        {/* ======= Real Estate video Section ======= */}
        <section className="realEstate-video-section">
          <div className="realEstate-video-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="realEstate-video-content" data-aos="fade-up">
                    <h1 className="common-head">
                      Real Estate Videos —Watch and Learn
                    </h1>
                    <p>
                      Move up your learning curve. Watch informative and concept
                      based real estate videos for clarity and understanding so
                      that you can answer all questions with confidence. Just
                      like any industry, the real estate industry also has
                      specific rules, regulations and laws that real estate
                      professionals of all levels must be aware of. This is much
                      needed to ensure you act responsibly and in compliance
                      with the law, serving your clients (buyers and sellers)
                      appropriately and authentically. Thus, we have developed a
                      series of informational real estate videos to help you
                      better understand the concepts you will be tested on in
                      the exam and learn how to operate successfully in the real
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="realEstateCarousel-section"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="realEstateCarousel-container">
                <div className="owl-carousel-realEstate owl-carousel owl-theme">
                  <div className="realEstateCarousel-item-list">
                    <div className="realEstateCarousel-item-list-card">
                      <a href="javascript:void(0);">
                        <img
                          className="img-fluid"
                          src="assets/img/realEstate_video.png"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="realEstateCarousel-item-list">
                    <div className="realEstateCarousel-item-list-card">
                      <a href="javascript:void(0);">
                        <img
                          className="img-fluid"
                          src="assets/img/realEstate_video.png"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="realEstateCarousel-item-list">
                    <div className="realEstateCarousel-item-list-card">
                      <a href="javascript:void(0);">
                        <img
                          className="img-fluid"
                          src="assets/img/realEstate_video.png"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="realEstateCarousel-item-list">
                    <div className="realEstateCarousel-item-list-card">
                      <a href="javascript:void(0);">
                        <img
                          className="img-fluid"
                          src="assets/img/realEstate_video.png"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="realEstateCarousel-item-list">
                    <div className="realEstateCarousel-item-list-card">
                      <a href="javascript:void(0);">
                        <img
                          className="img-fluid"
                          src="assets/img/realEstate_video.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  className="btn btn-common btn-white float-right"
                >
                  More Videos
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ======= video Section ======= */}
        {/* foundation-start */}
        <section className="Foundation">
          <div className="container">
            <h1>Build a Solid Real Estate Foundation</h1>
            <div className="row foundation">
              <div className="col-md-12 col-lg-6">
                <div className="foundation-image">
                  <img src="assets/img/foundation.png" />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="foundation-text">
                  <p>
                    At Broker Success, we are dedicated to helping students
                    build a solid real estate foundation. To ensure this, we
                    have assembled many videos explaining, addressing, and
                    tackling concepts with sheer precision, leaving no room for
                    ambiguity. You can browse through our range to watch videos
                    on topics you often struggle with or need more clarity for.
                    From basic laws and regulations to complex concepts like
                    fair housing, we have a video on practically any topic you
                    want to learn about.
                  </p>
                  <p>
                    These videos can help you master your weak points. For
                    example, in the fair housing videos we help agents
                    understand different protected classes that exist in fair
                    housing law. Moreover, we also focus on their
                    responsibilities towards all classes and the penalties and
                    consequences they are likely to incur because of
                    non-compliance. Moreover, we strive to help you understand
                    real estate principles and gain complete know-how of
                    concepts like property ownership, real estate appraisals and
                    ownership transfers. Other concepts that you can learn
                    through our videos are leasing, tenant interaction, property
                    management, taxes and assessments, property insurance,
                    licensee safety, land-use regulation, estates and interests,
                    financing and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* foundation-end */}
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
      </div>
    </div>
  );
}
