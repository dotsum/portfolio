import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import ExperienceImg from "./ExperienceImg";
import { motion } from "framer-motion";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
                {experience.title}
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
        <motion.div
          className="experience-content-accordion"
          initial={{ x: -100, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 1 }}
        >
          <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        </motion.div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
