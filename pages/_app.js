import "../styles/tailwind.css";
import "../styles/slick.css";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SeoHead title="Grid Gamers" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
