import Head from "next/head";

export default function VideoPageTwo() {
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
        <link
          rel="stylesheet"
          href="http://malihu.github.io/custom-scrollbar/3.0.0/jquery.mCustomScrollbar.min.css"
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
        <section className="middle-video-section">
          <div
            className="content-wrapper d-flex flex-column"
            data-aos="fade-up"
          >
            <div className="video-section">
              <figure>
                <img
                  className="img-fluid"
                  src="assets/img/happy-father-with-daughter-standing-near-open-balcony-smiling.png"
                />
              </figure>
            </div>
            <div className="video-content">
              <div className="container-fluid">
                <div className="layout-tabs">
                  <div className="search-bar">
                    <img id="toggle-search" src="assets/img/search_icon.png" />
                    <input
                      style={{ display: "none" }}
                      id="searchBar"
                      name="search"
                      type="search"
                      placeholder
                    />
                  </div>
                  <div className="nav-tabs-wrapper">
                    <ul
                      className="nav nav-tabs"
                      id="tabs-title-region-nav-tabs"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          role="tab"
                          href="#block-simple-text-1"
                          aria-selected="false"
                          aria-controls="block-simple-text-1"
                          id="block-simple-text-1-tab"
                        >
                          Overviews
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          href="#block-simple-text-2"
                          aria-selected="false"
                          aria-controls="block-simple-text-2"
                          id="block-simple-text-2-tab"
                        >
                          Q&amp;A
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          href="#block-simple-text-3"
                          aria-selected="false"
                          aria-controls="block-simple-text-3"
                          id="block-simple-text-3-tab"
                        >
                          Notes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          href="#block-simple-text-4"
                          aria-selected="false"
                          aria-controls="block-simple-text-4"
                          id="block-simple-text-4-tab"
                        >
                          Announcements
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="tab-content">
                        <div
                          id="block-simple-text-1"
                          className="tab-pane active block block-layout-builder block-inline-blockqfcc-blocktype-simple-text"
                          role="tabpanel"
                          aria-labelledby="block-simple-text-1-tab"
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
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
                        </div>
                        <div
                          id="block-simple-text-2"
                          className="tab-pane block block-layout-builder block-inline-blockqfcc-blocktype-simple-text"
                          role="tabpanel"
                          aria-labelledby="block-simple-text-2-tab"
                        >
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                          </p>
                        </div>
                        <div
                          id="block-simple-text-3"
                          className="tab-pane block block-layout-builder block-inline-blockqfcc-blocktype-simple-text"
                          role="tabpanel"
                          aria-labelledby="block-simple-text-3-tab"
                        >
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in section 1.10.32.
                          </p>
                          <p>
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus
                            Bonorum et Malorum" by Cicero are also reproduced in
                            their exact original form, accompanied by English
                            versions from the 1914 translation by H. Rackham.
                          </p>
                        </div>
                        <div
                          id="block-simple-text-4"
                          className="tab-pane block block-layout-builder block-inline-blockqfcc-blocktype-simple-text"
                          role="tabpanel"
                          aria-labelledby="block-simple-text-4-tab"
                        >
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true
                            generator on the Internet. It uses a dictionary of
                            over 200 Latin words, combined with a handful of
                            model sentence structures, to generate Lorem Ipsum
                            which looks reasonable. The generated Lorem Ipsum is
                            therefore always free from repetition, injected
                            humour, or non-characteristic words etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-accordion" data-aos="fade-up">
            <div className="video-accordion-list">
              <div className="toast fade show" data-autohide="false">
                <div className="toast-header">
                  <strong className="mr-auto">Course Content</strong>
                  <button
                    type="button"
                    className="ml-2 mb-1 close"
                    data-dismiss="toast"
                  >
                    ×
                  </button>
                </div>
                <div
                  className="toast-body mCustomScrollbar"
                  data-mcs-theme="dark"
                >
                  <ul className="list-group">
                    <li className="list-group-item checkbox-container active">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check1"
                          name="option1"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>1. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check2"
                          name="option2"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>2. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check3"
                          name="option3"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>3. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check4"
                          name="option4"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>4. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check5"
                          name="option5"
                          defaultValue
                        />
                        <span className="checkmark" />
                        <p>5. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check6"
                          name="option6"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>6. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check7"
                          name="option7"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>7. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                      <div className="resource-folder">
                        <button className="btn btn-default btn-resource">
                          <img
                            src="assets/img/file_icon.png"
                            className="img-fluid"
                          />{" "}
                          Resource
                        </button>
                      </div>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check8"
                          name="option8"
                          defaultValue
                        />
                        <span className="checkmark" />
                        <p>8. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check9"
                          name="option9"
                          defaultValue
                        />
                        <span className="checkmark" />
                        <p>9. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check10"
                          name="option10"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>10. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                      <div className="resource-folder">
                        <button className="btn btn-default btn-resource">
                          <img
                            src="assets/img/file_icon.png"
                            className="img-fluid"
                          />{" "}
                          Resource
                        </button>
                      </div>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check11"
                          name="option11"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>11. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check12"
                          name="option12"
                          defaultValue
                        />
                        <span className="checkmark" />
                        <p>12. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check13"
                          name="option13"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>13. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check14"
                          name="option14"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>14. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check15"
                          name="option15"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>15. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check16"
                          name="option16"
                          defaultValue
                        />
                        <span className="checkmark" />
                        <p>16. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check17"
                          name="option17"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>17. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                      <div className="resource-folder">
                        <button className="btn btn-default btn-resource">
                          <img
                            src="assets/img/file_icon.png"
                            className="img-fluid"
                          />{" "}
                          Resource
                        </button>
                      </div>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check15"
                          name="option15"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>18. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check16"
                          name="option16"
                          defaultValue
                        />
                        <span className="checkmark" />
                        <p>19. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                    <li className="list-group-item checkbox-container">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check20"
                          name="option20"
                          defaultValue
                          defaultChecked
                        />
                        <span className="checkmark" />
                        <p>20. Lorem Ipsum</p>
                        <span className="video-time">6 mins</span>
                      </label>
                    </li>
                  </ul>
                </div>
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
