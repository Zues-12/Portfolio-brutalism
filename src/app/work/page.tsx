import type { Metadata } from "next";
import Link from "next/link";
import ProjectArchive from "./project-archive";

export const metadata: Metadata = {
  title: "Selected Work — Zunair Saeed",
  description:
    "A selection of healthcare, marketplace, education, and AI products built by Zunair Saeed.",
};

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#work-content">
        Skip to content
      </a>

      <header className="site-header work-header">
        <div className="brand">
          <Link className="logo" href="/" aria-label="Zunair Saeed, home">
            ZS<span>®</span>
          </Link>
          <p>Work / 23—26</p>
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

      <main id="work-content">
        <section className="work-hero" aria-labelledby="work-page-title">
          <div className="work-hero__top">
          <p>Archive / 14 selected launches</p>
            <p>
              Digital products, platforms,
              <br />
              and beautifully useful things.
            </p>
          </div>
          <h1 id="work-page-title">
            WORK THAT
            <br />
            <em>WORKS</em>
            <span>®</span>
          </h1>
          <div className="work-hero__bottom">
            <span>(14)</span>
            <p>
              A growing collection of collaborations for people building
              what&apos;s next.
            </p>
            <span>Scroll to explore ↓</span>
          </div>
        </section>

        <section className="archive section-pad" aria-label="Project archive">
          <ProjectArchive />
        </section>

        <section className="work-cta section-pad" id="work-contact">
          <p>Got something ambitious in mind?</p>
          <h2>
            Your project
            <br />
            could be <em>next.</em>
          </h2>
          <a href="mailto:szunair7@gmail.com">
            Tell me about it <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <Link className="logo logo--light" href="/">
          ZS<span>®</span>
        </Link>
        <p>© 2026 Zunair Saeed</p>
        <div>
          <a
            href="https://pk.linkedin.com/in/zunair-saeed-6a0323203"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/Zunair-Saeed-CV.pdf" target="_blank">
            CV
          </a>
        </div>
        <a href="#work-content">Back to top ↑</a>
      </footer>
    </>
  );
}
