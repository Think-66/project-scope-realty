import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";

import styles from "./header.module.css";

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
                  <div className="profile-wrape">
                    <div className="profile-img">
                      <img src="/images/profile.png" alt="profile" />
                    </div>
                    {session && (
                      <h4 className="profile-name">
                        {session.user.email || session.user.name}
                      </h4>
                    )}
                    <span className="drop-down-arrow">
                      <img src="/images/drop-down-arrow.svg" alt="drop-down" />
                    </span>
                  </div>
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
