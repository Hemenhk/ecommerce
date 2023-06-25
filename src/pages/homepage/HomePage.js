import React from "react";
import Hero from "../../components/hero/Hero.js";

import classes from "./HomePage.module.css";
import MainSection from "../../components/mainSection/MainSection.js";
import FeaturedCollection from "../../components/featuredCollection/FeaturedCollection.js";

const HomePage = () => {
  return (
    <div className={classes.home_container}>
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </div>
  );
};

export default HomePage;
