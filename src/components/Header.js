import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
export const Header = () => {
  const [loginFlag, setLoginFlag] = useState("Login");
  loginEventHandler = () => {
    const btnName = setLoginFlag(false);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-conatiner">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/contact">Cart</Link>
          </li>
          <li
            onClick={() => {
              loginFlag === "Login"
                ? setLoginFlag("Logout")
                : setLoginFlag("Login");
            }}
          >
            {loginFlag}
          </li>
        </ul>
      </div>
    </div>
  );
};
