import React from "react";
import Navbar from "./components/Home/Navbar";
import Header from "./components/Home/Header";
import Features from "./components/Home/Features";
import Privacy from "./components/Home/Privacy";
import Performance from "./components/Home/Performance";
import Reviews from "./components/Home/Reviews";
import Sponsors from "./components/Home/Sponsors";
import Pricing from "./components/Home/Pricing";
import Footer from "./components/Home/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Privacy />
      <Performance />
      <Reviews />
      <Sponsors />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
