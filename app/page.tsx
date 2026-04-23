"use client";
export default function Portfolio() {
  const projects = [
    {
      title: "Menu Mate",
      desc: "A QR-based digital menu platform for restaurants — customers scan to view the menu instantly, no app download needed.",
      tech: ["Next.js", "React", "Node.js", "MongoDB"],
      link: "https://menu-mate-h3fo.vercel.app/",
      github: "https://github.com/SiripireddyBhumika",
      emoji: "🍽️",
    },
    {
      title: "Foodie AI",
      desc: "Upload a food photo and get instant calorie estimates — powered by AI image recognition and nutritional data.",
      tech: ["React", "AI APIs"],
      link: "https://foodie-ai-bypa.vercel.app/",
      github: "https://github.com/SiripireddyBhumika",
      emoji: "🤖",
    },
  ];

  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Redux Toolkit", category: "Frontend" },
    { name: "Context API", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Vercel", category: "Tools" },
  ];

  const experience = [
    {
      text: "Built reusable, scalable UI components in React.js used across multiple production features.",
      icon: "⚛️",
    },
    {
      text: "Managed complex application state with Redux Toolkit and Context API.",
      icon: "🔄",
    },
    {
      text: "Integrated REST and GraphQL APIs for smooth, efficient data flow.",
      icon: "🔗",
    },
    {
      text: "Optimised rendering performance by reducing unnecessary re-renders.",
      icon: "⚡",
    },
    {
      text: "Used GitHub Copilot and AI tools to ship features faster.",
      icon: "🤖",
    },
    {
      text: "Worked in Agile cross-functional teams and consistently delivered on time.",
      icon: "🎯",
    },
  ];

  const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <div
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        color: "#1E293B",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "14px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <span
          style={{
            fontWeight: "800",
            fontSize: "20px",
            color: "#2563EB",
            letterSpacing: "-0.5px",
          }}
        >
          BHUMIKA S.
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: "14px",
                color: "#64748B",
                textDecoration: "none",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 24px 60px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#EFF6FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            marginBottom: "24px",
            border: "2px solid #BFDBFE",
          }}
        >
          👩‍💻
        </div>

        <span
          style={{
            fontSize: "12px",
            color: "#2563EB",
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "16px",
            display: "block",
          }}
        >
          FRONTEND DEVELOPER
        </span>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: "800",
            letterSpacing: "-2px",
            lineHeight: "1.1",
            marginBottom: "20px",
            color: "#0F172A",
          }}
        >
          Bhumika
          <br />
          <span style={{ color: "#2563EB" }}>Siripireddy</span>
        </h1>

        <p
          style={{
            maxWidth: "500px",
            color: "#64748B",
            lineHeight: "1.8",
            fontSize: "16px",
            marginBottom: "36px",
          }}
        >
          2+ years building fast, scalable web apps with React and Next.js. I
          turn complex problems into clean, user-friendly interfaces.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "12px 28px",
              background: "#2563EB",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            style={{
              padding: "12px 28px",
              background: "white",
              color: "#1E293B",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              border: "1px solid #E2E8F0",
            }}
          >
            Download Resume
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "⚡ React Specialist", bg: "#EFF6FF", color: "#1D4ED8" },
            { label: "🤖 AI-assisted dev", bg: "#EFF6FF", color: "#1D4ED8" },
            { label: "✅ Immediate Joiner", bg: "#F0FDF4", color: "#15803D" },
          ].map((b) => (
            <span
              key={b.label}
              style={{
                fontSize: "13px",
                padding: "6px 16px",
                background: b.bg,
                color: b.color,
                borderRadius: "20px",
                fontWeight: "600",
              }}
            >
              {b.label}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{ padding: "80px 24px", background: "white" }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#2563EB",
              fontWeight: "700",
              letterSpacing: "3px",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            CAREER
          </p>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "40px",
              color: "#0F172A",
            }}
          >
            Work Experience
          </h2>

          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                height: "100%",
                background: "#2563EB",
                borderRadius: "4px 0 0 4px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#0F172A",
                    marginBottom: "4px",
                  }}
                >
                  Frontend Developer — React.js
                </h3>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  UST Global
                </p>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  padding: "5px 14px",
                  background: "#DBEAFE",
                  color: "#1D4ED8",
                  borderRadius: "20px",
                  fontWeight: "600",
                }}
              >
                April 2024 – Present
              </span>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {experience.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "16px", marginTop: "1px" }}>
                    {item.icon}
                  </span>
                  <p
                    style={{
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{ padding: "80px 24px", background: "#F8FAFC" }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#2563EB",
              fontWeight: "700",
              letterSpacing: "3px",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            WORK
          </p>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "40px",
              color: "#0F172A",
            }}
          >
            Projects
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  border: "1px solid #E2E8F0",
                  padding: "28px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#EFF6FF",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "16px",
                  }}
                >
                  {p.emoji}
                </div>

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0F172A",
                    marginBottom: "10px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    marginBottom: "16px",
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "20px",
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        padding: "3px 10px",
                        background: "#F1F5F9",
                        color: "#475569",
                        borderRadius: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a
                    href={p.link}
                    target="_blank"
                    style={{
                      fontSize: "13px",
                      color: "#2563EB",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Live Demo →
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    style={{
                      fontSize: "13px",
                      color: "#94A3B8",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{ padding: "80px 24px", background: "white" }}
      >
        <div
          style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#2563EB",
              fontWeight: "700",
              letterSpacing: "3px",
              marginBottom: "8px",
            }}
          >
            EXPERTISE
          </p>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "40px",
              color: "#0F172A",
            }}
          >
            Skills
          </h2>

          {["Frontend", "Backend", "Tools"].map((cat) => (
            <div key={cat} style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontSize: "12px",
                  color: "#94A3B8",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                {cat.toUpperCase()}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {skills
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <span
                      key={s.name}
                      style={{
                        padding: "8px 18px",
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "20px",
                        fontSize: "13px",
                        color: "#334155",
                        fontWeight: "500",
                      }}
                    >
                      {s.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 24px",
          background: "#F8FAFC",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#2563EB",
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "8px",
          }}
        >
          GET IN TOUCH
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "800",
            marginBottom: "12px",
            color: "#0F172A",
          }}
        >
          Let's Connect
        </h2>
        <p
          style={{
            color: "#64748B",
            fontSize: "15px",
            maxWidth: "400px",
            margin: "0 auto 32px",
          }}
        >
          Open to full-time roles. Always happy to chat!
        </p>

        <a
          href="mailto:siripireddybhumika@gmail.com"
          style={{
            display: "inline-block",
            padding: "13px 32px",
            background: "#2563EB",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "600",
            marginBottom: "28px",
          }}
        >
          📧 Send an Email
        </a>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <a
            href="https://www.linkedin.com/in/bhumikas18/"
            target="_blank"
            style={{
              padding: "10px 24px",
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              color: "#1E293B",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SiripireddyBhumika"
            target="_blank"
            style={{
              padding: "10px 24px",
              background: "white",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              color: "#1E293B",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #E2E8F0",
          fontSize: "13px",
          color: "#94A3B8",
        }}
      >
        © 2026 Bhumika Siripireddy · Built with Next.js
      </footer>
    </div>
  );
}
