import React from 'react'

import classes from "./style/Footer.module.css"

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <div className={classes.footer}>
        {year} © Ecomm Store
    </div>
  )
}

export default Footer