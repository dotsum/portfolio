import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = ({ theme, onToggle }) => (
  <div className="projects-main">
    <Header theme={theme} />
    <div className="basic-projects">
      <div className="projects-heading-div">
        <div className="projects-heading-img-div">
          <ProjectsImg theme={theme} />
        </div>
        <div className="projects-heading-text-div">
          <h1 className="projects-heading-text" style={{ color: theme.text }}>
            {projectsHeader.title}
          </h1>
          <p
            className="projects-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {projectsHeader["description"]}
          </p>
        </div>
      </div>
    </div>
    <div className="repo-cards-div-main">
      {ProjectsData.data.map((repo) => (
        <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
      ))}
    </div>
    <Button
      text={"More Projects"}
      className="project-button"
      href={greeting.githubProfile}
      newTab={true}
      theme={theme}
    />
    {publications.data.length > 0 && (
      <div className="basic-projects">
        <div className="publications-heading-div">
          <div className="publications-heading-text-div">
            <h1 className="publications-heading-text" style={{ color: theme.text }}>
              {publicationsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {publicationsHeader["description"]}
            </p>
          </div>
        </div>
      </div>
    )}
    <div className="repo-cards-div-main">
      {publications.data.map((pub) => (
        <PublicationCard key={pub.id} pub={pub} theme={theme} />
      ))}
    </div>
    <Footer theme={theme} onToggle={onToggle} />
    <TopButton theme={theme} />
  </div>
);

export default Projects;
