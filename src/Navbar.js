import React from "react";
import TempConLogo from "./logotempcon.png";

export default function Navbar() {
  return (
    <div className="Navbar" style={navbarStyle}>
      <img src={TempConLogo} alt="Logo" style={logoStyle} />
      <div style={titleStyle}>Temperature Converter</div>
      <div style={creatorStyle}>
        Created by: Mayank Arora{" "}
        <span role="img" aria-label="Emoji">
          🌟
        </span>
      </div>
    </div>
  );
}

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#212529",
  padding: "7px",
  height: "70px",
};

const logoStyle = {
  marginRight: "10px",
  height: "70px",
};

const titleStyle = {
  fontWeight: "bold",
  fontSize: "42px",
  color: "#f1f1f1",
  fontFamily: "'Martian Mono', monospace",
};

const creatorStyle = {
  fontFamily: "'Rajdhani', sans-serif",
  marginLeft: "auto",
  fontSize: "26px",
  color: "#f1f1f1",
  marginRight: "10px",
};
