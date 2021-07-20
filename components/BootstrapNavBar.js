import Link from "next/link";
import { Container, Navbar, Nav, Popover, OverlayTrigger } from 'react-bootstrap';

export default function BootstrapNavBar() {

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
    <Navbar expand="lg" variant="dark" style={{ marginRight: 25, border: 0 }}>
      <Container>
        <Navbar.Brand href="/"><img src="/images/logo.svg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 0 }} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/agent">
              <div className=" ctl-nav-lnk-txt">
                Our Team{" "}
                <span className="sr-only">(current)</span>
              </div>
            </Nav.Link>
            <Nav.Link href="">
              <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover}>
                <div className="ctl-nav-lnk-txt">About Us</div>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link href="/webflow-scope-reality?listingType=listingRent">
              <div className=" ctl-nav-lnk-txt">
                Rent
              </div>
            </Nav.Link>
            <Nav.Link href="/buy">
              <div className=" ctl-nav-lnk-txt">
                Buy
              </div>
            </Nav.Link>
            <Nav.Link href="/webflow-scope-reality?listingType=listingSale">
              <div className=" ctl-nav-lnk-txt">
                Sell
              </div>
            </Nav.Link>
            <Nav.Link href="/webflow-scope-reality?listingType=listingSale">
              <div className="clt-sig-lnk">
                SIGN IN
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}