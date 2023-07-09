import React from "react";
import { Formik } from "formik";

import classes from "./style/Signup.module.css";

const Signin = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div className={classes.form_container}>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {( values, errors, handleChange, handleSubmit, isSubmitting ) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter you email"
                    className={classes.input}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="Enter you password"
                    className={classes.input}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.btn}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signin;
