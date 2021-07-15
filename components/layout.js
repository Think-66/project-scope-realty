import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function AppLayout({ children, noFooter }) {
  return (
    <>
      <Head>
        <title>Reality</title>
      </Head>
      {!noFooter && <Header />}
      <main>{children}</main>
      {!noFooter && <Footer />}
    </>
  );
}
