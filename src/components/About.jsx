import { aboutParagraphs, highlights } from '../data/portfolio'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const icons = {
  pin: (
    <svg {...iconProps}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  cap: (
    <svg {...iconProps}>
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      <path d="M22 9v5" />
    </svg>
  ),
  award: (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </svg>
  ),
  lang: (
    <svg {...iconProps}>
      <path d="M5 8h9M8 5v3c0 3-2 6-4 7M6.5 11c1 2.5 3.4 4.8 6 5.5" />
      <path d="m12.5 21 4.5-10 4.5 10M13.8 17.5h6.4" />
    </svg>
  ),
  heart: (
    <svg {...iconProps}>
      <path d="M19.5 12.6 12 20l-7.5-7.4A5.2 5.2 0 1 1 12 6.3a5.2 5.2 0 1 1 7.5 6.3Z" />
    </svg>
  ),
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo reveal">
            <img
              src="/assets/about.jpg"
              alt="Sooriyapalan Thanujan standing with arms crossed, wearing a blue SLPA polo shirt"
            />
          </div>
          <div className="about-text reveal">
            <p>
              I am <strong>Sooriyapalan Thanujan</strong>, a passionate Mechatronics and Software
              Engineering professional with experience in automation, embedded systems, robotics,
              web development &amp; software development. I enjoy building smart solutions that
              combine software and engineering to solve real-world problems.
            </p>
            <p>{aboutParagraphs[1]}</p>
          </div>
          <ul className="highlights reveal">
            {highlights.map((h) => (
              <li key={h.title}>
                <span className="ic">{icons[h.icon]}</span>
                <span>
                  <b>{h.title}</b>
                  <span>{h.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
