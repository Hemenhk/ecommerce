import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./styles/MainSection.module.css";
import image from "../../assets/images/studio-bag.png";

const MainSection = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.main__container}>
      <div className={classes.main_section_middle}>
        <div className={classes.main_image}>
          <img src={image} alt="main-section" />
        </div>
        <div className={classes.main_description}>
          <h2 className={classes.h2}>Designed for fashion. Crafted for sport.</h2>
          <p className={classes.p}>
            We make products that effortlessly transition from day to night.
            From the board room to the fitness studio, and everywhere in
            between, each Nomads piece is thoughtfully created to be the perfect
            balance of form and function.
          </p>
          <button className={classes.main_btn}>STUDIO BAG</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
