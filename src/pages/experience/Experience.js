import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import ExperienceImg from "./ExperienceImg";

const Experience = ({ theme, onToggle }) => (
  <div className="experience-main">
    <Header theme={theme} />
    <div className="basic-experience">
      <div className="experience-heading-div">
        <div className="experience-heading-img-div">
          <ExperienceImg theme={theme} />
        </div>
        <div className="experience-heading-text-div">
          <h1 className="experience-heading-text" style={{ color: theme.text }}>
            {experience.title}
          </h1>
          <h3
            className="experience-heading-sub-text"
            style={{ color: theme.text }}
          >
            {experience["subtitle"]}
          </h3>
          <p
            className="experience-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {experience["description"]}
          </p>
        </div>
      </div>
    </div>
    <div className="experience-content-accordion">
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
    </div>
    <Footer theme={theme} onToggle={onToggle} />
    <TopButton theme={theme} />
  </div>
);

export default Experience;
