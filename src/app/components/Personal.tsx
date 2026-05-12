"use client";

import { useEffect, useRef } from "react";

const facets = [
  {
    label: "Curiosity",
    text:
      "I am genuinely interested in how things work, how systems behave, and why people make the choices they do. That interest drives the research, the reading, and most of the work I find worth doing.",
  },
  {
    label: "Aesthetic sensibility",
    text:
      "I pay close attention to how things look, feel, and communicate. Aesthetics are not decoration. They are information, and they are almost always the first thing that tells you whether something knows what it is.",
  },
  {
    label: "Long-term thinking",
    text:
      "I am not interested in fast signals or short cycles. The careers, brands, and ideas I find worth studying are the ones built to endure. That orientation shapes how I work and what I am building toward.",
  },
];

export default function Personal() {
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
    <section id="personal" ref={ref} style={{ paddingBottom: "3.5rem" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <p className="section-label fade-up">PERSONAL</p>
          <h2 className="fade-up fade-up-delay-1" style={{ marginBottom: "1.5rem" }}>
            The longer version
            <br />
            <em style={{ color: "var(--gold)" }}>of who I am.</em>
          </h2>
          <div className="gold-rule fade-up fade-up-delay-2" />
          <p className="fade-up fade-up-delay-2" style={{ marginBottom: "1.25rem" }}>
            Outside of the work, I am someone who pays close attention to why certain things feel right and others feel off. That instinct runs across everything I am drawn to — the precision of a well-engineered machine, the discipline behind a craft made to last, and the fascination with the psychology that drives every human decision.
          </p>
          <p className="fade-up fade-up-delay-3">
            These are not separate interests. They reflect the same way of seeing.
          </p>
        </div>

        {/* Right: facets */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "4rem" }}>
          {facets.map((f, i) => (
            <div
              key={f.label}
              className={`fade-up fade-up-delay-${i + 2}`}
              style={{ borderLeft: "1px solid var(--navy-border)", paddingLeft: "1.5rem" }}
            >
              <h4
                style={{
                  color: "var(--white)",
                  fontFamily: "'Bonnes', sans-serif",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                  fontWeight: 300,
                }}
              >
                {f.label}
              </h4>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>{f.text}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            #personal .container { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
