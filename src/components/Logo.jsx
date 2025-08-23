import React from "react";
import logo from "../assets/logo.svg";

function Logo() {
  return (
    <div className="h-[60px] w-[82px] mx-4 md:mx-6">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
