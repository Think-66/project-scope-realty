import { signIn } from "next-auth/client";

export default function AccessDenied() {
  return (
    <section className="single-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h2 className="ctl-pro-sig text-center ctl-hdr-mar-bot">
              Access denied
            </h2>
            <img
              style={{ textAlign: "center", display: "block" }}
              src="/images/404.png"
              className="center"
            />
            <h2 style={{ textAlign: "center" }}>Opps!</h2>
            <p style={{ textAlign: "center" }}>
              Please logged in to access this page
            </p>
            <a
              className="btn btn-primary"
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              You must be signed in to view this page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
