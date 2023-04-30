import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet></Outlet>
    </>
  )
}

export default RootLayout