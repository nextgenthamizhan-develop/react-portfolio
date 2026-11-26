import { useRef, useState } from 'react'
import { contactIntro, profile } from '../data/portfolio'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const MailIcon = (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)
const PhoneIcon = (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" />
  </svg>
)
const PinIcon = (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(null)
  const statusRef = useRef(null)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  // No server on a static page: Send Message opens the visitor's email app
  // with the message pre-filled, and reveals explicit Email / WhatsApp send
  // options as a fallback if no mail app opens — same fix as the HTML page.
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const msg = form.message.trim()
    if (!name || !email || !msg) return
    const text = msg + '\n\n— ' + name + ' (' + email + ')'
    const mailto =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent('New project enquiry from ' + name)}` +
      `&body=${encodeURIComponent(text)}`
    const wa = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`
    setSent({ mailto, wa })
    // Trigger the email app via a link click (more reliable than navigating
    // the page itself, which some embedded browsers block silently).
    const a = document.createElement('a')
    a.href = mailto
    document.body.appendChild(a)
    a.click()
    a.remove()
    requestAnimationFrame(() => {
      if (statusRef.current) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        statusRef.current.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' })
      }
    })
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <h2>Get in Touch</h2>
              <h3 style={{ fontSize: '1.15rem', marginTop: '14px' }}>Let&rsquo;s talk</h3>
              <p>{contactIntro}</p>
            </div>
            <ul className="c-list">
              <li>
                <span className="ic">{MailIcon}</span>
                <span>
                  <b>Email</b>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </span>
              </li>
              <li>
                <span className="ic">{PhoneIcon}</span>
                <span>
                  <b>Phone</b>
                  <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
                </span>
              </li>
              <li>
                <span className="ic">{PinIcon}</span>
                <span>
                  <b>Location</b>
                  <a href={profile.locationUrl} target="_blank" rel="noopener">
                    {profile.location}
                  </a>
                </span>
              </li>
              <li>
                <span className="ic">{LinkedInIcon}</span>
                <span>
                  <b>LinkedIn</b>
                  <a href={profile.linkedInUrl} target="_blank" rel="noopener">
                    {profile.linkedInLabel}
                  </a>
                </span>
              </li>
            </ul>
            <div className="socials">
              <a href={profile.linkedInUrl} target="_blank" rel="noopener" aria-label="LinkedIn">
                {LinkedInIcon}
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                {MailIcon}
              </a>
              <a href={profile.phoneHref} aria-label="Phone">
                {PhoneIcon}
              </a>
              <a
                href={profile.locationUrl}
                target="_blank"
                rel="noopener"
                aria-label="Location — Kilinochchi, Sri Lanka"
              >
                {PinIcon}
              </a>
            </div>
          </div>
          <form className="reveal" onSubmit={handleSubmit}>
            <div className="f-row">
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                />
              </label>
              <label>
                Your Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                />
              </label>
            </div>
            <label>
              Your Message
              <textarea
                name="message"
                placeholder="Tell me about your project…"
                required
                value={form.message}
                onChange={update('message')}
              ></textarea>
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message &rarr;
            </button>
            {sent && (
              <div className="form-status" role="status" aria-live="polite" ref={statusRef}>
                <p>
                  <strong>Your message is ready to send.</strong> Your email app should open
                  with it addressed to me — if it didn&rsquo;t, use one of these:
                </p>
                <div className="status-actions">
                  <a className="btn btn-primary btn-sm" href={sent.mailto}>
                    Open Email App &rarr;
                  </a>
                  <a className="btn btn-wa btn-sm" href={sent.wa} target="_blank" rel="noopener">
                    Send via WhatsApp
                  </a>
                </div>
              </div>
            )}
            <p className="form-note">
              Send Message prepares your message in your email app, addressed to{' '}
              {profile.email} — or send it instantly via WhatsApp after pressing send.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
