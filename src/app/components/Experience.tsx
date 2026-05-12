"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Social Media Manager",
    org: "CAETSU TWO",
    dates: "Jan 2025 - Present",
    logo: "/logo-caetsu-light.svg",
    context:
      "Responsible for brand presence across digital channels, owning the content strategy, developing the editorial direction, managing creative briefs, analysing performance to inform decisions, and keeping the brand consistent across every platform it touches. The role sits at the intersection of creative judgment and strategic thinking, which is precisely where I want to be.",
  },
  {
    role: "Marketing Intern",
    org: "CAETSU TWO",
    dates: "Oct 2024 - Dec 2024",
    logo: "/logo-caetsu-light.svg",
    context:
      "A university internship that became something else. Over three months, I worked across content strategy, campaign support, and brand communications. At the end of it, they offered me the role full time.",
  },
  {
    role: "Quality Manager & AI Integration",
    org: "Incisal Dental Lab",
    dates: "Oct 2023 - Oct 2024",
    logo: "/logo_incisal.png",
    context:
      "Led the integration of AI tools into the production and operational workflows of a specialist dental laboratory. The role required a precise understanding of how the business functioned at an operational level, identifying where intelligent systems could reduce friction, and implementing change in an environment with no existing framework for it. Outside of marketing entirely, and more valuable for it.",
  },
  {
    role: "Freelance Marketing Consultant",
    org: null,
    dates: "2019 - 2024",
    logo: null,
    context:
      "For five years, running alongside my degree, I worked independently with small businesses across Portugal. The work covered marketing strategy, brand development, and communications — and later expanded into building AI-powered tools to accelerate client workflows. Working without a structure or a team taught me how to think about problems from first principles, and how to deliver work that holds up when there is no one else to defer to.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ background: "rgba(0,0,0,0.15)" }}>
      <div className="container">

        <p className="section-label fade-up">Experience</p>

        <h2
          className="fade-up fade-up-delay-1"
          style={{ marginBottom: "3.5rem" }}
        >
          Professional background
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, i) => {
            const delay = `fade-up-delay-${Math.min(i + 2, 5)}`;

            return (
              <div
                key={exp.role}
                className={`card fade-up ${delay}`}
                style={{ position: "relative" }}
              >
                {/* Subtle index number */}
                <span
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "var(--navy-border)",
                    fontWeight: 500,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <h3 style={{ marginBottom: "0.3rem", textTransform: "uppercase" }}>
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {exp.dates}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "0.35rem",
                    }}
                  >
                    {exp.logo ? (
                      <div style={{ position: "relative", height: "26px", width: "150px" }}>
                        <Image
                          src={exp.logo}
                          alt={`${exp.org} logo`}
                          fill
                          style={{ objectFit: "contain", objectPosition: "right" }}
                        />
                      </div>
                    ) : (
                      exp.org && (
                        <span
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--cream-muted)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {exp.org}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="gold-rule" />

                <p style={{ marginBottom: "1.25rem", fontSize: "0.92rem", maxWidth: "none", lineHeight: 1.7 }}>
                  {exp.context}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
