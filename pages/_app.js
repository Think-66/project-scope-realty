import { Provider } from "next-auth/client";

import "../public/css/vendors/bootstrap.min.css";
import "../public/css/main.css";
import "../public/css/responsive.css";
import "../public/css/core.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </Provider>
  );
}
