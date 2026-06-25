
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import heroImg from "./2E3F6D1B-8239-4B0E-947F-D3774BD5040D.jpg";
import iconicDropImg from "./9BD848B0-CDF2-4F3C-B58D-08B2B5E1BD28.png";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("eureka-age-verified") === "true") {
      setShowAgeGate(false);
    }
  }, []);

  const enterSite = () => {
    localStorage.setItem("eureka-age-verified", "true");
    setShowAgeGate(false);
  };

  return (
    <>
      {showAgeGate && (
        <div className="ageGate">
          <div className="ageBox">
            <p className="miniText">TopShelfEureka.com</p>
            <h1>EUREKA</h1>
            <p className="ageSub">Premium Top Shelf Indoor</p>
            <h2>Are you 21+?</h2>
            <p className="ageCopy">
              You must be of legal age to enter this website.
            </p>

            <button onClick={enterSite} className="ageEnter">
              Enter Site
            </button>

            <button
              className="ageExit"
              onClick={() => (window.location.href = "https://google.com")}
            >
              Exit
            </button>
          </div>
        </div>
      )}

      <header className="siteHeader">
        <a href="#" className="brand">
          <span>EUREKA</span>
          <small>Top Shelf Indoor</small>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#drops" onClick={() => setMenuOpen(false)}>Drops</a>
          <a href="#flower" onClick={() => setMenuOpen(false)}>Flower</a>
          <a href="#wholesale" onClick={() => setMenuOpen(false)}>Wholesale</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <main>
        <section className="hero">
          <img src={heroImg} alt="Top Shelf Eureka Hero" className="heroImage" />
        </section>

        <section id="drops" className="section dropsSection">
          <div className="sectionHead">
            <p className="eyebrow">Limited Release Collection</p>
            <h2>Iconic Drops</h2>
            <p>
              The drops that define Eureka — bold visuals, heavy quality,
              unforgettable energy.
            </p>
          </div>

          <div className="showcaseFrame">
            <img src={iconicDropImg} alt="Eureka Iconic Drops" />
          </div>

          <div className="dropGrid">
            <DropCard number="01" title="The OG" tag="Classic" text="The one that started it all." color="green" />
            <DropCard number="02" title="Zaza" tag="Exotic" text="Bold flavor, loud aroma, unforgettable smoke." color="pink" />
            <DropCard number="03" title="93 Octane" tag="Gas" text="High octane pressure with a heavy finish." color="gold" />
            <DropCard number="04" title="VSOP" tag="Reserve" text="Very special. Very potent. Very Eureka." color="purple" />
          </div>
        </section>

        <section id="flower" className="section flowerSection">
          <div className="sectionHead">
            <p className="eyebrow">Built Different</p>
            <h2>Premium Indoor</h2>
          </div>

          <div className="featureGrid">
            <Feature title="Small Batch" text="Curated drops with attention to detail." />
            <Feature title="Top Shelf Quality" text="Premium indoor flower with standout presentation." />
            <Feature title="Iconic Branding" text="Luxury packaging and memorable releases." />
            <Feature title="Wholesale Ready" text="Built for serious buyers and distributors." />
          </div>
        </section>

        <section id="wholesale" className="section wholesaleSection">
          <div className="wholesaleCard">
            <p className="eyebrow">Distribution</p>
            <h2>Wholesale Inquiries</h2>
            <p>
              Interested in carrying Eureka? Reach out for availability,
              pricing, and upcoming drop information.
            </p>

            <form className="contactForm">
              <input placeholder="Name" />
              <input placeholder="Business Name" />
              <input placeholder="Email" />
              <input placeholder="Phone" />
              <textarea placeholder="Tell us what you’re looking for"></textarea>
              <button type="button" className="btn primary">Submit Inquiry</button>
            </form>
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <div>
            <p className="eyebrow">The Brand</p>
            <h2>Eureka Energy</h2>
          </div>

          <p>
            Eureka is a premium cannabis brand focused on top shelf indoor
            quality, luxury presentation, and iconic limited drops. Every
            release is designed to feel exclusive, collectible, and instantly
            recognizable.
          </p>
        </section>
      </main>

     <footer id="contact">
  <h3>EUREKA</h3>
  <p>Premium Top Shelf Indoor</p>

  <a
    href="https://instagram.com/topshelfeureka"
    target="_blank"
    rel="noreferrer"
  >
    @TopShelfEureka
  </a>

  <small>© 2026 TopShelfEureka.com. 21+ only.</small>
</footer>
    </>
  );
}

function DropCard({ number, title, tag, text, color }) {
  return (
    <div className={`dropCard ${color}`}>
      <div className="dropTop">
        <span>{number}</span>
        <b>{tag}</b>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button>View Drop</button>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="featureCard">
      <span></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
