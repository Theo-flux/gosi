import React from "react";
import Helmet from "react-helmet";
import { Discover, Easy, Hero, Publications, Story } from "../components/home";
import { Layout } from "../shared";

function HomeContainer() {
  return (
    <>
      <Helmet>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Zobomap" />
      </Helmet>
      <Layout>
        <Hero />
        <Story />
        <Easy />
        {/* <Publications/> */}
        <Discover />
      </Layout>
    </>
  );
}

export default HomeContainer;
