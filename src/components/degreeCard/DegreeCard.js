import React from "react";
import Button from "../../components/button/Button";
import "./DegreeCard.css";

const DegreeCard = ({ degree, theme }) => {
  const {
    logo_path,
    alt_name,
    title,
    subtitle,
    duration,
    descriptions,
    website_link,
  } = degree;

  return (
    <div className="degree-card">
      {logo_path && (
        <div className="card-img">
          <img
            className="degree-image"
            src={require(`../../assests/images/${logo_path}`)}
            alt={alt_name}
          />
        </div>
      )}
      <div
        className={`card-body ${logo_path ? "with-logo" : ""}`}
        style={{ backgroundColor: theme.cardBackground }}
      >
        <div
          className="body-header"
          style={{
            backgroundColor: theme.headerColor,
            borderColor: theme.text,
          }}
        >
          <div className="body-header-title">
            <h2 className="card-title" style={{ color: theme.text }}>
              {title}
            </h2>
            <h3
              className="card-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {subtitle}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration" style={{ color: theme.text }}>
              {duration}
            </h3>
          </div>
        </div>
        <div className="body-content">
          {descriptions.map((sentence, id) => (
            <p key={id} className="content-list" style={{ color: theme.dark }}>
              {sentence}
            </p>
          ))}
          <Button
            className="visit-btn"
            text="Visit Website"
            newTab={true}
            href={website_link}
            theme={theme}
            style={{ borderRadius: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
