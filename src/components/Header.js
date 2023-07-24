import React from "react";

import { Logo } from "./Logo";
export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
