import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Writing from "./components/Writing";
import Personal from "./components/Personal";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <div style={{ background: "rgba(0,0,0,0.15)" }}>
          <Personal />
          <div className="section-divider" style={{ opacity: 0.3 }} />
          <Interests />
        </div>

        <Writing />
        <div className="section-divider" />
        <Contact />
      </main>
    </>
  );
}
