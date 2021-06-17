import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./footer.module.css";
import { dependencies } from "../package.json";

export default function Footer() {
  const [session, loading] = useSession();
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <h3 className="ft-head">Headquarters</h3>
            <ul className="ft-list">
              <li>
                68 West 39th Street, 2nd Fl <br />
                New York, NY 10018
              </li>
              <li>(212) 408-1620</li>
              <li>(347) 619-6229 fax</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <h3 className="ft-head">COmpany</h3>
            <ul className="ft-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <h3 className="ft-head">More</h3>
            <ul className="ft-list">
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">ASPCA</a>
              </li>
              <li>
                <a href="#">St. Jude Children's Research Hospital</a>
              </li>
              <li>
                <a href="#">Covenant House New York</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-stripe">
        <p>© Copyright 2021</p>
      </div>
    </footer>
  );
}
