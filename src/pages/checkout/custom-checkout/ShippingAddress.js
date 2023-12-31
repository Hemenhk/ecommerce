import React from "react";
import { Formik } from "formik";

import classes from "./style/ShippingAddress.module.css";

const ShippingAddress = ({ setShipping }) => {
  const validate = (values) => {
    const { name, email, address } = values;
    const errors = {};
    if (!email) {
      errors.email = "Required";
    }
    if (!name) {
      errors.name = "Required";
    }
    if (!address) {
      errors.address = "Required";
    }
  };

  const initialValues = {
    email: "",
    name: "",
    address: "",
  };
  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          console.log("values", values);
          setShipping(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, address } = errors;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  className={name ? "error" : ""}
                />
              </div>{" "}
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className={email ? "error" : ""}
                />
              </div>{" "}
              <div>
                <input
                  type="address"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  className={address ? "error" : ""}
                />
              </div>
              <div className={classes.submit_btn}>
                <button type="submit" className={classes.btn}>
                  CONTINUE
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ShippingAddress;
