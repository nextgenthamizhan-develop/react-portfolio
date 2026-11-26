import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Highlight the nav link for the section currently in view,
  // same behaviour as the original page's IntersectionObserver script.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div className="wrap">
        <div className="nav">
          <a className="brand" href="#home">
            <span className="code">&lt;/&gt;</span>
            <span>
              {profile.brandName}
              <small>{profile.brandSub}</small>
            </span>
          </a>
          <nav className="main" aria-label="Main">
            <ul>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={active === id ? 'active' : undefined}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-primary btn-sm nav-cta" href="#contact">
            Let&rsquo;s Talk
          </a>
          <button
            className="burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu" onClick={closeMenu}>
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
          <a href="#contact" style={{ color: 'var(--violet-2)' }}>
            Let&rsquo;s Talk &rarr;
          </a>
        </div>
      </div>
    </header>
  )
}
