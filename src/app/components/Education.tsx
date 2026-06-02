"use client";

import { useEffect, useRef } from "react";

const education = [
  {
    degree: "Católica Porto Business School",
    institution: "Master's in Marketing",
    dates: "2025 - Present",
    detail:
      "The Master's is where the professional questions I was already asking found their academic framework. The programme focuses on brand meaning, consumer psychology, and the strategic dimensions of how brands function in people's lives. My thesis investigates brand symbolism and consumer identity, specifically how brands become extensions of self-concept.",
    thesis: "Thesis focus: Symbolic Brand Cues and Emotional Attachment in Luxury Brands",
  },
  {
    degree: "Universidade Portucalense",
    institution: "Bachelor's in Management",
    dates: "2019 - 2024",
    detail:
      "Four years studying how organisations think, how markets move, and how decisions get made at scale. The management foundation is what allows me to approach brand problems structurally, not just creatively.",
    thesis: "Head of Marketing, NEGE UPT — the University's student business association.",
  },
  {
    degree: "Externato Ribadouro",
    institution: "Secondary Education",
    dates: "2016 - 2019",
    detail:
      "Secondary education completed with a focus in Economic Sciences, building the quantitative and analytical foundation that carried directly into my degree in Management.",
    thesis: null,
  },
  {
    degree: "Oporto British School",
    institution: "Primary & Secondary Education",
    dates: "2006 - 2016",
    detail:
      "Eight years of academic formation conducted entirely in English, in an international environment. The foundation of the language fluency and cross-cultural ease I carry into every professional context.",
    thesis: null,
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <p className="section-label fade-up">Education</p>
        <h2 className="fade-up fade-up-delay-1" style={{ marginBottom: "3.5rem" }}>
          Academic foundation
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
          className="edu-grid"
        >
          {education.map((edu, i) => (
            <div 
              key={edu.degree + edu.institution} 
              className={`card fade-up fade-up-delay-${i + 2}`}
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <h3 style={{ marginBottom: "0.25rem", textTransform: "uppercase" }}>{edu.degree}</h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--cream-muted)",
                  margin: "0 0 0.5rem",
                }}
              >
                {edu.institution}
              </p>
              <div style={{ marginBottom: "0.8rem" }}>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {edu.dates}
                </span>
              </div>

              <div className="gold-rule" />

              <p style={{ marginBottom: "1.25rem", fontSize: "0.88rem", maxWidth: "none", flex: 1, lineHeight: 1.7 }}>{edu.detail}</p>



              {edu.thesis && (
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "var(--cream-muted)",
                    borderTop: "1px solid var(--navy-border)",
                    paddingTop: "1rem",
                    margin: 0,
                  }}
                >
                  {edu.thesis}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
