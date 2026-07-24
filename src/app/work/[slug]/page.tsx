import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.hasDetails)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} — Zunair Saeed` : "Project not found",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project?.hasDetails) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <a className="skip-link" href="#project-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="brand">
          <Link className="logo" href="/" aria-label="Zunair Saeed, home">
            ZS<span>®</span>
          </Link>
          <p>Case / {project.number}</p>
        </div>
        <nav aria-label="Main navigation">
          <Link className="is-current" href="/work">
            Work
          </Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="availability" href="/#contact">
          <span aria-hidden="true" />
          Available for work
        </Link>
      </header>

      <main id="project-content">
        <section className={`case-hero case-hero--${project.color}`}>
          <div className="case-hero__meta">
            <p>{project.category}</p>
            <p>{project.services}</p>
            <p>{project.number} / 14</p>
          </div>
          <h1>{project.title}</h1>
          <span className="case-hero__shape" aria-hidden="true" />
          <div className="case-hero__footer">
            <p>{project.summary}</p>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Visit live project <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </section>

        <section className="case-overview section-pad">
          <p className="case-overview__label">Project overview / {project.number}</p>
          <div className="case-overview__content">
            <h2>
              Digital work built
              <br />
              for <em>real use.</em>
            </h2>
            <p>{project.summary}</p>
          </div>
          <dl className="case-facts">
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Services</dt>
              <dd>{project.services}</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>{project.domain}</dd>
            </div>
          </dl>
        </section>

        <section className="next-project">
          <p>Next project / {nextProject.number}</p>
          <Link href={`/work/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <i aria-hidden="true">→</i>
          </Link>
        </section>
      </main>

      <footer>
        <Link className="logo" href="/">
          ZS<span>®</span>
        </Link>
        <p>© 2026 Zunair Saeed</p>
        <div>
          <Link href="/work">All work</Link>
          <a href="mailto:szunair7@gmail.com">Email</a>
        </div>
        <a href="#project-content">Back to top ↑</a>
      </footer>
    </>
  );
}
