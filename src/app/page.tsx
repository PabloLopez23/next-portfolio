import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GitFork,
  Languages,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  education,
  experience,
  focusAreas,
  navItems,
  profile,
  projects,
  stack,
} from "./data";

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p>{kicker}</p>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={`action-link ${variant === "secondary" ? "action-link-secondary" : ""}`}
      href={href}
      target={href.startsWith("#") || href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("#") || href.startsWith("mailto:") ? undefined : "noreferrer"}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#18191b] text-[#f4f1ea]">
      <aside className="site-sidebar">
        <a className="brand-mark" href="#home" aria-label="Pablo Lopez home">
          PL
        </a>

        <span className="language-pill">
          <Languages size={17} aria-hidden="true" />
          English
        </span>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.href} href={item.href}>
                <Icon size={19} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <p className="sidebar-footer">© 2026 Pablo Lopez</p>
      </aside>

      <div className="social-rail" aria-label="Social links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GitFork size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <BriefcaseBusiness size={20} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email Pablo Lopez">
          <Mail size={20} />
        </a>
      </div>

      <div className="page-shell">
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <div className="status-row">
              <span>Available for security-focused roles</span>
              <span className="location-chip">
                <MapPin size={15} />
                {profile.location}
              </span>
            </div>

            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-subtitle">{profile.subtitle}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <ActionLink href={profile.resume}>
                <Download size={18} />
                Resume
              </ActionLink>
              <ActionLink href="#contact" variant="secondary">
                <Send size={18} />
                Contact
              </ActionLink>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-wrap">
              <Image
                src="/mifoto.png"
                alt="Portrait of Pablo Lopez"
                width={420}
                height={420}
                priority
              />
            </div>

            <div className="stack-grid" aria-label="Main technical stack">
              {stack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div className="stack-item" key={tech.name}>
                    <Icon size={24} aria-hidden="true" />
                    <strong>{tech.label}</strong>
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label="Professional direction">
          <ShieldCheck size={28} aria-hidden="true" />
          <p>{profile.direction}</p>
        </section>

        <section id="experience" className="content-section">
          <SectionHeading
            kicker="Experience"
            title="Work and training that shaped my profile"
            description="Remote collaboration, application development, and security-oriented technical growth."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.date}`}>
                <div className="experience-date">{item.date}</div>
                <div className="experience-body">
                  <div>
                    <p>{item.role}</p>
                    <h3>{item.title}</h3>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.company}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                  <p>{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeading
            kicker="Projects"
            title="Selected builds and applied practice"
            description="The new portfolio keeps your previous projects, rewritten in English and presented with a stronger visual system."
          />

          <div className="project-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 1180px) 520px, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="project-content">
                    <div className="project-title-row">
                      <ProjectIcon size={24} aria-hidden="true" />
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    <ul className="tag-list">
                      {project.skills.map((skill) => (
                        <li key={`${project.title}-${skill}`}>{skill}</li>
                      ))}
                    </ul>
                    <div className="project-actions">
                      <a href={project.repository} target="_blank" rel="noreferrer">
                        <GitFork size={17} />
                        Repository
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={17} />
                        {project.liveLabel}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading
            kicker="Education"
            title="Cybersecurity focus and technical foundation"
            description="A concise view of training plus the areas currently guiding your GitHub and portfolio narrative."
          />

          <div className="education-focus-grid">
            <div className="education-list">
              {education.map((item) => {
                const Icon = item.icon;

                return (
                  <a className="education-card" href={item.link} target="_blank" rel="noreferrer" key={item.title}>
                    <Icon size={23} aria-hidden="true" />
                    <div>
                      <p>{item.school} · {item.date}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <div className="focus-panel">
              <h3>Current focus</h3>
              <ul className="tag-list">
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p>Contact</p>
            <h2>Let us build secure, useful software.</h2>
            <span>
              I am open to Blue Team, SOC, cloud security, secure development, and
              technical security support opportunities.
            </span>
          </div>

          <div className="contact-actions">
            <ActionLink href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Email
            </ActionLink>
            <ActionLink href={profile.linkedin} variant="secondary">
              <BriefcaseBusiness size={18} />
              LinkedIn
            </ActionLink>
            <ActionLink href={profile.github} variant="secondary">
              <GitFork size={18} />
              GitHub
            </ActionLink>
          </div>
        </section>
      </div>
    </main>
  );
}
