import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./style/Error.module.css";
import MainNav from "../../components/navigation/MainNav.js";

const Error = () => {
  return (
    <>
      <MainNav />
      <main>
        <div className={classes.error_container}>
          <h1>Error (404)</h1>
          <p>
            Page was not found! Click{" "}
            <span className={classes.span}>
              <NavLink to="/">here</NavLink>
            </span>{" "}
            to return to the homepage.
          </p>
        </div>
      </main>
    </>
  );
};

export default Error;
