import { Provider } from "next-auth/client";
import Head from 'next/head'

import "../public/css/vendors/bootstrap.min.css";
import "../public/css/vendors/calender-style.css";
import "../public/css/vendors/calender-theme.css";
import "../public/css/main.css";
import "../public/css/responsive.css";
import "../public/css/core.css";
import "../public/css/custom.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Head>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/calendar.min.js"></script>
        {/* <script src="/js/main.js"></script> */}
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/app.js"></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
