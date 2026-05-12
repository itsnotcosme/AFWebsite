"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Static background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url('/background2560x1440.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(12,24,40,0.6) 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "6rem" }}
      >
        <div
          className="hero-content-wrapper"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "4rem",
          }}
        >
          <div className="hero-text-content" style={{ flex: "1", maxWidth: "780px" }}>

            <p className="section-label fade-up" style={{ marginBottom: "1.25rem" }}>
              Porto, Portugal
            </p>

            <h1
              className="fade-up fade-up-delay-1"
              style={{ maxWidth: "780px", marginBottom: "1.25rem", lineHeight: 1.1 }}
            >
              ALBERTO<br />FERREIRA
            </h1>

            <div className="gold-rule fade-up fade-up-delay-2" style={{ marginBottom: "1.5rem" }} />

            <p
              className="fade-up fade-up-delay-3"
              style={{
                maxWidth: "520px",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "var(--cream-muted)",
                marginBottom: "1.75rem",
              }}
            >
              A marketing professional and Master&apos;s student at Católica Porto
              Business School who thinks about why certain brands endure, and what that
              means for the ones that want to.
            </p>

            <div
              className="fade-up fade-up-delay-4"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a href="#about" className="btn-primary">Explore my profile</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
          </div>

          {/* Photo */}
          <div
            className="hero-image-container fade-up fade-up-delay-2"
            style={{ flex: "0 0 400px", marginTop: "2.5rem", position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                border: "1px solid var(--navy-border)",
                padding: "0.5rem",
                background: "var(--navy-light)",
              }}
            >
              <Image
                src="/fotoofme.jpeg"
                alt="Alberto Ferreira"
                fill
                priority
                style={{
                  objectFit: "cover",
                  filter: "grayscale(10%) contrast(105%)",
                }}
              />
            </div>

            {/* Gold accent corner */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "60px",
                height: "60px",
                borderBottom: "1px solid var(--gold)",
                borderRight: "1px solid var(--gold)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="fade-up fade-up-delay-5"
          style={{
            position: "absolute",
            bottom: "-4rem",
            left: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              writingMode: "vertical-rl",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cream-muted)",
            }}
          >
            Scroll
          </span>
          <div style={{ width: "1px", height: "48px", background: "var(--gold)" }} />
        </div>
      </div>
    </section>
  );
}
