import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Layout from "./appLayout";
import AccessDenied from "./access-denied";
import { ToastContainer } from "react-nextjs-toast";

export default function ProtectedLayout({ children }) {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
