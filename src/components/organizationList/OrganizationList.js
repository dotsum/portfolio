import React, { Component } from "react";
import "./OrganizationList.css";
import { StatefulTooltip } from "baseui/tooltip";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map(logo => {
            return (
              <StatefulTooltip
                key={logo["login"]}
                content={() => <p>{logo["login"]}</p>}
                returnFocus
                autoFocus
              >
                <li className="organizations-inline" name={logo["login"]}>
                  <img
                    className="organizations-img"
                    src={logo["avatarUrl"]}
                    alt={logo["login"]}
                  />
                </li>
              </StatefulTooltip>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
