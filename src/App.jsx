import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  Code2,
  Compass,
  Menu,
  MessageCircle,
  Moon,
  Sparkles,
  Sun,
  Target,
  Users,
  X,
} from "lucide-react";
import { team } from "./data/team.js";

const links = [
  ["About Us", "about"],
  ["Our Team", "team"],
  ["Our Mission", "mission"],
  ["Our Goal", "goal"],
];

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Strategy Circle home"
        >
          <img className="brand-logo" src={theme === "dark" ? "/images/strategy-circle-logo-dark.png" : "/images/strategy-circle-logo.png"} alt="" />
          <span>
            strategy<span className="brand-light">circle</span>
          </span>
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title="Switch theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="nav-cta" href="#team">
            Meet the team <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span /> {children}
    </div>
  );
}

function Hero({ theme }) {
  return (
    <section className="hero hero-stage" id="home">
      <div className="container hero-stage-inner">
        <div className="hero-rail">
          <span>STRATEGY CIRCLE</span>
          <span className="hero-rail-line" />
          <span>LEARN · BUILD · GROW</span>
        </div>
        <div className="hero-canvas">
          <div className="hero-logo-halo" aria-hidden="true" />
          <img
            className="hero-center-logo"
            src={theme === "dark" ? "/images/strategy-circle-logo-dark.png" : "/images/strategy-circle-logo.png"}
            alt=""
            aria-hidden="true"
          />
          <div className="hero-title-wrap">
            <p className="hero-overline">STUDENT TEAM · CAREER READY</p>
            <h1 aria-label="Strategy Circle">
              <span className="hero-title-word hero-title-first">Strategy</span>
              <span className="hero-title-word hero-title-second">Circle<span className="hero-title-dot">.</span></span>
            </h1>
          </div>
          <p className="hero-aside hero-aside-left">
            Aligning vision,
            <br />
            driving execution.
          </p>
          <p className="hero-aside hero-aside-right">
            Building skills together
            <br />
            for meaningful careers.
          </p>
        </div>
        <div className="hero-stage-actions">
          <a className="button button-primary" href="#team">
            Meet the team <ArrowRight size={17} />
          </a>
          <a className="button button-quiet" href="#mission">
            Explore our mission <ArrowDown size={16} />
          </a>
        </div>
        <div className="hero-bottom">
          <span>CURIOUS MINDS · PURPOSEFUL PRACTICE · BRIGHTER FUTURES</span>
          <a href="#about" aria-label="Scroll to about section">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2>
              Aligning vision,
              <br />
              <span className="serif-accent">driving execution.</span>
            </h2>
          </div>
          <div className="about-body">
            <p>
              Strategy Circle brings together individuals who believe that
              career readiness is built through deliberate practice,
              collaboration, and continuous improvement. We share knowledge,
              support each other's progress, and turn our ambitions into
              achievable goals.
            </p>
            <p>
              Through coding practice, aptitude preparation, technical
              discussions, project development, and interview training, we aim
              to build the skills and confidence needed to succeed in campus
              placements.
            </p>
          </div>
        </div>
        <div className="principles">
          {[
            [
              "01",
              "Learn with intent",
              "Stay curious. Make every practice session count.",
            ],
            [
              "02",
              "Show up consistently",
              "Small, steady steps make meaningful progress.",
            ],
            [
              "03",
              "Rise as a team",
              "Share what you know. Grow what we can do.",
            ],
          ].map(([n, t, d]) => (
            <article className="principle" key={n}>
              <span className="principle-number">{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <ArrowUpRight size={18} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const memberPortfolios = {
    "Sumedha CP": "https://elegant-sumedha-folio.lovable.app",
    "Muhammed Irfan": "https://irfans-gold-folio.lovable.app/",
    "Adrian Antony": "https://adrians-golden-touch.lovable.app",
    "P U Athul": "https://athul-amber-showcase.lovable.app",
    "Arya PS": "https://aryas-amber-folio.lovable.app",
    "Sandra Joseph": "https://proud-presentation.lovable.app",
    Surumi: "https://surumi-portfolio.lovable.app/",
  };

  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow>THE PEOPLE BEHIND THE PROGRESS</Eyebrow>
            <h2>
              Meet the <span className="serif-accent">circle.</span>
            </h2>
          </div>
          <p>
            Different strengths. One shared direction.
            <br />
            Every great outcome starts with a great team.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, i) => {
            const portfolio = memberPortfolios[member.name];
            const MemberCard = portfolio ? "a" : "article";

            return (
            <MemberCard
              className="member-card"
              key={member.name}
              {...(portfolio
                ? { href: portfolio, target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <div className="member-image">
                <img
                  src={member.image}
                  alt={`Placeholder portrait for ${member.name}`}
                  onError={(e) => {
                    e.currentTarget.src = "/images/member-placeholder.svg";
                  }}
                />
                <span className="member-index">0{i + 1}</span>
                <span className="member-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <div className="member-info">
                <span className="member-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
                <span className="member-focus">{member.focus}</span>
              </div>
            </MemberCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const focusAreas = [
  {
    icon: Code2,
    number: "01",
    title: "Technical skills",
    text: "Programming, data structures, algorithms, SQL, and the core concepts that power great technology.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Aptitude & reasoning",
    text: "Quantitative aptitude, logical reasoning, and a calm, considered approach to assessments.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Communication & interviews",
    text: "Spoken English, self-introductions, interview practice, and confident professional communication.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Continuous improvement",
    text: "Mock tests, peer learning, constructive feedback, meaningful projects, and progress tracking.",
  },
];
function Mission() {
  return (
    <section className="section mission-section" id="mission">
      <div className="container">
        <div className="mission-heading">
          <div>
            <Eyebrow>WHAT WE'RE WORKING TOWARD</Eyebrow>
            <h2>
              Preparation,
              <br />
              <span className="serif-accent">with purpose.</span>
            </h2>
          </div>
          <p>
            Our mission is to build a placement-ready team by strengthening our
            technical expertise, problem-solving abilities, communication
            skills, and professional confidence through disciplined preparation
            and mutual support.
          </p>
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, number, title, text }) => (
            <article className="focus-card" key={number}>
              <div className="focus-top">
                <span className="focus-icon">
                  <Icon size={20} />
                </span>
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="focus-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Goal() {
  return (
    <section className="goal-section" id="goal">
      <div className="container goal-layout">
        <div className="goal-copy">
          <Eyebrow light>THE DESTINATION WE SHARE</Eyebrow>
          <h2>
            One shared goal.
            <br />
            <span>Meaningful careers.</span>
          </h2>
          <p>
            Our ultimate goal is to secure successful campus placements in
            reputed companies by helping every team member become
            industry-ready, perform confidently in recruitment assessments, and
            demonstrate their abilities during interviews.
          </p>
          <a href="#team" className="button button-light">
            Grow with us <ArrowRight size={17} />
          </a>
        </div>
        <div className="goal-outcomes">
          {[
            "Become confident, job-ready graduates.",
            "Develop strong technical and problem-solving skills.",
            "Build projects and portfolios that show practical ability.",
            "Improve interview performance and communication.",
            "Support every member in achieving placement success.",
          ].map((line, i) => (
            <div className="outcome" key={line}>
              <span>
                <Check size={15} />
              </span>
              <p>{line}</p>
              <small>0{i + 1}</small>
            </div>
          ))}
        </div>
        <div className="goal-watermark">SC</div>
      </div>
    </section>
  );
}

function Footer({ theme }) {
  return (
    <>
      <section className="closing">
        <div className="container closing-inner">
          <span className="closing-mark">
            <Sparkles size={18} />
          </span>
          <h2>
            Ambition gives us direction.
            <br />
            <span>Execution gets us there.</span>
          </h2>
          <p>
            STRATEGY CIRCLE <i /> ALIGNING VISION, DRIVING EXECUTION.
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <img className="brand-logo" src={theme === "dark" ? "/images/strategy-circle-logo-dark.png" : "/images/strategy-circle-logo.png"} alt="" />
            <span>
              strategy<span className="brand-light">circle</span>
            </span>
          </a>
          <p>Built on teamwork. Focused on the future.</p>
          <a className="back-top" href="#home">
            Back to top <ArrowUpRight size={15} />
          </a>
          <span className="copyright">
            © {new Date().getFullYear()} Strategy Circle
          </span>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("strategy-circle-theme") || "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("strategy-circle-theme", theme);
    } catch {}
  }, [theme]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} setTheme={setTheme} />
      <main id="main">
        <Hero theme={theme} />
        <About />
        <Team />
        <Mission />
        <Goal />
        <Footer theme={theme} />
      </main>
    </>
  );
}
