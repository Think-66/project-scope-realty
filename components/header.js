import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import styles from "./header.module.css";
import { ToastContainer } from "react-nextjs-toast";
// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession();
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="header-section">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <ToastContainer />
      <div className={styles.signedInStatus}>
        <div
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {session && (
            <nav className="main-nav">
              <div className="nav-wrapper">
                <div className="logo-wrapper">
                  <img src="/images/logo.svg" alt="scope realty" />
                </div>

                <div className="right-part">
                  <Dropdown className="login-dropdown btn-default mt-0">
                    <Dropdown.Toggle
                      menu-align="right"
                      className="login-dropdown"
                      style={{
                        background: "transparent",
                        color: "#403e3e !important",
                        fontWeight: 300,
                        border: "none",
                      }}
                    >
                      <div className="profile-wrape">
                        <div className="profile-img">
                          <img
                            src={session.user.image || "/images/profile.svg"}
                            alt="profile"
                          />
                        </div>
                        {session && (
                          <h4 className="profile-name">
                            {session.user.email || session.user.name}
                          </h4>
                        )}
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link href="/dashboard" passHref>
                        <Dropdown.Item>
                          <img src="/images/dashboard.png" title="dashboard" />{" "}
                          Dashboard
                        </Dropdown.Item>
                      </Link>
                      <Link href="/profile/profile" passHref>
                        <Dropdown.Item href="/profile">
                          <img src="/images/profile.png" title="dashboard" />{" "}
                          Profile
                        </Dropdown.Item>
                      </Link>
                      <Link href="/profile/billing" passHref>
                        <Dropdown.Item>
                          <img src="/images/billing.png" title="billing" />{" "}
                          Billing
                        </Dropdown.Item>
                      </Link>
                      <Link href="/switch-states" passHref>
                        <Dropdown.Item>
                          <img
                            src="/images/switch_states.png"
                            title="dashboard"
                          />{" "}
                          Switch States
                        </Dropdown.Item>
                      </Link>

                      <Dropdown.Divider />

                      <Link href={`/api/auth/signout`} passHref>
                        <Dropdown.Item href="/billing">
                          <img src="/images/logout.png" title="dashboard" />{" "}
                          Logout
                        </Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>

                  <div className="menu-toggler">
                    <img src="/images/menu.svg" alt="menu" />
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
