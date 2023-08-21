import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { StatelessAccordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  state = {
    expanded: ["Work"], // Start with the first section expanded
  };

  render() {
    const theme = this.props.theme;
    return (
        <div className="experience-accord">
          <StatelessAccordion
            expanded={this.state.expanded}
            onChange={({ expanded }) => this.setState({ expanded })}
            overrides={{
              Header: {
                style: () => ({
                  backgroundColor: `${theme.body}`,
                  borderRadius: `5px`,
                  borderWidth: `1px`,
                  borderColor: `${theme.headerColor}`,
                  marginBottom: `3px`,
                  fontFamily: "Google Sans Regular",
                  color: `${theme.text}`,
                  ":hover": {
                    color: `${theme.secondaryText}`,
                  },
                }),
              },
              Content: {
                style: () => ({
                  backgroundColor: `${theme.body}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }),
              },
            }}
          >
            {this.props.sections.map((section) => {
              return (
                <Panel
                  className="accord-panel"
                  title={section["title"]}
                  key={section["title"]}
                >
                  {section["experiences"].map((experience, index) => {
                    return (
                      <ExperienceCard
                        key={`${section["title"]}_${index}`}
                        index={index} 
                        totalCards={section["experiences"].length}
                        experience={experience}
                        theme={theme}
                      />
                    );
                  })}
                </Panel>
              );
            })}
          </StatelessAccordion>
        </div>
    );
  }
}

export default ExperienceAccordion;
