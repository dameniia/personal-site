import PropTypes from "prop-types";
import { Project } from "./Project.jsx";

export function ProjectList({ projects }) {
  return (
    <div className="grid-container">
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
