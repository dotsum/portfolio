import React from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";

const Education = ({ theme }) => {
  return (
    <div className="education-main">
      <div className="basic-education">
        <div className="education-heading-div">
          <div className="education-heading-img-div">
            <EducationImg theme={theme} />
          </div>
          <div className="education-heading-text-div">
            <h1
              className="education-heading-text"
              style={{ color: theme.text }}
            >
              Education
            </h1>
            <h3
              className="education-heading-sub-text"
              style={{ color: theme.text }}
            >
              Basic Qualification and Certifcations
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
        </div>
        <Educations theme={theme} />
        {certifications.certifications.length > 0 && (
          <Certifications theme={theme} />
        )}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Education;
