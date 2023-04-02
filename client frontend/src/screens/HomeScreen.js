import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import About from "../components/homeComponents/About";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import HeroSection from "../components/homeComponents/HeroSection";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <HeroSection />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <About />
      <Footer />
    </div>
  );
};

export default HomeScreen;
