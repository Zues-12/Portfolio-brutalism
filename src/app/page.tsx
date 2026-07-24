import Link from "next/link";
import { projects as allProjects } from "@/data/projects";

const projects = allProjects.slice(0, 2);

const skillGroups = [
  {
    number: "A",
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind", "Material UI", "Shadcn UI", "GSAP", "Framer Motion", "Three.js"],
  },
  {
    number: "B",
    title: "Backend",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "FastAPI",
      "Django",
      "Microservices",
      "Socket.io",
      "Redis",
      "Supabase",   
    ],
  },
  {
    number: "C",
    title: "Data + AI",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Python",
      "Generative AI",
      "VectorDBs",
      "RAG",
      "AI Agentic Development",
      "LLM integration",
    ],
  },
  {
    number: "D",
    title: "Security + quality",
    skills: ["OAuth", "JWT", "TDD","Vitest", "Cypress", "Playwright", "Puppeteer", "Jest"],
  },
  {
    number: "E",
    title: "DevOps",
    skills: [
      "Docker",
      "CI/CD — GitHub Actions",
      "Nginx",
      "PM2",
      "Server deployment",
      "Monitoring",
    ],
  },
  {
    number: "F",
    title: "Cloud + hosting",
    skills: [
      "Vercel",
      "Railway",
      "Render",
      "VPS",
      "Contabo",
      "Hostinger",
      "cPanel",
    ],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow arrow--diagonal" : "arrow"}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const variant = project.slug === "caremd" ? "care" : "rak";

  return (
    <article className={`project project--${variant}`}>
      <div className="project__image">
        <span className="poster__micro">Selected case / {project.number}</span>
        <strong className="poster__title">{project.title}</strong>
        <span className="poster__line" aria-hidden="true" />
        <span className="poster__code" aria-hidden="true">
          {variant === "care" ? "HEALTH / 01" : "GOV / 02"}
        </span>
        <span className="poster__shape" aria-hidden="true" />
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
      <div className="project__meta">
        <span>{project.number}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <p className="project__type">
          {project.category}
          <br />
          {project.services}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="brand">
          <a className="logo" href="#content" aria-label="Zunair Saeed, home">
            ZS<span>®</span>
          </a>
          <p>Portfolio / 26</p>
        </div>
        <nav aria-label="Main navigation">
          <Link href="/work">Work</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:szunair7@gmail.com">
          <span aria-hidden="true" />
          Available for work
        </a>
      </header>

      <main id="content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__eyebrow">
            <p>
              <span>Zunair Saeed / 001</span>
              Full-stack developer
            </p>
            <p>
              Open to remote collaborations
              <br />
              Available worldwide
            </p>
          </div>
          <h1 id="hero-title">
            FULL-STACK
            <span className="hero__line">
              <span className="hero__stamp" aria-hidden="true">
                Z / S
              </span>
              <em>DEVELOPER</em>
            </span>
            BUILDING <span className="circled">USEFUL</span> SYSTEMS.
          </h1>
          <div className="hero__badge" aria-label="Three years of experience">
            <strong>3</strong>
            <span>
              Years of
              <br />
              experience
            </span>
          </div>
          <div className="hero__footer">
            <p>
              MERN stack developer with 3+ years of experience building
              scalable products, APIs, and AI-powered web applications.
            </p>
            <a
              className="round-link"
              href="#work"
              aria-label="Scroll to selected work"
            >
              <Arrow />
            </a>
          </div>
        </section>

        <section className="ticker" aria-label="Specialties">
          <div>
            <span className="ticker__group">
              <span>Design-minded</span><i>✦</i><span>Code-driven</span><i>✦</i>
              <span>Human-focused</span><i>✦</i>
            </span>
            <span className="ticker__group" aria-hidden="true">
              <span>Design-minded</span><i>✦</i><span>Code-driven</span><i>✦</i>
              <span>Human-focused</span><i>✦</i>
            </span>
          </div>
        </section>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <SectionLabel number="01">Selected work</SectionLabel>
            <h2 id="work-title">
              Projects with
              <br />
              <em>purpose + punch.</em>
            </h2>
            <p>A few things I&apos;ve helped shape, ship, and make matter.</p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <Link className="all-work-link" href="/work">
            <span>View all work</span>
            <strong>14 projects</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <SectionLabel number="02">About / approach</SectionLabel>
          <div className="about__grid">
            <div className="about__portrait">
              <p>ZUNAIR</p>
              <strong>SAEED</strong>
              <i aria-hidden="true">03</i>
              <span>Full-stack / 3+ years</span>
            </div>
            <div className="about__copy">
              <h2 id="about-title">
                Good code should be
                <br />
                <em>felt, not noticed.</em>
              </h2>
              <div className="about__body">
                <p>
                  I&apos;m Zunair, a full-stack developer who enjoys turning
                  complex requirements into clear, dependable products.
                </p>
                <p>
                  For over three years, I&apos;ve built scalable applications
                  across React, Next.js, Node.js, MongoDB, and PostgreSQL. My
                  recent work also explores Generative AI, RAG, VectorDBs, and
                  production DevOps.
                </p>
              </div>
              <a
                className="text-link"
                href="/Zunair-Saeed-CV.pdf"
                target="_blank"
              >
                Download my CV <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className="capabilities section-pad"
          aria-labelledby="capabilities-title"
        >
          <SectionLabel number="03">What I bring</SectionLabel>
          <div className="capabilities__intro">
            <h2 id="capabilities-title">
              Full stack.
              <br />
              No <em>blind spots.</em>
            </h2>
            <p>
              A practical toolkit spanning interfaces, backend architecture,
              AI systems, infrastructure, and production delivery.
            </p>
          </div>
          <div className="skill-matrix">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.number}>
                <header>
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                  <span>{String(group.skills.length).padStart(2, "0")}</span>
                </header>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span aria-hidden="true">↳</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="experience section-pad"
          aria-labelledby="experience-title"
        >
          <SectionLabel number="04">Experience</SectionLabel>
          <div className="experience__grid">
            <h2 id="experience-title">
              Three years.
              <br />
              <em>Zero autopilot.</em>
            </h2>
            <div className="timeline">
              <div className="timeline__item">
                <p>2024—Now</p>
                <h3>AI First Full-stack Developer</h3>
                <span>Arhamsoft Pvt. Ltd.</span>
              </div>
              <div className="timeline__item">
                <p>2024</p>
                <h3>MERN Stack Developer</h3>
                <span>Twilight Dev / Remote</span>
              </div>
              <div className="timeline__item">
                <p>2020—24</p>
                <h3>BBIT, University of the Punjab</h3>
                <span>Business &amp; Information Technology</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="contact__kicker">Have a project in mind?</p>
          <h2 id="contact-title">
            LET&apos;S MAKE
            <br />
            <span>SOMETHING</span>
            <br />
            <em>UNIGNORABLE.</em>
          </h2>
          <a className="contact__button" href="mailto:szunair7@gmail.com">
            Start a conversation <Arrow diagonal />
          </a>
          <div className="contact__details">
            <span>Replies within 2 business days</span>
            <a href="mailto:szunair7@gmail.com">szunair7@gmail.com</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo logo--light" href="#content">
          ZS<span>®</span>
        </a>
        <p>© 2026 Zunair Saeed</p>
        <div>
          <a
            href="https://pk.linkedin.com/in/zunair-saeed-6a0323203"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:szunair7@gmail.com">
            Email
          </a>
          <a href="/Zunair-Saeed-CV.pdf" target="_blank">
            CV
          </a>
        </div>
        <a href="#content">Back to top ↑</a>
      </footer>
    </>
  );
}
