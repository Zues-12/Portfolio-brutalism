"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "Platforms", "Healthcare", "Commerce", "Community"];

export default function ProjectArchive() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="archive-toolbar">
        <p>
          Showing <strong>{String(visibleProjects.length).padStart(2, "0")}</strong>{" "}
          projects
        </p>
        <div className="archive-filters" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "is-active" : ""}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="archive-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article
            className={`archive-card archive-card--${project.color} ${
              Number(project.number) % 2 === 0 ? "archive-card--offset" : ""
            }`}
            id={project.slug}
            key={project.title}
            style={{ "--card-index": index } as React.CSSProperties}
          >
            <div className="archive-card__image">
              <span className="archive-poster__micro">
                ZS / {project.category} / {project.number}
              </span>
              <strong className="archive-poster__title">{project.title}</strong>
              <span className="archive-poster__rule" aria-hidden="true" />
              <span className="archive-poster__domain">{project.domain}</span>
              <span className="archive-poster__shape" aria-hidden="true" />
              <span className="archive-card__index">{project.number}</span>
              <div className="project-buttons">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.hasDetails && (
                  <Link href={`/work/${project.slug}`}>
                    Details <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="archive-card__info">
              <div>
                <p>{project.category}</p>
                <h2>{project.title}</h2>
              </div>
              <p className="archive-card__services">{project.services}</p>
              <p className="archive-card__year">{project.domain}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
