"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section
      id="contact"
      ref={ref}
      style={{
        background: `linear-gradient(180deg, var(--navy) 0%, #060e1a 100%)`,
        borderTop: "1px solid var(--navy-border)",
      }}
    >
      <div className="container" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
        <p className="section-label fade-up" style={{ justifyContent: "center" }}>
          Contact
        </p>

        <h2
          className="fade-up fade-up-delay-1"
          style={{ marginBottom: "1.5rem", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Let&apos;s think
          <br />
          <em style={{ color: "var(--gold)" }}>together.</em>
        </h2>

        <p
          className="fade-up fade-up-delay-2"
          style={{ marginBottom: "3rem", maxWidth: "520px", margin: "0 auto 3rem" }}
        >
          Whether you are working on a luxury branding project, exploring a research collaboration, or simply want to exchange ideas about premium brands and the culture behind them. If the conversation has rigour and substance, I am interested.
        </p>

        {/* CTA row */}
        <div
          className="fade-up fade-up-delay-3"
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}
        >
          <a href="mailto:AlbertoCosmeferreira@gmail.com" className="btn-primary">
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/albertocferreira/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn profile
          </a>
        </div>

        {/* Divider */}
        <div className="section-divider fade-up" style={{ marginBottom: "3rem" }} />

        {/* Footer */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            className="font-bonnes"
            style={{
              fontSize: "1.4rem",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "var(--white)",
            }}
          >
            Alberto Ferreira
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--cream-muted)",
              letterSpacing: "0.1em",
            }}
          >
            Porto, Portugal — {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
