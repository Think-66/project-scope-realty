import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProtectedLayout from "../../components/ProtectedLayout";
import Link from "next/link";
import NavBarHeader from '../../components/navBarHeader';
import BootstrapNavBar from '../../components/BootstrapNavBar'
import Footer from '../../components/footer'
import { getListingsDataa, getListingsRealtym } from '../../services/listingApiService'

export default function Confirm({ listingType }) {
  const router = useRouter();

  return (
    <div>
      <div>
        <header>
          <div className="b-top" />
        </header>
        <section>
          <div className="b-cen c-bac">
            <div className="cen-i-top">
              <BootstrapNavBar />
            </div>
            <div className="cen-i-cen">
            </div>
            <div className="clearfix" />
          </div>
          <div className="container py-5 my-5">
            <div className="row justify-content-center my-4">
              <div className="col-auto">
                <h2>We Will Be In Touch Shortly!</h2>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
