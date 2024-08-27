import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1D1544",
    padding: "14px 0px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    borderTop: "solid 1px #3C3172",
    position: "fixed",
    bottom: "6vh",
    width: "80%",
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",
  };

  const linkStyle = {
    color: "#838383",
    margin: "0 15px",
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: "300",
  };

  return (
    <div style={footerStyle}>
      <a href="#" style={linkStyle}>
        Privacy & Cookies
      </a>
      <a href="#" style={linkStyle}>
        Legal
      </a>
      <a href="#" style={linkStyle}>
        Help
      </a>
      <a href="#" style={linkStyle}>
        Feedback & Reports
      </a>
      <a href="/pandai-chat" style={{ ...linkStyle, fontWeight: "500" }}>
        Pandai.AI
      </a>
    </div>
  );
};

export default Footer;
