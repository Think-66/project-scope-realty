import Link from "next/link";
import Head from "next/head";
import NavBarHeader from './navBarHeader'
import Footer from '../components/footer'

export default function ClientLayout({
  children,
  noHeader = false,
  noFooter,
  title,
  darkNav,
}) {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {!noHeader && (
        <div className="b-cen d-bac">
          <div className="cen-i-top">
            <NavBarHeader darkNav={darkNav} />
          </div>
          {title && (
            <div className="cen-i-cen">
              <div className="container">
                <div className="cmp-lan-pad-box">
                  <div className="cmp-lad-top-pad">
                    <div className="row">
                      <div className="col-sm-12 col-md-8 col-lg-8 m-auto">
                        <div className="cmp-lad-lis-hdr">
                          <div className="ctl-web-lan-top">
                            <h3>{title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="clearfix" />
        </div>
      )}

      <main>{children}</main>
      <Footer />
    </>
  );
}
