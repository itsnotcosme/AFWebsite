"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal — attaches an IntersectionObserver to a section ref.
 * Elements inside the ref that carry a 'reveal' class will receive
 * the 'visible' class when they enter the viewport.
 *
 * Usage:
 *   const ref = useReveal();
 *   <section ref={ref}>
 *     <p className="reveal reveal-up delay-1">Hello</p>
 *   </section>
 */
export function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            // Unobserve after reveal — no reverse flicker
            observer.unobserve(e.target);
          }
        });
      },
      { threshold }
    );

    const el = ref.current;
    if (!el) return;

    el.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useParallax — drives a mild parallax offset on the hero background.
 * Pass the ref of the element whose style.transform you want to update.
 *
 * Usage:
 *   const bgRef = useParallax(0.3);
 *   <div ref={bgRef} style={{ backgroundImage: 'url(...)' }} />
 */
export function useParallax(speed = 0.25) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const offset = window.scrollY * speed;
        ref.current.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
