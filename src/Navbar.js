import React from "react";
import TempConLogo from "./logotempcon.png";

export default function Navbar() {
  return (
    <div className="Navbar" style={navbarStyle}>
      <img src={TempConLogo} alt="Logo" style={logoStyle} />
      <div style = {titleStyle}>Temperature Converter</div>
      <div style = {creatorStyle}>Created by: Mayank Arora</div>
    </div>
  );
}

const navbarStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#212529",
    padding: "15px",
    height: "70px",

  };
  
  const logoStyle = {
    marginRight: "10px",
    height: "70px"
  };
  
  const titleStyle = {
    fontWeight: "bold",
    fontSize: "40px",
    fontFamily: "Mokoto",
    color: "#f1f1f1"
  };
  
  const creatorStyle = {
    fontFamily: "Sigher",
    marginLeft: "auto",
    fontSize: "35px",
    color: "#f1f1f1"
  };