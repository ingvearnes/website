import pictureOfMeg from './assets/meg.jpg'
import cLogo from './assets/C.webp'
import dockerLogo from './assets/docker.png'
import javascriptLogo from './assets/javascript.webp'
import mysqlLogo from './assets/mysql.svg'
import nodejsLogo from './assets/nodejs.webp'
import rustLogo from './assets/rust.jpg'
import './App.css'

const heroLogos = [
  { name: 'C', image: cLogo, x: '0%', y: '18%' },
  { name: 'Docker', image: dockerLogo, x: '25%', y: '0%' },
  { name: 'JavaScript', image: javascriptLogo, x: '75%', y: '0%' },
  { name: 'MySQL', image: mysqlLogo, x: '100%', y: '18%' },
  { name: 'Node.js', image: nodejsLogo, x: '0%', y: '64%' },
  { name: 'Rust', image: rustLogo, x: '100%', y: '64%' },
].map((logo) => {
  // Choose once per page load so re-renders don't change an orbit mid-flight.
  const duration = 36 + Math.random() * 16
  const radiusX = 58 + Math.random() * 4
  const radiusY = 12 + Math.random() * 12
  const centerY = 22 + Math.random() * 16
  const tilt = (Math.random() - 0.5) * 16
  const orbitStyle = {
    '--orbit-duration': `${duration}s`,
    '--orbit-delay': `${-Math.random() * duration}s`,
    '--orbit-direction': Math.random() < 0.5 ? 'normal' : 'reverse',
  }

  for (let point = 0; point < 8; point += 1) {
    const angle = point * Math.PI / 4
    orbitStyle[`--orbit-x-${point}`] = `${50 - Math.cos(angle) * radiusX}%`
    orbitStyle[`--orbit-y-${point}`] = `${centerY + Math.sin(angle) * radiusY + Math.cos(angle) * tilt}%`
  }

  return { ...logo, orbitStyle }
})

const profile = {
  name: 'Ingve Værnes',
  monogram: 'IV',
  title: 'Student hos Norges Tekniske- Naturvitenskaplige universitet',
  location: 'Trondheim, Norge',
  email: 'ingve09@gmail.com',
  github: 'https://github.com/ingvearnes?tab=stars',
  introduction: 'Med grad som dataingeniør i systemutvikling bidrar jeg med utvikling av systemer og vedlikeholdet av dem. Sikkerhet, nettverk og maskinlæring er interesseområder jeg også har erfaring i.'
}

const expertise = [
  { number: '01', title: 'Systemutvikling', description: 'Språk: C, C++, Java, Javascript, Rust og mer. Elementær maskinlæring' },
  { number: '02', title: 'Nettverk og sikkerhet', description: 'JavaScript med framework som Vue og React med Node.js. Kunnskap om cybersikkerhet' },
  { number: '03', title: 'Tilleggskunnskap', description: 'Emner i statsvitenskap, økonomi og regnskapsføring, og menneske-maskin-design' },
]

const experience = [
  { period: '2024 — nåtid', role: 'Dataingeniør', company: 'NTNU', location: 'Trondheim, Norge', detail: 'Vært i referansegrupper i emner IDATT2003, IDATT2104 og IELET2002' },
  { period: '2023 — 2024', role: 'Informatikk', company: 'NTNU', location: 'Trondheim, Norge', detail: 'Verv innenfor abakusrevyen og gløshaugen revy- og teaterlag' },
]


function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.5" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M3 12h17m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
  )
}

function App() {
  return (
    <div className="site-shell" id="top">
      <div className="topline"><span>Nettside-portefølje</span><span>Laget for arbeidsgivere</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={profile.name + ', back to top'}>
          <span className="brand-mark">{profile.monogram}<span className="brand-dot">.</span></span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">Om meg</a>
          <a href="#expertise">Ekspertise</a>
          <a href="#experience">Utdanning</a>
          <a href="#contact">Kontakt</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <a className="header-link" href={'mailto:' + profile.email}>Mail <ArrowIcon diagonal /></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Porteføljen / {new Date().getFullYear()}</p>
            <h1 id="hero-title">Min portefølje:<br /><em>Ingve Værnes</em></h1>
            <p className="hero-subtitle">{profile.title}</p>
            <p className="hero-description">Ingen utfordinger for store, ingen hindringer umulige</p>
            <a className="text-link" href="#about">Om meg <ArrowIcon /></a>
            <div className="hero-index"><span>01 / 04</span><span>Skråll nedover ↓</span></div>
          </div>
          <div className="hero-visual">
            <img src={pictureOfMeg} alt="Portrett av Ingve Værnes" />
            <div className="hero-logos" role="group" aria-label="Teknologier jeg bruker">
              {heroLogos.map((logo) => (
                <div
                  className="hero-logo-position"
                  key={logo.name}
                  style={{ '--logo-x': logo.x, '--logo-y': logo.y, ...logo.orbitStyle }}
                >
                  <div className="hero-logo-float">
                    <div className="hero-logo" tabIndex={0} aria-label={logo.name}>
                      <img src={logo.image} alt="" />
                      <span className="hero-logo-label" aria-hidden="true">{logo.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-image-caption"><span>Ingve Værnes</span><span>Trondheim, Norge</span></div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-side"><span className="section-number">01 / Om meg</span></div>
          <div className="about-content">
            <h2 id="about-title">Som datamaskinspesialist</h2>
            <div className="about-bottom">
              <p>{profile.introduction}</p>
              <div className="about-meta"><span>Lokasjon</span><strong>{profile.location}</strong></div>
            </div>
          </div>
        </section>

        <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
          <div className="section-wrap expertise-inner">
            <div className="section-heading-row">
              <span className="section-number">02 / Ekspertise</span>
              <div><p className="eyebrow">Hva jeg bringer av verdi</p><h2 id="expertise-title">Hva jeg har lært gjennom årene</h2></div>
            </div>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <article className="expertise-card" key={item.number}>
                  <span className="card-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading-row experience-heading">
            <span className="section-number">03 / Utdanning</span>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <span className="experience-period">{item.period}</span>
                <div className="experience-main"><h3>{item.role}</h3><p>{item.company} <span className="small-divider">/</span> {item.location}</p></div>
                <p className="experience-detail">{item.detail}</p>
              </article>
            ))}
          </div>

        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div className="contact-top"><span className="section-number">04 / Kontakt</span><span>Ta kontakt med meg!</span></div>
            <h2 id="contact-title">Jeg er sikker på dere vil trives med meg på laget</h2>
            <div className="contact-links">
              <a className="contact-link" href={'mailto:' + profile.email}>{profile.email}<ArrowIcon diagonal /></a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/ingvearnes<ArrowIcon diagonal /></a>
            </div>
            <div className="contact-bottom"><span>{profile.name} · {profile.title}</span><a href="#top">Back to top ↑</a></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
