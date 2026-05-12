"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" ref={ref}>
      <div className="container">

        <p className="section-label fade-up" style={{ marginBottom: "1rem" }}>
          About
        </p>

        <h2
          className="fade-up fade-up-delay-1"
          style={{ marginBottom: "2rem", textTransform: "uppercase" }}
        >
          Alberto Ferreira
        </h2>

        <div style={{ maxWidth: "800px" }}>

          <div className="gold-rule fade-up fade-up-delay-2" />

          <p className="fade-up fade-up-delay-2" style={{ marginBottom: "1.5rem", marginTop: "1rem" }}>
            My foundation is in Management. It taught me how organisations think, how
            markets move, how decisions get made. What it didn&apos;t answer, and what
            eventually pulled me toward marketing, was why any of it matters to the
            people on the other side.
          </p>

          <p className="fade-up fade-up-delay-3" style={{ marginBottom: "1.5rem" }}>
            That question led me into the field early. I have been working in marketing
            since my first year of university. Not because it was the obvious next step,
            but because the questions it raised were the ones I actually wanted to answer.
            How does a brand become irreplaceable? What separates the ones that last from
            the ones that disappear? Why do people choose to make certain brands part of
            who they are?
          </p>

          <p className="fade-up fade-up-delay-4" style={{ marginBottom: "1.5rem" }}>
            Those questions point somewhere specific. The brands I am drawn to, in
            fashion, in watchmaking, in automotive, are the ones that treat identity as a
            discipline. That take the long view. That understand restraint as a form of
            intelligence. That is the world I am building toward, deliberately.
          </p>

          <p className="fade-up fade-up-delay-5">
            I grew up educated in English, think comfortably in four languages, and have
            always moved between contexts, cultural, intellectual, professional, with
            relative ease. I am most useful at the intersection of things.
          </p>

        </div>
      </div>
    </section>
  );
}
