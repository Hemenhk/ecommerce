import React from "react";
import classes from "./style/Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero_container}>
      <div className={classes.hero_text_container}>
        <h1>Bags reimagined</h1>
        <div className={classes.hero_btn_container}>
          <button className={classes.hero_btn}>Shop now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
