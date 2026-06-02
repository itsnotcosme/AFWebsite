"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const articles = [
  {
    tag: "Brand Experience",
    title: "The person in the room: why staff expertise is a brand strategy question",
    slug: "the-person-in-the-room",
    excerpt:
      "Accenture's Luxe Eternal 2026 puts a number to what most luxury brands already sense but rarely act upon: 76% of customers say staff expertise shapes their brand engagement more than any other factor. The person in the room is not a channel. They are the product.",
    readTime: "2 min read",
  },
  {
    tag: "Brand Identity",
    title: "When the territory becomes the typeface: what Amazonia's new identity gets right",
    slug: "amazonia",
    excerpt:
      "Brazil's new visual identity for the Amazon region did something most branding doesn't attempt. It derived its entire typographic system from the actual geography of the place, 25,000 kilometres of rivers translated into letterforms. The result is a brand that doesn't describe its territory. It is made of it. That distinction is worth examining.",
    readTime: "2 min read",
  },
];

export default function Writing() {
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
    <section id="writing" ref={ref}>
      <div className="container">
        <p className="section-label fade-up">Thinking Out Loud</p>
        <h2 className="fade-up fade-up-delay-1" style={{ marginBottom: "1rem" }}>
          Articles &amp; reflections
        </h2>
        <p
          className="fade-up fade-up-delay-2"
          style={{ marginBottom: "3.5rem", maxWidth: "none" }}
        >
          A space for short pieces on brand strategy, consumer psychology, and the
          questions I find worth thinking through. Precise, honest, and without
          unnecessary complexity.
        </p>

        {/* Articles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
          {articles.map((article) => (
            <Link
              key={article.title}
              href={`/articles-reflections/${article.slug}`}
              style={{
                display: "block",
                cursor: "pointer",
                textDecoration: "none",
                background: "var(--navy-card)",
                border: "1px solid var(--navy-border)",
                padding: "2.5rem 2rem",
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
              className="essay-card"
            >
              {/* Tag + read time */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span className="tag">{article.tag}</span>
                <span style={{ fontSize: "0.68rem", color: "var(--cream-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "var(--white)" }}>
                {article.title}
              </h3>

              {/* Excerpt */}
              <p style={{ fontStyle: "italic", fontSize: "0.9rem", maxWidth: "none", borderLeft: "2px solid var(--gold)", paddingLeft: "1.25rem", marginBottom: "2rem", color: "var(--cream-muted)" }}>
                {article.excerpt}
              </p>

              {/* CTA */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                }}>
                  Read Full Article
                </span>
                <span style={{
                  fontSize: "1.2rem",
                  color: "var(--gold)",
                  display: "inline-block",
                }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .essay-card:hover {
          border-color: var(--gold) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
