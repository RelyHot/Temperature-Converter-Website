import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#212529",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  };

  return (
    <div className="content-container" style={contentContainerStyle}>
      <div className="footer" style={footerStyle}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Footer;
