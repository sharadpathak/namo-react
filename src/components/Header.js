import React, { useState } from "react";
import { Login, Logout } from "./Login";
import { Logo } from "./Logo";
export const Header = () => {
  const [loginFlag, setLoginFlag] = useState("Login");
  loginEventHandler = () => {
    const btnName = 
    setLoginFlag(false);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-conatiner">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            onClick={() => {
              loginFlag === 'Login' ?  setLoginFlag("Logout") : setLoginFlag("Login");
            }}
          >
            {loginFlag}
          </li>
        </ul>
      </div>
    </div>
  );
};
