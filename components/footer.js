import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./footer.module.css";
import { dependencies } from "../package.json";

export default function Footer() {
  const [session, loading] = useSession();
  return (
    <>
      {session && (
        <>
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
          <div id="preloader" />
        </>
      )}
    </>
  );
}
