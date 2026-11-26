import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <p className="hello">Hello, I&rsquo;m</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects &rarr;
            </a>
            <a className="btn btn-ghost" href="#contact">
              Connect With Me
            </a>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-photo">
          <div className="blob" aria-hidden="true"></div>
          <img src="/assets/profile.png" alt="Portrait of Sooriyapalan Thanujan" />
        </div>
      </div>
    </div>
  )
}
