import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="educations-main" id="educations">
        <div className="educations-header-div">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </div>
        <div className="educations-body-div">
          <div className="educations-cards">
            {degrees.degrees.map((degree, index) => {
              return <DegreeCard key={`degree_${index}`} degree={degree} theme={theme} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Educations;
