import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import heroImg from "./2E3F6D1B-8239-4B0E-947F-D3774BD5040D.PNG";
import iconicDropImg from "./9BD848B0-CDF2-4F3C-B58D-08B2B5E1BD28.png";
import logo from "./eureka-logo.svg";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (localStorage.getItem("eureka-age-verified") === "true") {
      setShowAgeGate(false);
    }
  }, []);

  const enterSite = () => {
    localStorage.setItem("eureka-age-verified", "true");
    setShowAgeGate(false);
  };

  const goHome = () => {
    setPage("home");
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
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
            <p className="ageCopy">You must be of legal age to enter this website.</p>
            <button onClick={enterSite} className="ageEnter">Enter Site</button>
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
        <button className="brand brandButton" onClick={goHome}>
          <img src={logo} alt="Eureka" className="navLogo" />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#drops" onClick={() => { setPage("home"); setMenuOpen(false); }}>Drops</a>
          <a href="#flower" onClick={() => { setPage("home"); setMenuOpen(false); }}>Flower</a>
          <button className="navLink" onClick={() => { setPage("merch"); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Apparel
          </button>
          <a href="#wholesale" onClick={() => { setPage("home"); setMenuOpen(false); }}>Wholesale</a>
          <a href="#about" onClick={() => { setPage("home"); setMenuOpen(false); }}>About</a>
          <a href="#contact" onClick={() => { setPage("home"); setMenuOpen(false); }}>Contact</a>
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
        {page === "home" && (
          <>
            <section id="home" className="hero">
              <img src={heroImg} alt="Eureka Premium Top Shelf Indoor" className="heroImage" />
            </section>

            <section id="drops" className="section dropsSection">
              <div className="sectionHead">
                <p className="eyebrow">Limited Release Collection</p>
                <h2>Iconic Drops</h2>
                <p>The drops that define Eureka — bold visuals, heavy quality, unforgettable energy.</p>
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
                <p>Interested in carrying Eureka? Reach out for availability, pricing, and upcoming release information.</p>

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
              <div className="aboutHeader">
                <p className="eyebrow">The Brand</p>
                <img src={logo} alt="Eureka" className="aboutLogo" />
              </div>

              <p>
                Eureka is committed to cultivating top-shelf indoor flower with
                unmatched quality, consistency, and care. Every batch is grown
                organically and with precision to deliver the experience you deserve.
              </p>
            </section>
          </>
        )}

        {page === "merch" && (
          <section id="merch" className="section merchSection merchPage">
            <div className="merchHero">
              <img src={logo} alt="Eureka" className="merchHeroLogo" />
              <p className="eyebrow">Apparel & Accessories</p>
              <h2>Built For The Culture</h2>
              <p>
                Premium streetwear, LED rolling trays, and ashtrays crafted for the Eureka lifestyle.
              </p>

              <button className="btn primary" onClick={goHome}>
                Back Home
              </button>
            </div>

            <div className="merchGrid">
              <MerchCard title="Eureka Shirts" type="Apparel" status="Available Soon" />
              <MerchCard title="LED Rolling Trays" type="Accessories" status="Coming Soon" />
              <MerchCard title="Premium Ashtrays" type="Accessories" status="Coming Soon" />
            </div>
          </section>
        )}
      </main>

      <footer id="contact">
        <img src={logo} alt="Eureka" className="footerLogo" />

        <a href="https://instagram.com/topshelfeureka" target="_blank" rel="noreferrer">
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

function MerchCard({ title, type, status }) {
  return (
    <div className="merchCard">
      <span>{type}</span>
      <h3>{title}</h3>
      <p>{status}</p>
      <button>View Item</button>
    </div>
  );
}
