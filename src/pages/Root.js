import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/navigation/MainNav.js'

import css from "./style/Root.module.css"
import Footer from '../components/footer/Footer.js'
import Error from './error/Error.js'
const Root = () => {
  return (
    <>
    <MainNav />
    <main className={css.root}>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Root