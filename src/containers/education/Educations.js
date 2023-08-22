import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";

const Educations = ({ theme }) => {
  return (
    <div className="educations-main" id="educations">
      <div className="educations-header-div">
        <h1 className="educations-header" style={{ color: theme.text }}>
          Degrees Received
        </h1>
      </div>
      <div className="educations-body-div">
        <div className="educations-cards">
          {degrees.degrees.map((degree, index) => (
            <DegreeCard key={`degree_${index}`} degree={degree} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
