import React from "react";

export function Project({ project }) {
  return (
    <div className="project-card-grid">
      <a href={project.link}>
        <div className="project-name-box">{project.projectName}</div>
        <i className="fas fa-external-link-alt"></i>
      </a>

      <div className="project-tech-details-box">{project.projectDetails}</div>

      <div className="project-image-box">
        <img src={project.projectImage} />
      </div>

      <div className="project-description-box">
        {project.projectDescription}
      </div>

      {/* <div className="project-link-box">
                {project.link}
            </div> */}
    </div>
  );
}
