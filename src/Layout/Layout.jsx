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
        {/* <div>
          {user ? (
            
            <button onClick={handleLogout}>Sign Out</button>
          ) : (
            <button onClick={handleLogin}>Sign In</button>
          )}
        </div> */}
        
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
