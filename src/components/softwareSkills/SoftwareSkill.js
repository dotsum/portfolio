import React from "react";
import "./SoftwareSkill.css";
import { StatefulTooltip } from "baseui/tooltip";

const SoftwareSkill = ({ logos }) => (
  <div>
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {logos.map(logo => (
          <StatefulTooltip
            key={logo.skillName}
            content={() => <p>{logo.skillName}</p>}
            returnFocus
            autoFocus
          >
            <li className="software-skill-inline" name={logo.skillName}>
              {logo.fontAwesomeClassname ? (
                <span
                  className="iconify"
                  data-icon={logo.fontAwesomeClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              ) : (
                logo.imageSrc && (
                  <img
                    className="skill-image"
                    style={logo.style}
                    src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                    alt={logo.skillName}
                  />
                )
              )}
            </li>
          </StatefulTooltip>
        ))}
      </ul>
    </div>
  </div>
);

export default SoftwareSkill;
