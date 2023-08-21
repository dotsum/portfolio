import React, { Component } from "react";
import Button from "../../components/button/Button";
import "./DegreeCard.css";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;

    return (
      <div className="degree-card">
        {degree.logo_path && (
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assests/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        )}
        <div
          className="card-body"
          style={{
            width: degree.logo_path ? "90%" : "100%",
            backgroundColor: theme.cardBackground,
          }}
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
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => {
              return (
                <p key={index} className="content-list" style={{ color: theme.dark }}>
                  {sentence}
                </p>
              );
            })}
            <Button
              className="visit-btn"
              text="Visit Website"
              newTab={true}
              href={degree.website_link}
              theme={theme}
              style={{ borderRadius: '15px', }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DegreeCard;
