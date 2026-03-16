import { useState } from "react";
import "../css/projects.css";
import "../css/tag-buttons.css";
import { ProjectList } from "../components/ProjectList";
import projects from "../data/projects.json";

// Derive unique filters from the data, in a preferred display order
const FILTER_ORDER = ["JavaScript", "Java", "HTML", "CSS", "Selenium", "Automation", "Spring Boot"];
const allTags = [...new Set(projects.flatMap((p) => p.tags))];
const filters = FILTER_ORDER.filter((f) => allTags.includes(f));

export function Projects() {
  const [activeFilter, setActiveFilter] = useState(null);

  const filtered =
    activeFilter === null
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const toggle = (tag) => setActiveFilter((prev) => (prev === tag ? null : tag));

  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          <p className="page-subtitle">Things I&apos;ve built</p>
          <h1 className="page-title">Projects</h1>
        </div>
      </header>

      <section className="container content">
        <div className="tag_buttons_container">
          <label>Filter by:</label>
          <div className="button_group">
            <button
              className={`tag_button${activeFilter === null ? " tag_button--active" : ""}`}
              onClick={() => setActiveFilter(null)}
            >
              All
            </button>
            {filters.map((tag) => (
              <button
                key={tag}
                className={`tag_button${activeFilter === tag ? " tag_button--active" : ""}`}
                onClick={() => toggle(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="projects-empty">No projects match that filter.</p>
        ) : (
          <ProjectList projects={filtered} />
        )}
      </section>
    </>
  );
}
