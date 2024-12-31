import React from "react";
import { Project } from "./Project.jsx";

export function ProjectList({ projects }) {
  return (
    <div className="grid-container">
      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
}
