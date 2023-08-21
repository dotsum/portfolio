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
        style={{ marginTop: index === 0 ? 20 : 10 }}
      >
        <div className="position-description">
          <div className={`position-box`}>
            <div className={`position-name`}>{experience["title"]}</div>
          </div>
          <div className="location-duration">
            <div className="text-wrapper">{experience["location"]}</div>
            <div className="text-wrapper">{experience["duration"]}</div>
          </div>
          <img
            className="company-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
          <div className="company-name">{experience["company"]}</div>
          <p className="company-description">{experience["description"]}</p>
        </div>
        <div className="responsibilities">
          <ul>
            {experience["responsibilities"].map((responsibility, index) => {
              return <li key={`responsibility_${index}`} className="responsibility">{responsibility}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
