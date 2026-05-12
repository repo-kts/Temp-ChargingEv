import { useEffect, useState } from 'react'

export default function App() {
  const [time, setTime] = useState(() => formatTime(new Date()))
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top" aria-label="TrioEv home">
          <img src="/logo.svg" alt="TrioEv" className="brand__logo" />
        </a>
        <div className="nav__status">
          <span className="dot" />
          <span>STATUS · PRE-LAUNCH</span>
        </div>
        <div className="nav__time">{time}</div>
      </header>

      <main className="hero" id="top">
        <div className="hero__eyebrow">
          <span className="hero__rule" />
          <span>A New Electric Charging Network</span>
          <span className="hero__rule" />
        </div>

        <h1 className="hero__title">
          <span className="hero__line">Coming</span>
          <span className="hero__line hero__line--italic">
            soon<span className="hero__dot">.</span>
          </span>
        </h1>

        <p className="hero__tagline">
          Fast, clean, quietly powerful — we're building the charging<br className="br-lg" />
          experience drivers actually want.
        </p>

        <form className="signup" onSubmit={handleSubmit}>
          <div className="signup__row">
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup__input"
            />
            <button type="submit" className="signup__btn" aria-label="Notify me at launch">
              {submitted ? 'Added ✓' : (
                <>
                  Notify me
                  <Arrow />
                </>
              )}
            </button>
          </div>
          <span className="signup__hint">
            {submitted ? "Thanks — we'll be in touch the moment we go live." : 'No spam. One email at launch.'}
          </span>
        </form>

        <Seal />

        <div className="hero__foot">
          <div className="hero__foot-col">
            <span className="hero__foot-label">Index</span>
            <span className="hero__foot-value">N°001 / 2026</span>
          </div>
          <div className="hero__foot-col hero__foot-col--progress">
            <div className="progress__head">
              <span>Build progress</span>
              <span>37%</span>
            </div>
            <div className="progress__track">
              <div className="progress__bar" />
            </div>
          </div>
          <div className="hero__foot-col hero__foot-col--right">
            <span className="hero__foot-label">Domain</span>
            <span className="hero__foot-value">charging.trioev.com</span>
          </div>
        </div>
      </main>

      <section className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="marquee__item">
              Charging the future <Spark /> Trio·EV <Spark /> Drive smart. Go green. <Spark />
            </span>
          ))}
        </div>
      </section>

      <section className="trio">
        <p className="trio__kicker">— THREE PILLARS —</p>
        <h2 className="trio__heading">
          Built on three things<br />we won't compromise on.
        </h2>
        <div className="trio__grid">
          <Pillar
            num="01"
            title="Fast"
            body="Up to 350 kW per stall. Pull in, plug in, and you're back on the road before your coffee cools."
          />
          <Pillar
            num="02"
            title="Clean"
            body="Every kilowatt sourced from renewables. Solar canopies above, batteries below, zero emissions in between."
          />
          <Pillar
            num="03"
            title="Connected"
            body="One app. Every connector. Live availability, transparent pricing, and routes that plan your stops."
          />
        </div>
      </section>

      <section className="still">
        <p className="still__kicker">— STILL BUILDING —</p>
        <p className="still__line">
          The site you're looking for isn't quite ready yet.
        </p>
        <p className="still__line still__line--italic">Neither are we — but we're close.</p>
      </section>

      <footer className="footer">
        <div className="footer__col">
          <img src="/logo.svg" alt="TrioEv" className="footer__logo" />
        </div>
        <div className="footer__col footer__col--center">
          <span>charging.trioev.com · 2026</span>
        </div>
        <div className="footer__col footer__col--right">
          <a href="mailto:hello@trioev.com">hello@trioev.com</a>
        </div>
      </footer>
    </div>
  )
}

function Pillar({ num, title, body }) {
  return (
    <article className="pillar">
      <div className="pillar__head">
        <span className="pillar__num">{num}</span>
        <span className="pillar__rule" />
      </div>
      <h3 className="pillar__title">{title}</h3>
      <p className="pillar__body">{body}</p>
    </article>
  )
}

function Spark() {
  return (
    <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="currentColor" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 12" aria-hidden="true">
      <path
        d="M1 6 H14 M9 1 L14 6 L9 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

function Seal() {
  const text = 'TRIO·EV  ·  CHARGING THE FUTURE  ·  COMING SOON  ·  '
  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="seal__svg">
        <defs>
          <path id="sealPath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <text className="seal__text">
          <textPath href="#sealPath" startOffset="0">
            {text + text}
          </textPath>
        </text>
      </svg>
      <span className="seal__center">
        <svg viewBox="0 0 20 28" className="seal__bolt">
          <path d="M11 0 L0 16 L8 16 L6 28 L20 11 L12 11 Z" fill="currentColor" />
        </svg>
      </span>
    </div>
  )
}

function formatTime(d) {
  const hh = String(d.getUTCHours()).padStart(2, '0')
  const mm = String(d.getUTCMinutes()).padStart(2, '0')
  const ss = String(d.getUTCSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss} UTC`
}
