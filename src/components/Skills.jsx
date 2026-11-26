import { expertise, techTiles } from '../data/portfolio'

// Colourful technology tile icons, same inline SVGs as the original page.
const tileIcons = {
  HTML5: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 5h30l-2.7 30.2L24 39l-12.3-3.8L9 5Z" fill="#e34f26" />
      <path d="M24 7.6v28.9l9.9-3L36.2 7.6H24Z" fill="#f16529" />
      <text x="24" y="30" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="#fff">5</text>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 5h30l-2.7 30.2L24 39l-12.3-3.8L9 5Z" fill="#1572b6" />
      <path d="M24 7.6v28.9l9.9-3L36.2 7.6H24Z" fill="#33a9dc" />
      <text x="24" y="30" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="#fff">3</text>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="7" y="7" width="34" height="34" rx="5" fill="#f7df1e" />
      <text x="36" y="35" textAnchor="end" fontFamily="Arial,sans-serif" fontSize="15" fontWeight="800" fill="#111">JS</text>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="6" width="21" height="21" rx="7" fill="#3776ab" />
      <rect x="18" y="21" width="21" height="21" rx="7" fill="#ffd343" />
      <circle cx="20" cy="14" r="2.4" fill="#fff" />
      <circle cx="28" cy="34" r="2.4" fill="#fff" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M18 4c-2.2 3.2 2.2 4.4 0 7.6M27 4c-2.2 3.2 2.2 4.4 0 7.6" fill="none" stroke="#f89820" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11 19h23v5a10.5 10.5 0 0 1-10.5 10.5h-2A10.5 10.5 0 0 1 11 24v-5Z" fill="#5382a1" />
      <path d="M34 21h2.5a5 5 0 0 1 0 10H34" fill="none" stroke="#5382a1" strokeWidth="2.6" />
      <path d="M9 41h27" stroke="#f89820" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  ),
  'C++': (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="17" fill="#00599c" />
      <text x="24" y="29" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="800" fill="#fff">C++</text>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="#61dafb" strokeWidth="2">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(120 24 24)" />
      </g>
      <circle cx="24" cy="24" r="3.4" fill="#61dafb" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 5 41 14.5v19L24 43 7 33.5v-19L24 5Z" fill="#339933" />
      <text x="24" y="30" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="800" fill="#fff">N</text>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="13" width="40" height="22" rx="5" fill="#00758f" />
      <text x="24" y="29" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="800" fill="#fff">MySQL</text>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="12.5" y="12.5" width="23" height="23" rx="4" transform="rotate(45 24 24)" fill="#f05033" />
      <path d="M19.5 19.5v9M19.5 24c5.5 0 5-4.5 10-4.5" fill="none" stroke="#fff" strokeWidth="2.2" />
      <circle cx="19.5" cy="19.5" r="2.7" fill="#fff" />
      <circle cx="19.5" cy="28.5" r="2.7" fill="#fff" />
      <circle cx="29.5" cy="19.5" r="2.7" fill="#fff" />
    </svg>
  ),
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const skillIcons = {
  code: (
    <svg {...iconProps}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  ),
  globe: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" />
    </svg>
  ),
  robot: (
    <svg {...iconProps}>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M12 8V4M8 4h8" />
      <circle cx="9.5" cy="13" r="1" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1" fill="currentColor" />
      <path d="M9.5 16.5h5" />
    </svg>
  ),
  chip: (
    <svg {...iconProps}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  ),
  bolt: (
    <svg {...iconProps}>
      <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />
    </svg>
  ),
  bulb: (
    <svg {...iconProps}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  ),
}

export default function Skills() {
  return (
    <section className="alt" id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>My Skills</h2>
          <p>The tools and technologies I work with — from code to circuits to complete automated systems.</p>
        </div>
        <div className="tech-tiles reveal">
          {techTiles.map((name) => (
            <div className="tile" key={name}>
              {tileIcons[name]}
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="skills-grid">
          {expertise.map((s) => (
            <div className="skill reveal" key={s.title}>
              <span className="ic">{skillIcons[s.icon]}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
