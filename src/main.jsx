import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MapPin, CalendarDays, Clock3, Volume2, VolumeX, Heart, Share2 } from 'lucide-react'
import './style.css'

const weddingDate = new Date('2026-11-19T09:00:00+05:30')
const venue = 'Chandrodaya Convention Center, No. 39/2, Bannerghatta Road, Bengaluru, Karnataka 560029'
const mapUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(venue)
const shareText = 'With joy, we invite you to bless the wedding of Shruthi R & Vinay B on Thursday, 19 November 2026, from 9:00 AM to 10:00 AM at Chandrodaya Convention Center, No. 39/2, Bannerghatta Road, Bengaluru 560029.'

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
  const [playing, setPlaying] = useState(false)
  const audioRef = React.useRef(null)

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        await audio.play()
        setPlaying(true)
      }
    } catch {
      alert('Please add a royalty-free celebrative instrumental MP3 named wedding-music.mp3 inside the public folder.')
    }
  }

  const share = () => {
    const url = window.location.href
    const text = shareText + '\n' + url
    if (navigator.share) navigator.share({ title: 'Shruthi & Vinay Wedding', text, url }).catch(() => {})
    else window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank')
  }

  return <main>
    <div className="frame">
      <div className="toran" aria-hidden="true"><span>❧</span><b>✿</b><span>❧</span><b>✿</b><span>❧</span><b>✿</b><span>❧</span></div>
      <div className="top-ornament" aria-hidden="true">🪷 &nbsp; ॐ &nbsp; 🪷</div>
      <p className="eyebrow">|| Sri Kambala Lakshmi Narasimhaswamy Prasanna ||</p>
      <p className="regional-blessing">ಶುಭಮಸ್ತು · ಮಂಗಳಕರ ವಿವಾಹ ಮಹೋತ್ಸವ</p>

      <p className="intro">Together with our families</p>
      <p className="invite-copy">
        Request the pleasure of your presence with family and friends<br className="desktop-break"/>
        on the auspicious occasion of the wedding celebration of
      </p>

      <div className="names">
        <span className="traditional-title">Chi. Sou.</span>
        <span>Shruthi R</span>
        <i className="sacred-symbol">❧</i>
        <span className="traditional-title">Chi. Ry.</span>
        <span>Vinay B</span>
      </div>

      <div className="divider"><b>❀ ✧ ❀</b></div>

      <p className="date-label">WEDDING CELEBRATIONS · 18 &amp; 19 NOVEMBER 2026</p>

      <section className="event-schedule">
        <article className="event-card">
          <div className="event-icon">🌸</div>
          <p className="event-caption">RECEPTION</p>
          <div className="event-date">Wednesday, 18 November 2026</div>
          <div className="event-time">6:30 PM onwards</div>
        </article>
        <article className="event-card">
          <div className="event-icon">🪔</div>
          <p className="event-caption">MUHURTHAM</p>
          <div className="event-date">Thursday, 19 November 2026</div>
          <div className="event-time">9:00 AM – 10:00 AM</div>
          <p className="event-note">Lagnam · Dhanur</p>
        </article>
      </section>

      <section className="venue">
        <span className="mini-flourish">❧</span>
        <h2>Venue</h2>
        <p><strong>Chandrodaya Convention Center</strong><br/>
          No. 39/2, Bannerghatta Road<br/>
          Bengaluru – 560029
        </p>
        <a className="button outline" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={17}/> Get Directions</a>
      </section>

      <div className="closing">
        <Heart size={18}/>
        <p>Awaiting your gracious presence<br/>and blessings.</p>
        <strong className="couple-signoff">Shruthi &amp; Vinay</strong>
      </div>

      <section className="count-section">
        <div className="lamp-row" aria-hidden="true">🪔 <span>✿</span> 🪔</div>
        <p className="section-label">COUNTING DOWN TO THE WEDDING</p>
        <Countdown/>
      </section>

      <div className="actions">
        <button className="button gold" onClick={share}><Share2 size={17}/> Share Invitation</button>
        <button className="button outline" onClick={toggleMusic}>{playing ? <VolumeX size={17}/> : <Volume2 size={17}/>} {playing ? 'Pause Music' : 'Play Music'}</button>
      </div>
      <audio ref={audioRef} src="/wedding-music.mp3" loop />
      <div className="bottom-ornament">🪷 &nbsp; ❧ ✿ ❧ &nbsp; 🪷</div>
    </div>
    <footer>Made with love for Shruthi &amp; Vinay</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
