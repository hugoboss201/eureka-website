import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import iconicDropImg from './9BD848B0-CDF2-4F3C-B58D-08B2B5E1BD28.png' 

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [showAgeGate, setShowAgeGate] = useState(true)

  // Checks if the user already verified their age earlier
  useEffect(() => {
    const ageVerified = localStorage.getItem('eureka-age-verified')
    if (ageVerified === 'true') {
      setIsVerified(true)
      setShowAgeGate(false)
    }
  }, [])

  // Action if they confirm they are 21+
  const handleVerifyAge = () => {
    localStorage.setItem('eureka-age-verified', 'true')
    setIsVerified(true)
    setShowAgeGate(false)
  }

  // Action if they fail / exit
  const handleExit = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <>
      {/* AGE VERIFICATION POPUP SCREEN */}
      {showAgeGate && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 99999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          color: '#fff',
          fontFamily: 'sans-serif',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '400px',
            backgroundColor: '#16161a',
            padding: '40px 30px',
            borderRadius: '16px',
            border: '1px solid #24242b',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '1px' }}>
              EUREKA
            </div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#a1a1aa', letterSpacing: '2px', marginBottom: '30px' }}>
              Top Shelf
            </div>
            
            <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Age Verification Required</h2>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.5', marginBottom: '30px' }}>
              You must be 21 years of age or older to enter this site. Please verify your age to proceed.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={handleVerifyAge}
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
              >
                I am 21 or Older
              </button>
              <button 
                onClick={handleExit}
                style={{
                  backgroundColor: 'transparent',
                  color: '#71717a',
                  border: '1px solid #24242b',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN WEBSITE NAVIGATION */}
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
        <div style={{ marginBottom: '20px' }}>
          <a 
            href="https://instagram.com/Topshelfeureka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '10px 20px',
              textDecoration: 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow us on Instagram
          </a>
        </div>

        <p>&copy; 2026 Eureka. All rights reserved.</p>
        <p>Premium Top Shelf Indoor Cannabis</p>
      </footer>
    </>
  )
}

export default App
