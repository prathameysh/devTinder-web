import Navbar from './Navbar'
import React from 'react'
import { Outlet } from 'react-router'


const Body = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
    
  )
}

export default Body