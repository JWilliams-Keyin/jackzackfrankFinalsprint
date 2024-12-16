import React from "react";
import {
  Header,
  HomepageBanner,
  About,
  NewsletterEmail,
  Footer,
} from "../Components/index";

function Homepage() {
  return (
    <>
      <Header />
      <HomepageBanner />
      <About />
      <NewsletterEmail />
      <Footer />
    </>
  );
}

export default Homepage;
