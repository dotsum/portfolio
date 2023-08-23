import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DataEngineerImg from "./DataEngineerImg";

const GetSkillSvg = ({ fileName, theme }) => {
  if (fileName === "DataScienceImg") return <DataScienceImg theme={theme} />;
  if (fileName === "FullStackImg") return <FullStackImg theme={theme} />;
  if (fileName === "CloudInfraImg") return <CloudInfraImg theme={theme} />;
  if (fileName === "DataEngineerImg") return <DataEngineerImg theme={theme} />;
};

const SkillSection = ({ theme }) => (
  <div>
    {skills.data.map((skill, index) => (
      <div key={`skill_${index}`} className="skills-main-div">
        <div className="skills-image-div">
          <GetSkillSvg fileName={skill.fileName} theme={theme} />
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading" style={{ color: theme.text }}>
            {skill.title}
          </h1>
          <SoftwareSkill logos={skill.softwareSkills} />
          <div>
            {skill.skills.map((skillSentence, index) => (
              <p
                key={index}
                className="subTitle skills-text"
                style={{ color: theme.secondaryText }}
              >
                {skillSentence}
              </p>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default SkillSection;
