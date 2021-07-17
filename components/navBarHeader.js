import Link from "next/link";
import { Popover, OverlayTrigger } from 'react-bootstrap';

export default function NavBarHeader({
  darkNav,
}) {

  const popover = (
    <Popover id="nav-bar-about-us">
      <Popover.Content>
        <div className="container ctl-nav-lnk-txt cursor-pointer px-4">
          <div className="row my-2 text-dark">
            <Link href="/reviews">
              <div className="text-dark font-weight-bold">Reviews</div>
            </Link>
          </div>
          <div className="row my-2">
            <Link href="/charitable-endeavors">
              <div className="text-dark font-weight-bold">Charitable Endeavors</div>
            </Link>
          </div>
          <div className="row my-2">
            <Link href="/">
              <div className="text-dark font-weight-bold">Press</div>
            </Link>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <div
      className={`cmp-nav-shw-blo ${darkNav ? "cmp-nav-cus-bck" : ""}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="col-lg-2 col-md-2 col-sm-12">
            <Link href="/" passHref>
              <a className="navbar-brand col-xs-4" href="/">
                <img src="/images/logo.svg" />{" "}
              </a>
            </Link>
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
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12" container='body' >
            <div
              className="collapse navbar-collapse login_navbar "
              id="navbarTogglerDemo03"
            >
              <ul className="navbar-nav  ml-auto ">
                <li className="nav-item">
                  <Link href="/agent" passHref>
                    <a className=" ctl-nav-lnk-txt" href="#">
                      Our Team{" "}
                      <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item  cursor-pointer">
                  <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover}>
                    <div className="ctl-nav-lnk-txt">About Us</div>
                  </OverlayTrigger>
                </li>
                <li className="nav-item">
                  <Link href="/rent" passHref>
                    <a className="ctl-nav-lnk-txt" href="#">
                      Rent
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/buy" passHref>
                    <a className="ctl-nav-lnk-txt" href="#">
                      Buy
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/sell" passHref>
                    <a className="ctl-nav-lnk-txt" href="#">
                      Sell
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12">
            <Link href="/login" passHref>
              <a className="clt-sig-lnk" href="#">
                SIGN IN
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
