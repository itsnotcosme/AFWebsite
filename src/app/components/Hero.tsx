"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReveal, useParallax } from "../hooks/useReveal";

const NAME = "ALBERTO\nFERREIRA";

export default function Hero() {
  const ref = useReveal(0.05) as React.RefObject<HTMLElement>;
  const bgRef = useParallax(0.18) as React.RefObject<HTMLDivElement>;

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
      {/* Parallax background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-10% 0",
          background: `url('/background2560x1440.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
          zIndex: 0,
        }}
      />

      {/* Subtle vignette overlay */}
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

            {/* Location — clip-path slide in */}
            <p className="reveal section-label-animate section-label" style={{ marginBottom: "1.25rem" }}>
              Porto, Portugal
            </p>

            {/* Name — letter stagger */}
            <h1
              style={{ maxWidth: "780px", marginBottom: "1.25rem", lineHeight: 1.1 }}
              aria-label="Alberto Ferreira"
            >
              <HeroName />
            </h1>

            {/* Divider line — draw animation */}
            <div className="reveal gold-rule-full" style={{ marginBottom: "1.5rem" }} />

            {/* Positioning copy — reveal up */}
            <p
              className="reveal reveal-up delay-3"
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

            {/* CTAs — reveal up, later delay */}
            <div
              className="reveal reveal-up delay-4"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a href="#about" className="btn-primary">Explore my profile</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
          </div>

          {/* Photo — image wipe reveal */}
          <div
            className="hero-image-container reveal"
            style={{ flex: "0 0 400px", marginTop: "2.5rem", position: "relative" }}
          >
            <div
              className="image-reveal-wrapper"
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

        {/* Scroll indicator — animated pulse */}
        <div
          className="reveal reveal-fade delay-5"
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
          <div className="scroll-line-animated" />
        </div>
      </div>
    </section>
  );
}

/* Letter-by-letter drop animation for the hero name */
function HeroName() {
  const lines = NAME.split("\n");
  let globalIndex = 0;

  return (
    <>
      {lines.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.split("").map((char) => {
            const delay = globalIndex * 55;
            globalIndex++;
            return (
              <span
                key={`${li}-${char}-${delay}`}
                className="hero-letter"
                style={{
                  animationDelay: `${delay}ms`,
                  color: li === 1 ? "var(--white)" : undefined,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}
