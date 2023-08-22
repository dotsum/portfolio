import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ experience, index, totalCards, theme, orientation = "horizontal" }) => {
  const cardBackgroundColor = theme.cardBackground || theme.secondaryText;
  
  return (
    <div
      className={`experience-card ${orientation}`}
      style={{ 
        marginTop: index === 0 ? 20 : 10,
        backgroundColor: cardBackgroundColor
      }}
    >
      <div className="position-description">
        <div 
          className="position-box"
          style={{
            backgroundColor: theme.body,
            boxShadow: `-10px 0px ${theme.body}`
          }}
        >
          <div 
            className="position-name"
            style={{ color: cardBackgroundColor }}
          >
            {experience.title}
          </div>
        </div>
        <div className="location-duration" style={{ color: theme.body }}>
          <div className="text-wrapper">{experience.location}</div>
          <div className="text-wrapper">{experience.duration}</div>
        </div>
        <img
          className="company-logo"
          src={require(`../../assests/images/${experience.logo_path}`)}
          alt=""
        />
        <div 
          className="company-name"
          style={{ color: theme.body }}
        >
          {experience.company}
        </div>
        <p 
          className="company-description"
          style={{ color: theme.body }}
        >
          {experience.description}
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
          {experience.responsibilities.map((responsibility, index) => (
            <li 
              key={`responsibility_${index}`}
              className="responsibility"
              style={{ color: cardBackgroundColor }}
            >
              <span className="bullet" style={{ backgroundColor: theme.text }}></span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
