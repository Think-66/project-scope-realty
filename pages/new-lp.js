import Head from "next/head";

export default function NewLp() {
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
      </Head>

      <div>
        <header className="header-section index-page">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.svg" className="img-logo img-fluid" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggle"
                aria-controls="navbarToggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ color: "#819F83" }}
              >
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarToggle">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      Our Guarantee
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      Free Practice Exam
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0);"
                      id="navbarDropdown"
                      role="button"
                      data-hover="dropd own"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Action
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Another action
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  href="contact-us.html"
                  className="btn btn-common btn-blue d-none d-md-block"
                >
                  Sign In
                </a>
              </div>
              <div className="dropdown d-xl-none">
                <a
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <span className="mr-2 text-gray-600 profile-txt">
                    John Doe
                  </span>
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
          </nav>
        </header>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex flex-column justify-content-center">
                <div
                  className="banner-caption top-left-content"
                  data-aos="zoom-in"
                  data-aos-delay={150}
                >
                  <h1>
                    Prepare. Conquer.{" "}
                    <span>
                      Succeed.
                      <span />
                    </span>
                  </h1>
                  <p>
                    Sign up with us to get instant access to resources, practice
                    questions, training tools and all that you need to ace your
                    exam and get licensed. We set you up for real estate
                    examination success so that you can excel in your career!
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-common btn-blue btn-get-started scrollto"
                  >
                    SIGNUP NOW
                  </a>
                </div>
              </div>
              <div
                className="col-sm-6 order-2 order-lg-2 hero-img top-hero-img"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="banner-img">
                  <img
                    src="assets/img/hero-img.png"
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        {/* ======= Service Section ======= */}
        <section className="service-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="service-content">
                  <h2 className="common-head light-blue">
                    Interactive and Innovative Content
                  </h2>
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
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-img service-img-right">
                  <figure>
                    <img
                      className="img-fluid"
                      src="assets/img/service_img1.png"
                      alt="Service Img"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="row second-service">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="service-img service-img-left">
                  <figure>
                    <img
                      className="img-fluid"
                      src="assets/img/service_img2.png"
                      alt="Service Img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-content">
                  <h2 className="common-head dark-blue">
                    State-Specific Practice Questions
                  </h2>
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
            <div className="row third-service">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="service-content">
                  <h2 className="common-head light-blue">
                    Explainer Videos-Get Exam Ready
                  </h2>
                  <p>
                    Stay engaged, understand better, and retain information more
                    effectively. These videos are developed to help students
                    prepare for the real estate examination while enjoying the
                    process of learning. Let's not dread the process. Instead,
                    experience meaningful learning that helps you gain knowledge
                    you can use to pass the exam and benefit from in the
                    long-run.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-img service-img-right">
                  <figure>
                    <img
                      className="img-fluid"
                      src="assets/img/service_img3.png"
                      alt="Service Img"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="row fourth-service">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="service-img service-img-left">
                  <figure>
                    <img
                      className="img-fluid"
                      src="assets/img/service_img4.png"
                      alt="Service Img"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-content">
                  <h2 className="common-head dark-blue">
                    Ready to Start Your Prep?
                  </h2>
                  <p>
                    We at Broker Success believe that practice makes perfect.
                    And there is no better way to practice and prepare for the
                    real estate exam than to register with us. Our real estate
                    innovative course structure and tools are proven to help
                    students in all stages of their real estate career. Whether
                    you're starting off or want to take your career to a new
                    level, we can help you prepare for inevitable success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Service */}
        {/* ======= Get Started Section ======= */}
        <section className="getStarted-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="getStarted-container">
                  <h2 className="common-head dark-blue">Get Started</h2>
                </div>
                <div className="row getStarted-list-wrap">
                  <div
                    className="col-md-3 col-sm-6 getStarted-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="getStarted-list text-center">
                      <figure>
                        <img
                          className="img-fluid"
                          src="assets/img/update_content_icon.png"
                          alt=""
                        />
                      </figure>
                      <h3>Updated Content</h3>
                      <p>
                        Revolutionary and up-to-date practice material for
                        effective learning and career progression.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 getStarted-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="getStarted-list text-center">
                      <figure>
                        <img
                          className="img-fluid"
                          src="assets/img/immediate_icon.png"
                          alt=""
                        />
                      </figure>
                      <h3>Immediate Access</h3>
                      <p>
                        Sign up and access content right away online from
                        anywhere.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 getStarted-box"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="getStarted-list text-center">
                      <figure>
                        <img
                          className="img-fluid"
                          src="assets/img/follow_your_icon.png"
                          alt=""
                        />
                      </figure>
                      <h3>Follow Your Progress</h3>
                      <p>
                        Easily view lessons completed, time spent on a course
                        and practice exam scores.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 getStarted-box"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="getStarted-list text-center">
                      <figure>
                        <img
                          className="img-fluid"
                          src="assets/img/practice_question_icon.png"
                          alt=""
                        />
                      </figure>
                      <h3>Practice Questions for All States</h3>
                      <p>
                        We support all 50 states, meaning you can get practice
                        questions for your state easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        {/* ======= Refer Earn Section ======= */}
        <section className="refer-earn-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="refer-earn-img">
                  <figure>
                    <img
                      className="img-fluid desktop"
                      src="assets/img/refer_earn_img.png"
                      alt="Refer Earn Image"
                    />
                    <img
                      className="img-fluid mobile"
                      src="assets/img/refer_earn_img_mob.png"
                      alt="Refer Earn Image"
                    />
                  </figure>
                </div>
              </div>
              <div
                className="col-md-6 d-flex flex-column justify-content-center refer_earn-right"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="refer-earn-content pl-xl-5">
                  <h1>Refer and Earn</h1>
                  <p>
                    We give you a chance to start earning even before you become
                    a real estate agent. All you have to do is refer a person to
                    Broker Success and earn up to $20. Strategize your exam
                    preparation for success. Click here for quality advice and
                    suggestions.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-common btn-white"
                  >
                    EARN NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Practice Exam */}
        {/* ======= Flashcards Section ======= */}
        <section className="flashcards-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-6 flashcards-section-left"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="flashcards-content">
                  <h2 className="common-head dark-blue">Flashcards</h2>
                  <p>
                    Use our flashcards to test yourself quickly if you get the
                    answers correct. Take advantage of our most versatile study
                    tool to engage in active recall and fast learning.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-6 flashcards-section-right"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="flashcards-img flashcards-img-right">
                  <figure>
                    <img
                      className="img-fluid"
                      src="assets/img/flashcard_img.png"
                      alt="Flashcard Img"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Real Estate video Section ======= */}
        <section className="realEstate-video-section">
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height={100}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
          <div className="realEstate-video-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="realEstate-video-content" data-aos="fade-up">
                    <h1 className="common-head">
                      Real Estate Videos -Watch and Learn
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
        <section className="video-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12" data-aos="fade-up">
                <div className="video-content-wrap text-center">
                  <h1 className="common-head common-head-center dark-blue">
                    Build a Solid Real Estate Foundation
                  </h1>
                  <div className="video-card">
                    <figure>
                      <img
                        className="img-fluid"
                        src="assets/img/video_img1.png"
                        alt="Video Section"
                      />
                    </figure>
                  </div>
                  <div className="video-content">
                    <p>
                      At Broker Success, we are dedicated to helping students
                      build a solid real estate foundation. To ensure this, we
                      have assembled many videos explaining, addressing, and
                      tackling concepts with sheer precision, leaving no room
                      for ambiguity. You can browse through our range to watch
                      videos on topics you often struggle with or need more
                      clarity for. From basic laws and regulations to complex
                      concepts like fair housing, we have a video on practically
                      any topic you want to learn about. These videos can help
                      you master your weak points. For example, in the fair
                      housing videos we help agents understand different
                      protected classes that exist in fair housing law.
                      Moreover, we also focus on their responsibilities towards
                      all classes and the penalties and consequences they are
                      likely to incur because of non-compliance. Moreover, we
                      strive to help you understand real estate principles and
                      gain complete know-how of concepts like property
                      ownership, real estate appraisals and ownership transfers.
                      Other concepts that you can learn through our videos are
                      leasing, tenant interaction, property management, taxes
                      and assessments, property insurance, licensee safety,
                      land-use regulation, estates and interests, financing and
                      more.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End video */}
        {/* ======= Practice Exam Section ======= */}
        <section className="practice-exam-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
              >
                <div className="practice-exam-content pr-xl-5">
                  <h1>Start a Practice Exam</h1>
                  <p>
                    To get started, click on the category of your choice to
                    start the practice exam. Please note, every time you begin a
                    new exam, the questions will be changed for practice
                    purposes. We recommend you begin with vocabulary before you
                    move to other topics.
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up">
                <div className="practice-exam-img">
                  <figure>
                    <img
                      className="img-fluid"
                      src="assets/img/practice_exam_img.png"
                      alt="Practice Image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Practice Exam */}
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
        <a href="#" className="back-to-top">
          <i className="fa fa-caret-up" />
        </a>
        <div id="preloader" />
        {/*[if lt IE 8]>
      <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
      </div>
    </div>
  );
}
