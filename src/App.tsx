import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import './App.css'
import heroImg from './assets/hero-tmid.jpg'
import logoSmall from './assets/tmid-small-red.png'
import logoLarge from './assets/tmid-large-red.png'
import mainImg from './assets/main-tmid.jpg'
import tmid1 from './assets/tmid-1.jpg'
import tmid2 from './assets/tmid-2.jpg'
import tmid3 from './assets/tmid-3.jpg'
import tmid4 from './assets/tmid-4.jpg'
import tmid5 from './assets/tmid-5.jpg'
import tmid6 from './assets/tmid-6.jpg'
import tmid7 from './assets/tmid-7.jpg'
import tmid8 from './assets/tmid-8.jpg'
import tmid9 from './assets/tmid-9.jpg'
import tmid10 from './assets/tmid-10.jpg'
import tmid11 from './assets/tmid-11.jpg'
import tmid12 from './assets/tmid-12.jpg'

/* ─── Navigation ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Band Name */}
          <Link to="/">
            <img src={logoSmall} alt="The Man Is Dead" className="h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.to ? 'text-brand' : 'text-white hover:text-brand'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a target='_blank' href="https://www.instagram.com/p/DKIxSVuJH7j/" className="text-white hover:text-brand transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a target='_blank' href="https://www.facebook.com/people/The-Man-is-Dead/61584141614938/#" className="text-white hover:text-brand transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a target='_blank' href="https://open.spotify.com/artist/2z8A3ymwpuW0HnisKiZ9FO" className="text-white hover:text-brand transition-colors" aria-label="Spotify">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34a.75.75 0 0 1-1.03.248c-2.82-1.723-6.37-2.112-10.552-1.157a.749.749 0 1 1-.334-1.462c4.572-1.045 8.492-.595 11.668 1.338a.75.75 0 0 1 .248 1.034zm1.473-3.272a.936.936 0 0 1-1.287.308c-3.225-1.982-8.142-2.557-11.958-1.399a.937.937 0 0 1-1.167-.623.937.937 0 0 1 .624-1.167c4.358-1.322 9.776-.682 13.48 1.595.44.27.578.846.308 1.286zm.127-3.403C15.688 8.382 9.116 8.172 5.312 9.26a1.122 1.122 0 1 1-.652-2.148c4.373-1.247 11.64-1.006 16.229 1.675a1.122 1.122 0 0 1-1.768 1.378z"/></svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-brand transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.to ? 'text-brand' : 'text-white hover:text-brand'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-2 border-t border-white/10">
              <a target='_blank' href="https://www.instagram.com/p/DKIxSVuJH7j/" className="text-white hover:text-brand transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a target='_blank' href="https://www.facebook.com/people/The-Man-is-Dead/61584141614938/#" className="text-white hover:text-brand transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a target='_blank' href="https://open.spotify.com/artist/2z8A3ymwpuW0HnisKiZ9FO" className="text-white hover:text-brand transition-colors" aria-label="Spotify">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34a.75.75 0 0 1-1.03.248c-2.82-1.723-6.37-2.112-10.552-1.157a.749.749 0 1 1-.334-1.462c4.572-1.045 8.492-.595 11.668 1.338a.75.75 0 0 1 .248 1.034zm1.473-3.272a.936.936 0 0 1-1.287.308c-3.225-1.982-8.142-2.557-11.958-1.399a.937.937 0 0 1-1.167-.623.937.937 0 0 1 .624-1.167c4.358-1.322 9.776-.682 13.48 1.595.44.27.578.846.308 1.286zm.127-3.403C15.688 8.382 9.116 8.172 5.312 9.26a1.122 1.122 0 1 1-.652-2.148c4.373-1.247 11.64-1.006 16.229 1.675a1.122 1.122 0 0 1-1.768 1.378z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

/* ─── Home Page ─── */
function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[60vh] sm:min-h-screen px-4 text-center">
        <img
          src={heroImg}
          alt="The Man Is Dead"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60" />
        <img
          src={logoLarge}
          alt="The Man Is Dead"
          className="relative z-10 w-[80vw] max-w-5xl drop-shadow-[0_0_40px_rgba(242,53,53,0.4)] lg:mt-[200px]"
        />
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest text-center mb-16">
            <span className="border-b-2 border-brand pb-2">Latest</span>
          </h2>

          {/* Featured cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - New Single */}
            <a target='_blank' href='https://open.spotify.com/artist/2z8A3ymwpuW0HnisKiZ9FO'>
              <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-brand/30 to-black flex items-center justify-center">
                  <img
                    src="https://placehold.co/600x600/111111/F23535/png?text=NEW+SINGLE"
                    alt="New single artwork placeholder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg uppercase tracking-wider">Sunny</h3>
                    <p className="text-white/50 text-sm mt-2">Check it out on Spotify</p>
                  </div>
              </div>
            </a>

            {/* Card 2 - Tour */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-brand/30 to-black flex items-center justify-center">
                <img
                  src="https://placehold.co/600x600/111111/F23535/png?text=SHOWS"
                  alt="Tour dates placeholder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg uppercase tracking-wider">Larimer Lounge</h3>
                <p className="text-white/50 text-sm mt-2">Come see us on May 9th</p>
              </div>
            </div>

            {/* Card 3 - Merch */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-brand/30 to-black flex items-center justify-center">
                <img
                  src="https://placehold.co/600x600/111111/F23535/png?text=MERCH"
                  alt="Merchandise placeholder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg uppercase tracking-wider">Merch</h3>
                <p className="text-white/50 text-sm mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band Photo Section - Placeholder */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden border border-white/10">
            <img
              src={mainImg}
              alt="The Man Is Dead"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/70 text-sm uppercase tracking-widest">Photos coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-widest mb-4">Stay Connected</h2>
          <p className="text-white/50 mb-8">Sign up for news, tour dates, and exclusive content.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 font-bold uppercase tracking-widest text-sm text-white border-2 border-brand hover:bg-brand transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
    </div>
  )
}

/* ─── Gallery Page ─── */
function GalleryPage() {
  const photos = [
    tmid1, tmid2, tmid4, tmid5, tmid6, tmid3,
    tmid7, tmid8, tmid9, tmid10, tmid11, tmid12,
  ].map((src, i) => ({ id: i + 1, src, alt: `The Man Is Dead photo ${i + 1}` }))

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter text-center mb-4">
          Gallery
        </h1>
        <p className="text-white/50 text-center mb-16 uppercase tracking-widest text-sm">
          Photos coming soon
        </p>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid group relative overflow-hidden border border-white/10 hover:border-brand/50 transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Contact Page ─── */
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form handling placeholder
    alert('Message sent! (placeholder)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter text-center mb-4">
          Contact
        </h1>
        <p className="text-white/50 text-center mb-16 uppercase tracking-widest text-sm">
          Get in touch
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 font-bold uppercase tracking-widest text-sm text-white border-2 border-brand hover:bg-brand transition-colors self-start"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 border-b border-brand pb-2 inline-block">
                Booking
              </h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:booking@themanisdead.com" className="flex items-center gap-3 text-white/60 hover:text-brand transition-colors">
                  <Mail size={16} />
                  <span className="text-sm">booking@themanisdead.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-white/60 hover:text-brand transition-colors">
                  <Phone size={16} />
                  <span className="text-sm">(555) 123-4567</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 border-b border-brand pb-2 inline-block">
                Location
              </h3>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={16} />
                <span className="text-sm">Denver, CO</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 border-b border-brand pb-2 inline-block">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-brand transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/60 hover:text-brand transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a target='_blank' href="https://open.spotify.com/artist/2z8A3ymwpuW0HnisKiZ9FO" className="text-white/60 hover:text-brand transition-colors" aria-label="Spotify">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34a.75.75 0 0 1-1.03.248c-2.82-1.723-6.37-2.112-10.552-1.157a.749.749 0 1 1-.334-1.462c4.572-1.045 8.492-.595 11.668 1.338a.75.75 0 0 1 .248 1.034zm1.473-3.272a.936.936 0 0 1-1.287.308c-3.225-1.982-8.142-2.557-11.958-1.399a.937.937 0 0 1-1.167-.623.937.937 0 0 1 .624-1.167c4.358-1.322 9.776-.682 13.48 1.595.44.27.578.846.308 1.286zm.127-3.403C15.688 8.382 9.116 8.172 5.312 9.26a1.122 1.122 0 1 1-.652-2.148c4.373-1.247 11.64-1.006 16.229 1.675a1.122 1.122 0 0 1-1.768 1.378z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} The Man Is Dead. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a target='_blank' href="https://www.sunnybrown.dev/" className="text-white/30 hover:text-brand transition-colors" aria-label="SWDLink">
            Built by Sunshine Web Development
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─── */
function App() {
  return (
    <Router>
      <Navbar />
      <main className='bg-black'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
