import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MapPin, CalendarDays, Clock3, Volume2, VolumeX, Heart, Share2 } from 'lucide-react'
import './style.css'

const weddingDate = new Date('2026-11-18T09:30:00+05:30')
const venue = 'Chandrodaya Convention Center, 39, Dairy Circle, Bannerghatta Road, Bengaluru, Karnataka 560029'
const mapUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(venue) + '&destination_place_id=ChIJ7QA0-a0VrjsR5LUshXm5UMM'
const shareText = 'With joy in our hearts, we invite you to celebrate the wedding of Shruthi R & Vinay B on 18 November 2026 at 9:30 AM. Venue: Chandrodaya Convention Hall, Bengaluru.'

function Countdown() {
  const [now, setNow] = useState(new Date())
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t) }, [])
  const diff = Math.max(0, weddingDate - now)
  const units = [
    ['Days', Math.floor(diff / 86400000)],
    ['Hours', Math.floor(diff / 3600000) % 24],
    ['Minutes', Math.floor(diff / 60000) % 60],
    ['Seconds', Math.floor(diff / 1000) % 60]
  ]
  return <div className="countdown">{units.map(([label, value]) => <div className="count-box" key={label}><strong>{String(value).padStart(2,'0')}</strong><span>{label}</span></div>)}</div>
}

function App() {
  const [playing, setPlaying] = useState(false)
  const audioRef = React.useRef(null)
  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (playing) { audio.pause(); setPlaying(false) }
      else { await audio.play(); setPlaying(true) }
    } catch { alert('Please add a royalty-free celebrative instrumental MP3 named wedding-music.mp3 inside the public folder.') }
  }
  const share = () => {
    const url = window.location.href
    const text = shareText + '\n' + url
    if (navigator.share) navigator.share({ title: 'Shruthi & Vinay Wedding', text, url }).catch(() => {})
    else window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank')
  }
  return <main>
    <div className="frame">
      <div className="top-ornament">✦ ❧ ✦</div>
      <p className="eyebrow">|| श्री गणेशाय नमः ||</p>
      <p className="intro">Together with our families</p>
      <h1>Wedding<br/><span>Invitation</span></h1>
      <p className="invite-copy">Joyfully invite you to bless the wedding celebration of</p>
      <div className="names"><span>Shruthi R</span><i>&</i><span>Vinay B</span></div>
      <div className="divider"><b>✧</b></div>
      <p className="date-label">WEDNESDAY · 18 NOVEMBER 2026</p>
      <div className="details">
        <div><CalendarDays/><small>DATE</small><strong>18 November 2026</strong></div>
        <div><Clock3/><small>MUHURTHAM</small><strong>9:30 AM</strong></div>
        <div><MapPin/><small>VENUE</small><strong>Chandrodaya Convention Hall</strong></div>
      </div>
      <section className="count-section"><p className="section-label">COUNTING DOWN TO THE BIG DAY</p><Countdown/></section>
      <section className="venue">
        <span className="mini-flourish">❧</span>
        <h2>Join us for the celebration</h2>
        <p>Chandrodaya Convention Center<br/>Dairy Circle, Bannerghatta Road<br/>Bengaluru, Karnataka 560029</p>
        <a className="button outline" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={17}/> Get Directions</a>
      </section>
      <div className="closing"><Heart size={18}/><p>Your presence and blessings<br/>will make our day even more special.</p><strong>With love, Shruthi & Vinay</strong></div>
      <div className="actions">
        <button className="button gold" onClick={share}><Share2 size={17}/> Share Invitation</button>
        <button className="button outline" onClick={toggleMusic}>{playing ? <VolumeX size={17}/> : <Volume2 size={17}/>} {playing ? 'Pause Music' : 'Play Music'}</button>
      </div>
      <audio ref={audioRef} src="/wedding-music.mp3" loop />
      <div className="bottom-ornament">✦ ❧ ✦</div>
    </div>
    <footer>Made with love for Shruthi & Vinay</footer>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
