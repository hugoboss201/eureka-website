import { Menu } from 'lucide-react'
import { useState } from 'react'
// This points exactly to your uploaded iPhone image filename
import iconicDropImg from './9BD848B0-CDF2-4F3C-B58D-08B2B5E1BD28.png' 

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="brand">
          <span>Eureka</span>
          <small>Top Shelf</small>
        </div>
        <nav className={menuOpen ? 'show' : ''}>
          <a href="#iconic">Iconic Drops</a>
          <a href="#features">Features</a>
          <a href="#wholesale">Wholesale</a>
          <a href="#about">About</a>
        </nav>
        <button className="hamb" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="glow"></div>
        <div>
          <p className="eyebrow">Premium Top Shelf</p>
          <h1>Iconic Drops</h1>
          <p className="lead">Elevate your standards with Eureka's most sought-after strains</p>
          <div className="actions">
            <button className="btn primary">Explore Drops</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Iconic Drops Section */}
      <section id="iconic" className="section">
        <div className="section-title">
          <h2>Iconic Drops Collection</h2>
        </div>
        {/* Displays your image */}
        <img src={iconicDropImg} alt="Iconic Drops" className="drop-img" />
        
        <div className="cards">
          <div className="card green">
            <span>The OG</span>
            <h3>The One</h3>
            <p>That started it all</p>
          </div>
          <div className="card pink">
            <span>Zaza</span>
            <h3>Bold & Exotic</h3>
            <p>Unforgettable experience</p>
          </div>
          <div className="card gold">
            <span>93 Octane</span>
            <h3>High Octane</h3>
            <p>Heavy hitter</p>
          </div>
          <div className="card purple">
            <span>VSOP</span>
            <h3>Very Special</h3>
            <p>Overpowering</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="grid2">
          <div>
            <h2>Why Choose Eureka?</h2>
            <p>Premium quality, hand-selected small batch production with consistent excellence. Each drop represents our commitment to elevating your standards.</p>
          </div>
          <div className="feature-list">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20m-7-7h14"></path>
              </svg>
              <b>Top Shelf</b>
              <p>Premium indoor flower</p>
            </div>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <b>Rich Trichomes</b>
              <p>Frosty, sticky, potent</p>
            </div>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20"></path>
              </svg>
              <b>Small Batch</b>
              <p>Hand selected & consistent</p>
            </div>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <b>Authentic</b>
              <p>Real flower, real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="wholesale section">
        <h2>Wholesale Inquiries</h2>
        <p>Ready to stock Eureka? Contact us for wholesale pricing and distribution opportunities.</p>
        <button className="btn primary" style={{marginTop: '20px'}}>Get in Touch</button>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <h2>About Eureka</h2>
        <p>Eureka represents the pinnacle of cannabis cultivation. We combine expert growing techniques with premium genetics to deliver products that elevate your standards.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Eureka. All rights reserved.</p>
        <p>Premium Top Shelf Indoor Cannabis</p>
      </footer>
    </>
  )
}

export default App
