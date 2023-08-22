import React from "react";
import "./Footer.css";
import { greeting } from "../../portfolio.js";

const Footer = ({ theme }) => (
  <div className="footer-div">
    <p className="footer-text" style={{ color: theme.secondaryText }}>
      Made with <span role="img" aria-label="heart">❤️</span> by {greeting.title}
    </p>
  </div>
);

export default Footer;
