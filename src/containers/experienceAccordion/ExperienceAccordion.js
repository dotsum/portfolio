import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { StatelessAccordion, Panel } from "baseui/accordion";

const ExperienceAccordion = ({ theme, sections }) => {
  const [expanded, setExpanded] = useState(["Work"]); // Start with the first section expanded

  const accordionOverrides = {
    Header: {
      style: () => ({
        backgroundColor: theme.body,
        borderRadius: "5px",
        borderWidth: "1px",
        borderColor: theme.headerColor,
        marginBottom: "3px",
        fontSize: "30px",
        fontFamily: "Google Sans Regular",
        color: theme.text,
        ":hover": {
          color: theme.secondaryText,
        },
      }),
    },
    Content: {
      style: () => ({
        backgroundColor: theme.body,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }),
    },
  };

  return (
    <div className="experience-accord">
      <StatelessAccordion
        expanded={expanded}
        onChange={({ expanded }) => setExpanded(expanded)}
        overrides={accordionOverrides}
      >
        {sections.map((section) => (
          <Panel className="accord-panel" title={section.title} key={section.title}>
            {section.experiences.map((experience, index) => (
              <ExperienceCard
                key={`${section.title}_${index}`}
                index={index}
                totalCards={section.experiences.length}
                experience={experience}
                theme={theme}
              />
            ))}
          </Panel>
        ))}
      </StatelessAccordion>
    </div>
  );
};

export default ExperienceAccordion;
