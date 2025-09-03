import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
