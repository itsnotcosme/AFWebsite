"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Brand Meaning & Consumer Identity",
    context: "Master's thesis research — Católica Porto Business School",
    objective:
      "To investigate how consumers incorporate brand symbolism into their self-concept, and what conditions allow a brand to become a consistent part of identity expression.",
    role: "Sole researcher — conceptual framework design, literature review, methodology, fieldwork",
    insight:
      "The most durable brands are not those with the best products, but those that align most coherently with the identities consumers want to project or protect.",
    outcome:
      "Ongoing — expected to contribute an original framework connecting brand identity theory, self-concept research, and consumer attachment.",
    signal:
      "This project defines the intellectual core of where I am moving: into strategic brand thinking grounded in consumer psychology.",
  },
  {
    number: "02",
    title: "Strategic Brand Audit",
    context: "Academic project — Master's in Marketing",
    objective:
      "A comprehensive audit of an established brand's identity, positioning, and consumer perception — identifying gaps between intended and received meaning.",
    role: "Lead analyst — brand identity mapping, competitive landscape, consumer insight synthesis",
    insight:
      "Even well-established brands frequently suffer from a disconnect between how they position themselves and how they are actually interpreted by target consumers.",
    outcome:
      "Presented strategic recommendations for reframing brand communication to reduce interpretive gap and strengthen identity coherence.",
    signal:
      "Developed the ability to approach a brand as a system — and to identify where strategic intent breaks down in execution.",
  },
  {
    number: "03",
    title: "Digital Brand Presence Redesign",
    context: "Professional project — Social Media Management",
    objective:
      "To redesign the social media presence of a brand to achieve greater consistency, strategic intent, and alignment with long-term brand positioning.",
    role: "Strategist and executor — content strategy, visual guidelines, editorial calendar",
    insight:
      "Social media, when treated as a branding channel rather than a distribution channel, can significantly reinforce brand meaning — but most brands use it transactionally.",
    outcome:
      "Achieved measurable improvements in engagement quality and consistency of brand representation across platforms.",
    signal:
      "Confirmed that the most interesting marketing problems are not technical — they are strategic and interpretive.",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <p className="section-label fade-up">Selected Projects</p>
        <h2 className="fade-up fade-up-delay-1" style={{ marginBottom: "1rem" }}>
          Work that reflects
          <br />
          <em style={{ color: "var(--gold)" }}>how I think</em>
        </h2>
        <p
          className="fade-up fade-up-delay-2"
          style={{ marginBottom: "3.5rem", maxWidth: "520px" }}
        >
          A selective set of projects — academic, professional, and hybrid — chosen to
          show the range and coherence of my intellectual direction.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className={`card fade-up fade-up-delay-${i + 2}`}
            >
              {/* Number + title */}
              <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: "'Bonnes', sans-serif",
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "var(--navy-border)",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {proj.number}
                </span>
                <div>
                  <h3 style={{ marginBottom: "0.3rem" }}>{proj.title}</h3>
                  <p
                    style={{
                      fontFamily: "'Bonnes', sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--gold)",
                      letterSpacing: "0.12em",
                      margin: 0,
                    }}
                  >
                    {proj.context}
                  </p>
                </div>
              </div>

              <div className="gold-rule" />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
                className="proj-details-grid"
              >
                {[
                  { label: "Objective", value: proj.objective },
                  { label: "My Role", value: proj.role },
                  { label: "Key Insight", value: proj.insight },
                  { label: "Outcome", value: proj.outcome },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      style={{
                        fontFamily: "'Bonnes', sans-serif",
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontSize: "0.88rem", margin: 0, maxWidth: "none" }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--navy-border)",
                  paddingTop: "1rem",
                  fontStyle: "italic",
                  fontSize: "0.88rem",
                  color: "var(--cream-muted)",
                }}
              >
                <span style={{ color: "var(--gold)", fontStyle: "normal", fontFamily: "'Bonnes', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Direction signal —{" "}
                </span>
                {proj.signal}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .proj-details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
