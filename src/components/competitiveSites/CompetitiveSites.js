import React from "react";
import "./CompetitiveSites.css";
import { StatefulTooltip } from "baseui/tooltip";

const CompetitiveSites = ({ logos }) => (
  <div className="competitive-sites-main-div">
    <ul className="dev-icons">
      {logos.map(logo => (
        <StatefulTooltip
          key={logo.siteName}
          content={() => <p>{logo.siteName}</p>}
          returnFocus
          autoFocus
        >
          <li className="competitive-sites-inline" name={logo.siteName}>
            <a
              href={logo.profileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="iconify"
                data-icon={logo.iconifyClassname}
                style={logo.style}
                data-inline="false"
              ></span>
            </a>
          </li>
        </StatefulTooltip>
      ))}
    </ul>
  </div>
);

export default CompetitiveSites;
