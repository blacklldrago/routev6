import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {

  return (
    <div>
      <div className="navbar text-center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="*">Nothing</Link>
          </li>
          <li>
            <Link to="user/1">UserById</Link>
          </li>
        </ul>
        <h1>It doesn't shows you  page "about" because the role is admin. </h1>
        <h1>You can change it's role by changing role in code. </h1>
        
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
