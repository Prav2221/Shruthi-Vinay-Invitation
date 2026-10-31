import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MapPin, Heart, Share2 } from 'lucide-react'
import './style.css'

const weddingDate = new Date('2026-11-19T09:00:00+05:30')
const venue = 'Chandrodaya Convention Center, No. 39/2, Bannerghatta Road, Bengaluru, Karnataka 560029'
const mapUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(venue)
const shareText = 'With joy, we invite you to celebrate the wedding of Shruthi R & Vinay B. Reception: Wednesday, 18 November 2026, 6:30 PM onwards. Muhurtham: Thursday, 19 November 2026, 9:00 AM to 10:00 AM. Venue: Chandrodaya Convention Center, No. 39/2, Bannerghatta Road, Bengaluru 560029.'

function Countdown() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  const diff = Math.max(0, weddingDate - now)
  const units = [
    ['Days', Math.floor(diff / 86400000)],
    ['Hours', Math.floor(diff / 3600000) % 24],
    ['Minutes', Math.floor(diff / 60000) % 60],
    ['Seconds', Math.floor(diff / 1000) % 60]
  ]
  return <div className="countdown">{units.map(([label, value]) => <div className="count-box" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div>
}

function App() {
  const share = () => {
    const url = window.location.href
    const text = shareText + '\n' + url
    if (navigator.share) navigator.share({ title: 'Shruthi & Vinay — Wedding Invitation', text, url }).catch(() => {})
    else window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank')
  }

  return <main>
    <div className="frame">
      <div className="toran" aria-hidden="true">❧  ✥  ❧  ✥  ❧  ✥  ❧</div>
      <p className="eyebrow">A CELEBRATION OF LOVE, TRADITION & TOGETHERNESS</p>
      <p className="intro">Together with our families</p>
      <h1>Wedding<br/><span>Invitation</span></h1>
      <p className="invite-copy">Cordially invite you to join us and bless the wedding celebrations of</p>
      <div className="names"><span>Shruthi R</span><i>&</i><span>Vinay B</span></div>
      <div className="divider"><b>❖</b></div>
      <p className="date-label">18 &amp; 19 NOVEMBER 2026</p>

      <section className="event-schedule">
        <article className="event-card">
          <p className="event-caption">RECEPTION</p>
          <div className="event-date">Wednesday, 18 November 2026</div>
          <div className="event-time">6:30 PM onwards</div>
        </article>
        <article className="event-card">
          <p className="event-caption">MUHURTHAM</p>
          <div className="event-date">Thursday, 19 November 2026</div>
          <div className="event-time">9:00 AM – 10:00 AM</div>
        </article>
      </section>

      <section className="venue">
        <span className="mini-flourish">❧</span>
        <h2>Venue</h2>
        <p><strong>Chandrodaya Convention Center</strong><br/>
          No. 39/2, Bannerghatta Road<br/>
          Bengaluru – 560029
        </p>
        <a className="button outline" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Get Directions</a>
      </section>

      <section className="count-section">
        <p className="section-label">COUNTING DOWN TO THE MUHURTHAM</p>
        <Countdown/>
      </section>

      <div className="closing">
        <Heart size={19}/>
        <p>Your gracious presence and blessings<br/>will make our celebrations memorable.</p>
        <strong>With love, Shruthi &amp; Vinay</strong>
      </div>

      <div className="actions">
        <button className="button gold" onClick={share}><Share2 size={18}/> Share Invitation</button>
      </div>
      <div className="bottom-ornament">❧  ✥  ❧  ✥  ❧</div>
    </div>
    <footer>With warm regards · Shruthi &amp; Vinay</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
