import Layout from "@/components/layout/layout";

import "bootstrap-icons/font/bootstrap-icons.scss";
import "@/styles/bs.scss";
import "@/styles/app.scss";
import "@/styles/sidebar.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
