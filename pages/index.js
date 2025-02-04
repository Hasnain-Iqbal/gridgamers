// import Hubs from "../components/Hubs";
// import Gamers from "../components/Gamers";
import Home from "../components/Home";
// import About from "../components/About";
// import Layout from "../components/Layout/Layout";
// import SeoHead from "../components/SeoHead";

export default function Index() {
  return (
    <Home />
  );
}
export async function getStaticProps() {
 
  // Data fetching
  return {
   
      // data added inside props will be
    // received by page component as `props`
    props: {},
  };
}