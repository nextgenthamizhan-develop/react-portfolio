import { education, experience, experienceIntro } from '../data/portfolio'

export default function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Work Experience</h2>
          <p>{experienceIntro}</p>
        </div>
        <div className="timeline reveal">
          {experience.map((job) => (
            <div className="t-item" key={job.company}>
              <div>
                <h3>{job.company}</h3>
                <span className="num">{job.sector}</span>
              </div>
              <p>{job.text}</p>
            </div>
          ))}
        </div>

        <div className="sec-head reveal" style={{ marginTop: '46px' }}>
          <h2>Education</h2>
        </div>
        <div className="edu-grid reveal">
          {education.map((e) => (
            <div className="edu" key={e.title}>
              <span className="num">{e.period}</span>
              <h3>{e.title}</h3>
              <b>{e.school}</b>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
