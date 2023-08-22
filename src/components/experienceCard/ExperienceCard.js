import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const orientation = this.props.orientation
      ? this.props.orientation
      : "horizontal";

    return (
      <div
        className={`experience-card ${orientation}`}
        style={{ 
          marginTop: index === 0 ? 20 : 10,
          backgroundColor: theme.cardBackground ? theme.cardBackground: theme.secondaryText ? theme.cardBackground ? theme.cardBackground: theme.secondaryText: theme.secondaryText,
        }}
      >
        <div className="position-description">
          <div 
            className={`position-box`}
            style={{
              backgroundColor: theme.body,
              boxShadow: `-10px 0px ${theme.body}`
            }}
          >
            <div 
              className={`position-name`}
              style={{ color: theme.cardBackground ? theme.cardBackground: theme.secondaryText }}
            >
                {experience["title"]}
            </div>
          </div>
          <div className="location-duration" style={{ color: theme.body }}>
            <div className="text-wrapper">{experience["location"]}</div>
            <div className="text-wrapper">{experience["duration"]}</div>
          </div>
          <img
            className="company-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
          <div 
            className="company-name"
            style={{ color: theme.body }}
          >
            {experience["company"]}
          </div>
          <p 
            className="company-description"
            style={{ color: theme.body }}
          >
            {experience["description"]}
          </p>
        </div>
        <div 
          className="responsibilities"
          style={{
            backgroundColor: theme.body,
            borderColor: theme.text,
          }}
        >
          <ul>
            {experience["responsibilities"].map((responsibility, index) => {
              return (
              <li 
                  key={`responsibility_${index}`}
                  className="responsibility"
                  style={{ 
                    color: theme.cardBackground ? theme.cardBackground: theme.secondaryText,
                   }}
              >
                <span className="bullet" style={{ backgroundColor: theme.text }}></span>
                <span>{responsibility}</span>
              </li>);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
