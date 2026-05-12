import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Link from "next/link";
import styles from "./essay.module.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "When the Territory Becomes the Typeface — Alberto Ferreira",
  description:
    "Brazil's Amazonia identity derived its entire typographic system from 25,000 kilometres of rivers. A brand strategist's analysis of what makes this work — and what premium brands can learn from it.",
  metadataBase: new URL("https://albertoferreira.pt"),
  alternates: {
    canonical: "https://albertoferreira.pt/articles-reflections/amazonia",
  },
  openGraph: {
    title: "When the Territory Becomes the Typeface — Alberto Ferreira",
    description:
      "Brazil's Amazonia identity derived its entire typographic system from 25,000 kilometres of rivers. A brand strategist's analysis of what makes this work.",
    url: "https://albertoferreira.pt/articles-reflections/amazonia",
    siteName: "Alberto Ferreira",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/amazonia1.jpeg",
        width: 1200,
        height: 630,
        alt: "The Amazonia wordmark, whose every letterform traces an actual river path",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "When the Territory Becomes the Typeface — Alberto Ferreira",
    description:
      "Brazil's Amazonia identity derived its entire typographic system from 25,000 kilometres of rivers. A brand strategist's analysis.",
    images: ["/amazonia1.jpeg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "When the territory becomes the typeface: what Amazonia's new identity gets right",
  description:
    "Brazil's new visual identity for the Amazon region derived its entire typographic system from the actual geography of the place — 25,000 kilometres of rivers translated into letterforms.",
  image: "https://albertoferreira.pt/amazonia1.jpeg",
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  author: {
    "@type": "Person",
    name: "Alberto Ferreira",
    url: "https://albertoferreira.pt",
  },
  publisher: {
    "@type": "Person",
    name: "Alberto Ferreira",
    url: "https://albertoferreira.pt",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://albertoferreira.pt/articles-reflections/amazonia",
  },
};

export default function AmazoniaEssay() {
  return (
    <div className={`${cormorant.variable} ${jost.variable} ${styles.essayStandalone}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className={styles.wrap}>
        <Link href="/" className={styles.backLink}>
          ← Back to Site
        </Link>

        <div className={styles.tag}>BRAND IDENTITY</div>

        <h1 className={styles.h1}>
          When the territory becomes the typeface: what <em>Amazonia's</em> new identity gets right
        </h1>

        <div className={styles.meta}>
          <span>Alberto Ferreira</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>April 2026</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>2 min read</span>
        </div>

        <p className={styles.lead}>
          Brazil's new visual identity for the Amazon region did something most
          branding doesn't attempt. It derived its entire typographic system
          from the actual geography of the place, 25,000 kilometres of rivers
          translated into letterforms. The result is a brand that doesn't
          describe its territory. It is made of it.
        </p>

        <div className={styles.imgBlock}>
          <img
            src="/amazonia1.jpeg"
            alt="The Amazonia wordmark, whose every letterform traces an actual river path"
          />
          <div className={styles.caption}>
            The Amazonia wordmark, whose every letterform traces an actual river path.
          </div>
        </div>

        <div className={styles.sectionLabel}>THE CONTEXT</div>

        <div className={styles.bodyText}>
          <p>
            In 2026, amid one of the most saturated periods of global rebranding,
            Brazil unveiled a new identity for the Amazon region that managed to
            do what almost no rebrand does: stop people mid-scroll and generate
            genuine conversation. Not because of a controversy. Not because of a
            celebrity campaign. But because the design itself was undeniably,
            almost inexplicably, <strong>right</strong>.
          </p>
          <p>
            The team behind it studied the river network of the Amazon basin,
            one of the most complex hydrographic systems on Earth, and used
            its curves, confluences, and flow paths as the literal source of
            a custom typeface. Every letter is, in some meaningful way, a river.
            The geographic data became the creative brief. The territory wrote
            the type.
          </p>
        </div>

        <div className={styles.imgBlock}>
          <img
            src="/amazonia2.jpeg"
            alt="Each letter drawn from a different Amazon state river system — Amazonas, Acre, Pará, Roraima"
          />
          <div className={styles.caption}>
            Each letter drawn from a different state's river system: Amazonas, Acre, Pará, Roraima, Tocantins, Rondônia, Maranhão, Amapá.
          </div>
        </div>

        <div className={styles.sectionLabel}>THE SIGNAL</div>

        <div className={styles.bodyText}>
          <p>
            What makes this worth examining isn't the technical feat, although
            that's real. It's the strategic clarity behind it. At a moment when
            every major brand seems to be racing toward the same destination, flat
            logos, monochrome palettes, geometric sans-serifs, the visual
            language of "clean" and "modern", Amazonia went in the opposite
            direction without rejecting modernity at all.
          </p>
          <p>
            The brief was already written. It just needed someone willing to
            read the landscape.
          </p>

          <div className={styles.blockquote}>
            "The most powerful asset was the one they were sitting on, literally 25,000 kilometres of it."
          </div>

          <p>
            The result is something no other brand can replicate. Not because
            it's legally protected (though it is), but because it's <strong>geographically specific</strong>.
            You cannot have the Amazon typeface if you are not the Amazon. That's
            a form of brand equity that no budget can manufacture. And that's
            why thousands of people shared, discussed, and admired it without a
            single dollar of paid promotion behind the conversation.
          </p>
        </div>

        <div className={styles.sectionLabel}>THE LESSON FOR PREMIUM BRANDS</div>

        <div className={styles.bodyText}>
          <p>
            The luxury and premium space has a persistent temptation: modernise.
            Stay relevant. Simplify. And often, that instinct leads brands to
            sand down exactly the details that made them irreplaceable. A
            heritage watchmaker flattens its logo. A regional food brand loses
            its dialect to speak to a "global audience". The result is a brand
            that looks contemporary and means nothing.
          </p>
          <p>
            Amazonia is a useful counter-argument. It didn't treat its origin as
            constraint to work around. It treated it as the most powerful asset
            it had. The identity didn't borrow from what was trending. It mined
            what was already true, what was sitting right there, 25,000
            kilometres of it, visible from above.
          </p>
          <p>
            The most defensible brand identities aren't the most polished.
            They're the most <strong>rooted</strong>. Provenance, when it's
            genuine and visually encoded, not just narrated in a brand film,
            becomes something competitors simply cannot access.
          </p>
        </div>

        <div className={styles.sectionLabel}>THE TAKEAWAY</div>

        <div className={styles.bodyText}>
          <p>
            Thousands of people shared, debated, and admired this identity
            without being prompted by an advertising campaign. That kind of
            organic reach doesn't come from a clever concept. It comes from a
            design that makes people feel something they can't quite articulate,
            the sense that this could not have been done any other way.
          </p>
          <p>
            That's the standard worth chasing. Not the most modern. Not the most
            minimal. The most <strong>inevitable</strong>.
          </p>
        </div>

        <div className={styles.bottomNavContainer}>
          <div className={styles.navButtonWrapper}>
            <Link href="/" className={styles.navButton} aria-label="Back to website" title="Back to website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </Link>
            <span className={styles.navLabel}>Homepage</span>
          </div>

          <div className={styles.authorSection}>
            <div className={styles.authorName}>Article by Alberto Ferreira</div>
            <img
              src="/fotoofme.jpeg"
              alt="Alberto Ferreira — Brand Strategist, Porto Portugal"
              className={styles.authorPhoto}
            />
          </div>

          <div className={styles.navButtonWrapper}>
            <Link href="/articles-reflections/the-person-in-the-room" className={styles.navButton} aria-label="Next article: The person in the room" title="Next article: The person in the room">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <span className={styles.navLabel}>Next Article</span>
          </div>
        </div>
      </div>
    </div>
  );
}
