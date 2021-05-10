import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Questions from "../../components/questions";

export default function Exam() {
  const router = useRouter();

  const [data, setData] = useState([]);

  const [summary, setSummary] = useState({
    answered: 0,
    correct: 0,
    incorrect: 0,
    total: 0,
  });

  const getData = () => {
    const { examname } = router.query;
    console.log(router.query);

    fetch(`/json/${examname}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (questions) {
        console.log(questions);
        setData(questions);
        setSummary({ ...summary, total: questions.length });
      });
  };

  useEffect(() => {
    getData();
  }, []);

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

        <section className="practiceexam_tablewrap">
          <div className="container">
            <h2>
              My Practice <span>Exams</span>
            </h2>
            <div className="dividerline" />
          </div>
        </section>
        <section className="practiceresult_wrapper">
          <div className="container">
            <div className="col-md-12 count_wrapper">
              <div className="col-lg-3 col-md-3 col-xs-3 count">
                <ul>
                  <li>
                    {" "}
                    <h2>{summary.answered}</h2>
                  </li>
                  <li>
                    <p>answered</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-3 count">
                <ul>
                  <li>
                    {" "}
                    <h2>{summary.correct}</h2>
                  </li>
                  <li>
                    <p>correct</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-3 count">
                <ul>
                  <li>
                    {" "}
                    <h2>{summary.answered - summary.correct}</h2>
                  </li>
                  <li>
                    <p>incorrect</p>
                  </li>
                </ul>{" "}
              </div>
              <div className="col-lg-3 col-md-3 col-xs-3 count">
                <ul>
                  <li>
                    {" "}
                    <h2>{summary.total - summary.answered}</h2>
                  </li>
                  <li>
                    <p>remaining</p>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="questionstab_wrapper">
          <div className="container">
            <div className="questionstab_content">
              <h5>Question to review ({summary.total - summary.answered})</h5>
              <div className="col-lg-12 tab_wrapper">
                {/* Tab navigation */}
                <div>
                  {/* <button className="prevtab btn ">
                    <img src="assets/img/prev.png" alt="previous" />
                  </button> */}

                  {data && (
                    <ul
                      className="nav nav-tabs questionstab_nav"
                      id="myTab"
                      role="tablist"
                    >
                      {summary.total - summary.answered > 1 && (
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="newyork-tab"
                            data-toggle="tab"
                            href="#newyork-tab"
                            role="tab"
                            aria-controls="newyork-tab"
                            aria-selected="true"
                          >
                            {data[summary.answered].question}
                          </a>
                        </li>
                      )}
                      {summary.total - summary.answered > 2 && (
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="newyork-tab"
                            data-toggle="tab"
                            href="#newyork-tab"
                            role="tab"
                            aria-controls="newyork-tab"
                            aria-selected="true"
                          >
                            {data[summary.answered + 1].question}
                          </a>
                        </li>
                      )}
                      {summary.total - summary.answered > 3 && (
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="newyork-tab"
                            data-toggle="tab"
                            href="#newyork-tab"
                            role="tab"
                            aria-controls="newyork-tab"
                            aria-selected="true"
                          >
                            {data[summary.answered + 2].question}
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </div>

                {/* <button className="nexttab btn">
                    <img src="assets/img/next.png" alt="next" />
                  </button> */}
              </div>
            </div>
            {/* Tab content */}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="newyork-tab"
                role="tabpanel"
                aria-labelledby="newyork-tab"
              >
                <Questions
                  questions={data}
                  setSummary={setSummary}
                  summary={summary}
                />
              </div>
              <div
                className="tab-pane fade"
                id="mortage-tab"
                role="tabpanel"
                aria-labelledby="mortage-tab"
              >
                <h1>Tab Mortgage Content</h1>
              </div>
              <div
                className="tab-pane fade"
                id="another-tab"
                role="tabpanel"
                aria-labelledby="another-tab"
              >
                <h1>Tab Another content</h1>
              </div>
            </div>
            {/* Tab carousel */}
          </div>
        </section>
        <footer className=" text-lg-start footer_wrap">
          {/* Grid container */}
          <div className="container p-4 ">
            {/*Grid row*/}
            <div className="row footlinkswrap">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-2 mb-4 mb-md-0 my-logo">
                <img className src="assets/img/LOGO.png" alt="logo" />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5> Help &amp; Support</h5>
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
                <h5> Social</h5>
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
                <h5> About us</h5>
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
                <h5> Follow Us</h5>
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
