"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const interests = [
  {
    title: "Motorcycling & Automotive Culture",
    images: ["/motorcycle2.jpeg", "/motorcycle3.jpeg", "/auto1.jpeg", "/auto2.jpeg"],
    desc: "There is a discipline to riding that most people don't expect. It demands full attention, precise judgment, and an instinct for how systems behave under pressure. The machine and the rider have to be coherent. That standard doesn't switch off when I'm not on the bike."
  },
  {
    title: "Luxury & Craftsmanship",
    images: ["/relogio1.jpeg", "/relogio2.jpeg", "/relogio3.jpeg", "/relogio4.jpeg"],
    desc: "Mechanical watchmaking and the luxury sector share one quality I find compelling: the refusal to accept good enough. Every component justified, every detail deliberate, nothing included without a reason. That is a standard of thinking, not just a standard of making."
  },
  {
    title: "Psychology & Human Behaviour",
    images: ["/Psychology1.jpeg", "/Psychology2.jpeg"],
    desc: "I have always been more interested in the person behind the decision than the decision itself. What drives someone to choose, to attach, to stay loyal or walk away. Psychology is not a separate interest from marketing. It is the foundation of it."
  },
];

function InterestStrip({ item, delayIndex }: { item: typeof interests[0], delayIndex: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (item.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div
      className={`interest-strip fade-up fade-up-delay-${delayIndex}`}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "flex 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        border: "1px solid var(--navy-border)",
      }}
    >
      {item.images.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={item.title}
          fill
          className="interest-image"
          style={{
            objectFit: "cover",
            transition: "transform 0.8s ease, opacity 1s ease",
            filter: "brightness(0.7) contrast(1.1)",
            opacity: idx === currentImageIndex ? 1 : 0,
            zIndex: idx === currentImageIndex ? 1 : 0,
          }}
          priority={idx === 0}
        />
      ))}
      
      {/* Overlay - Base gradient */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(12, 24, 40, 0.85) 0%, rgba(12, 24, 40, 0.2) 40%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Hover Overlay - Rising background for legibility */}
      <div className="hover-overlay" />

      {/* Content */}
      <div 
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "2rem",
          right: "2rem",
          zIndex: 4,
        }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            background: "var(--gold)",
            marginBottom: "1rem",
          }}
        />
        <h3 
          style={{ 
            fontSize: "1.25rem", 
            margin: 0, 
            color: "var(--white)",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}
        >
          {item.title}
        </h3>
        <p className="interest-desc" style={{ marginTop: "1rem", color: "var(--cream-muted)", fontSize: "0.85rem", lineHeight: 1.6, margin: "1rem 0 0 0" }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Interests() {
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
    <section id="interests" ref={ref} style={{ overflow: "hidden", paddingTop: "3rem" }}>
      <div className="container">
        <h2 className="fade-up fade-up-delay-1" style={{ marginBottom: "1rem" }}>
          Beyond the brief
        </h2>
        <div className="gold-rule fade-up fade-up-delay-2" style={{ marginBottom: "1.5rem" }} />
        <p
          className="fade-up fade-up-delay-2"
          style={{ marginBottom: "3.5rem" }}
        >
          Precision, craft, and a fascination with why people do what they do. Three interests that shape how I see the world and, inevitably, how I approach the work.
        </p>

        <div
          className="interests-strips"
          style={{
            display: "flex",
            height: "500px",
            gap: "1rem",
            width: "100%",
          }}
        >
          {interests.map((item, i) => (
            <InterestStrip key={item.title} item={item} delayIndex={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        .interest-strip:hover {
          flex: 1.4 !important;
          border-color: var(--gold) !important;
        }
        
        .interest-strip:hover .interest-image {
          transform: scale(1.1);
          filter: brightness(0.4) contrast(1.1) !important;
        }

        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(12, 24, 40, 0.98) 0%, rgba(12, 24, 40, 0.8) 40%, transparent 100%);
          z-index: 3;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .interest-strip:hover .hover-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .interest-desc {
          opacity: 0;
          max-height: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .interest-strip:hover .interest-desc {
          opacity: 1;
          max-height: 300px;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .interests-strips {
            flex-direction: column !important;
            height: auto !important;
            gap: 1.5rem !important;
          }
          .interest-strip {
            height: 300px !important;
            flex: none !important;
          }
          .interest-strip:hover {
            flex: none !important;
          }
        }
      `}</style>
    </section>
  );
}
