import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (<div>
    <div>
        <Link to="/">
        <h1>Home</h1>
        </Link> 
        <Link to="/about">
        <h1>About</h1>
        </Link> 
    </div>
    <Outlet/>
  </div>
  )
}

export default Layout