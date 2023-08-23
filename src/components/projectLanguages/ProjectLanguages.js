import React, { Component } from "react";
import "./ProjectLanguages.css";
import { StatefulTooltip } from "baseui/tooltip";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {this.props.logos.map(logo => {
              return (
                <StatefulTooltip
                  key={logo.name}
                  content={() => <p>{logo.name}</p>}
                  returnFocus
                  autoFocus
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    ></span>
                  </li>
                </StatefulTooltip>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
