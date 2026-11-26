import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>{profile.footerText}</span>
        <a href={profile.linkedInUrl} target="_blank" rel="noopener">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
