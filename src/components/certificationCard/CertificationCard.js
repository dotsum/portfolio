import React from "react";
import "./CertificationCard.css";

const CertificationCard = ({ certificate, theme }) => (
  <div className="cert-card">
    <div className="content">
      <a
        href={certificate.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="content-overlay"></div>
        <div
          className="cert-header"
          style={{ backgroundColor: certificate.color_code }}
        >
          <img
            className="logo_img"
            src={require(`../../assests/images/${certificate.logo_path}`)}
            alt={certificate.alt_name}
          />
        </div>
        <div className="content-details fadeIn-top">
          <h3 className="content-title" style={{ color: theme.text }}>
            Certificate
          </h3>
        </div>
      </a>
    </div>
    <div className="cert-body" style={{ borderColor: theme.text }}>
      <h2 className="cert-body-title" style={{ color: theme.text }}>
        {certificate.title}
      </h2>
      <h3 className="cert-body-subtitle" style={{ color: theme.secondaryText }}>
        {certificate.subtitle}
      </h3>
    </div>
  </div>
);

export default CertificationCard;
