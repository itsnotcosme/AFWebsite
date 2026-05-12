import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Link from "next/link";
import styles from "../amazonia/essay.module.css";

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
  title: "The Person in the Room: Staff Expertise as Brand Strategy — Alberto Ferreira",
  description:
    "76% of luxury customers say staff expertise shapes brand engagement more than any other factor. Alberto Ferreira analyses what Accenture's Luxe Eternal 2026 means for luxury brand strategy.",
  metadataBase: new URL("https://albertoferreira.pt"),
  alternates: {
    canonical: "https://albertoferreira.pt/articles-reflections/the-person-in-the-room",
  },
  openGraph: {
    title: "The Person in the Room: Staff Expertise as Brand Strategy — Alberto Ferreira",
    description:
      "76% of luxury customers say staff expertise shapes brand engagement more than any other factor. What Accenture's Luxe Eternal 2026 means for luxury brand strategy.",
    url: "https://albertoferreira.pt/articles-reflections/the-person-in-the-room",
    siteName: "Alberto Ferreira",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/hermes.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury boutique environment illustrating the role of staff expertise in brand experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Person in the Room: Staff Expertise as Brand Strategy — Alberto Ferreira",
    description:
      "76% of luxury customers say staff expertise shapes brand engagement more than any other factor. What this means for luxury brand strategy.",
    images: ["/hermes.jpeg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The person in the room: why staff expertise is a brand strategy question",
  description:
    "Accenture's Luxe Eternal 2026 puts a number to what most luxury brands already sense but rarely act upon: 76% of customers say staff expertise shapes their brand engagement more than any other factor.",
  image: "https://albertoferreira.pt/hermes.jpeg",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
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
    "@id": "https://albertoferreira.pt/articles-reflections/the-person-in-the-room",
  },
};

export default function PersonInTheRoomEssay() {
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

        <div className={styles.tag}>Brand Experience</div>

        <h1 className={styles.h1}>
          The person in the room: why staff expertise is a brand strategy question
        </h1>

        <div className={styles.meta}>
          <span>Alberto Ferreira</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>April 2026</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>2 min read</span>
        </div>

        <p className={styles.lead}>
          In any luxury boutique, the most consequential moment before a purchase isn&apos;t the object under the light. It&apos;s the conversation that determined which object appeared there at all.
        </p>

        <div className={styles.bodyText}>
          <p>
            Accenture&apos;s <em>Luxe Eternal 2026</em> put a number to what that moment is worth. Seventy-six percent of luxury customers say staff expertise shapes their brand engagement more than any other factor measured. It is the kind of finding that tends to outlast the report containing it.
          </p>
        </div>

        <div className={styles.imgBlock}>
          <img
            src="/hermes.jpeg"
            alt="Luxury boutique environment illustrating the role of staff expertise in brand experience"
          />
          <div className={styles.caption}>Source: Louis Vuitton</div>
        </div>

        <div className={styles.sectionLabel}>The context</div>

        <div className={styles.bodyText}>
          <p>
            The finding sits inside a broader story the industry knows well. Luxury remains financially resilient despite tariffs, uneven demand, and a contracting Chinese market. But loyalty is becoming harder to earn. Half of customers now feel brands have become more profit-driven than dream-making. A third find them less distinctive. A third see value declining.
          </p>
          <p>
            The industry has responded with energy. Sixty percent of leading houses changed creative leadership within eighteen months, a near-simultaneous search for renewed relevance expressed through new aesthetic directions, reimagined retail concepts, and reset visual identities. These are serious investments made by serious people. They address what is visible. They are less equipped to address what is felt.
          </p>
        </div>

        <div className={styles.sectionLabel}>Where meaning is made</div>

        <div className={styles.bodyText}>
          <p>
            Luxury operates on two registers at once. There is the functional object and there is everything the object means: the provenance, the scarcity, the signal it sends about the person who carries it. Brand strategy in luxury is, at its core, the management of that second register.
          </p>
          <p>
            What the Accenture data makes visible is that this second register is not delivered by any single element of the brand system. It is assembled across all of them. The campaign contributes. The object itself contributes. The architecture of the boutique contributes. And the human encounter, the moment a client is received, read, and responded to by another person, contributes in ways that the data now makes difficult to ignore.
          </p>
        </div>

        <div className={styles.blockquote}>
          &ldquo;The person behind the counter is not a neutral intermediary between the client and the product. They are a living expression of the house&apos;s values.&rdquo;
        </div>

        <div className={styles.bodyText}>
          <p>
            When they read a client correctly, when they anticipate rather than react, when they respond with the kind of unhurried attention that signals genuine knowledge, they are doing something no campaign can replicate on its own: transferring meaning in real time, between two people, in a moment that will not repeat.
          </p>
          <p>
            Customers feel this acutely. The 76% are not rating friendliness. They are saying that the quality of human expertise they encounter determines how they feel about the brand itself. The staff member is not a service channel. They are a symbolic cue, operating within the same brand system as every visual and material decision the house makes.
          </p>
        </div>

        <div className={styles.imgBlock}>
          <img
            src="/buinessman.jpg"
            alt="A professional in a luxury retail context — representing the relational artisan concept"
          />
          <div className={styles.caption}>Source: Hermès</div>
        </div>

        <div className={styles.sectionLabel}>An opportunity the data points toward</div>

        <div className={styles.bodyText}>
          <p>
            Accenture introduces a concept toward the end of the report that points in a compelling direction. The <strong>relational artisan</strong>: a client-facing figure who translates house values into lived moments, surfaces emerging client signals, and feeds those realities back into creative direction. Not a sales advisor operating a script. A curator of meaning, positioned at the closest point to the client.
          </p>
          <p>
            It is the most original idea in the report, and the one with the longest implications.
          </p>
          <p>
            Houses have invested with extraordinary care in two things: the object and the environment. Craft, architecture, visual identity, retail experience. These investments are visible, considered, and legible to the market. The person operating within that environment has been trained with equal seriousness in the best houses, but the industry now has data suggesting that elevating this role further, treating client-facing expertise as a primary driver of brand desirability rather than a support function surrounding it, represents one of the clearest opportunities available.
          </p>
          <p>
            The metrics, however, have not yet caught up. Conversion remains the dominant measure of client-facing performance. What the relational artisan concept asks for is a different kind of accounting: one that captures depth of engagement, continuity of relationship, and the quality of the encounter itself. These are harder to measure. They are not harder to value.
          </p>
        </div>

        <div className={styles.sectionLabel}>The takeaway</div>

        <div className={styles.bodyText}>
          <p>
            Luxury has always known that an object can carry more meaning than its function justifies. What this data suggests is that the person presenting that object is part of the same symbolic system, not a support function surrounding it. The houses that bring the same intentionality to the human encounter that they bring to craft and design will find something the current wave of creative resets cannot deliver on its own: a loyalty that holds precisely because it was built between people, not just between a customer and a logo.
          </p>
        </div>

        <div className={styles.divider}></div>

        <p className={styles.bylineFooter}>
          Alberto Ferreira writes on brand strategy, consumer psychology, and the luxury industry. This essay is part of the <em>Articles &amp; Reflections</em> series.
        </p>

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
            <Link href="/articles-reflections/amazonia" className={styles.navButton} aria-label="Next article: When the territory becomes the typeface" title="Next article: When the territory becomes the typeface">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </Link>
            <span className={styles.navLabel}>Next Article</span>
          </div>
        </div>
      </div>
    </div>
  );
}
