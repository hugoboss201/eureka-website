import { useState, useEffect } from "react";
import { Menu, X, InstagramIcon } from "lucide-react";
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

  const verifyAge = () => {
    localStorage.setItem("eureka-age-verified", "true");
    setShowAgeGate(false);
  };

  return (
    <>
      {showAgeGate && (
        <div className="ageGate">
          <div className="ageBox">
            <h1>Eureka</h1>
            <p>Premium Top Shelf Indoor</p>
            <h2>Are you 21 or older?</h2>

            <button onClick={verifyAge}>Enter Site</button>

            <button
              className="exit"
              onClick={() => (window.location.href = "https://google.com")}
            >
              Exit
            </button>
          </div>
        </div>
      )}

      <header>
        <div className="logo">
          Eureka<span>Top Shelf</span>
        </div>

        <nav className={menuOpen ? "open" : ""}>
          <a href="#drops" onClick={() => setMenuOpen(false)}>Drops</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#wholesale" onClick={() => setMenuOpen(false)}>Wholesale</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Premium Top Shelf Indoor</p>
          <h1>Elevate Your Standards</h1>
          <p>Luxury cannabis drops. Premium flower. Iconic presentation.</p>
          <a href="#drops" className="btn">Explore Drops</a>
        </div>
      </section>

      <section id="drops" className="section">
        <h2>Iconic Drops</h2>
        <p className="sub">Premium. Potent. Iconic.</p>

        <img
          src={iconicDropImg}
          className="iconicImg"
          alt="Eureka Iconic Drops"
        />

        <div className="cards">
          <Drop title="The OG" text="The one that started it all." color="green" />
          <Drop title="Zaza" text="Bold. Exotic. Unforgettable." color="pink" />
          <Drop title="93 Octane" text="High octane. Heavy hitter." color="gold" />
          <Drop title="VSOP" text="Very special. Overpowering." color="purple" />
        </div>
      </section>

      <section id="shop" className="section dark">
        <h2>Shop Categories</h2>

        <div className="shopGrid">
          <Category name="Flower" />
          <Category name="Disposables" />
          <Category name="Concentrates" />
          <Category name="Edibles" />
          <Category name="Merch" />
          <Category name="Limited Drops" />
        </div>
      </section>

      <section id="wholesale" className="section wholesale">
        <h2>Wholesale Inquiries</h2>
        <p>
          Interested in carrying Eureka? Contact us for pricing, availability,
          and upcoming drops.
        </p>
        <a href="mailto:info@topshelfeureka.com" className="btn">
          Contact Wholesale
        </a>
      </section>

      <section id="about" className="section">
        <h2>About Eureka</h2>
        <p className="aboutText">
          Eureka represents premium top shelf indoor cannabis with a focus on
          quality, presentation, and unforgettable drops.
        </p>
      </section>

      <footer id="contact">
        <h3>Eureka</h3>
        <p>Premium Top Shelf Indoor</p>

        <a
          href="https://instagram.com/topshelfeureka"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon size={18} /> @TopShelfEureka
        </a>

        <small>© 2026 TopShelfEureka.com. 21+ only.</small>
      </footer>
    </>
  );
}

function Drop({ title, text, color }) {
  return (
    <div className={`card ${color}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Category({ name }) {
  return <div className="category">{name}</div>;
}
