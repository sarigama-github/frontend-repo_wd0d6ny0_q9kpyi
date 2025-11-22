import React from 'react'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import Contact from './components/Contact'
import SkillSection from './components/SkillSection'

function App() {
  const videoEditingItems = [
    {
      title: 'Neon City Cut',
      tag: 'Rhythm • Transitions • Sound Design',
      thumb: 'https://images.unsplash.com/photo-1517817748496-62dbeda2cf6f?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Fashion Promo',
      tag: 'Montage • Tempo • Beat Sync',
      thumb: 'https://images.unsplash.com/photo-1520975560007-c07f9b4f0dc1?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Esports Hype',
      tag: 'Flash Cuts • SFX • Type Hits',
      thumb: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
  ]

  const cinematographyItems = [
    {
      title: 'Hypercar Spot',
      tag: 'Camera Movement • Natural Light',
      thumb: 'https://images.unsplash.com/photo-1511396275276-7d8f4f4f2526?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Night Portraits',
      tag: 'Low Light • Bokeh • Color',
      thumb: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Product Macro',
      tag: 'Lens Work • Textures • Motion',
      thumb: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
  ]

  const gfxItems = [
    {
      title: 'Glass Finance ID',
      tag: '3D • Refraction • Motion',
      thumb: 'https://images.unsplash.com/photo-1629977152080-37dc305ab1d8?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Minimal Product Loop',
      tag: 'Loop • Lighting • Shading',
      thumb: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      title: 'Type Motion Pack',
      tag: 'Kinetics • Grids • FX',
      thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Glassmorphic gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(80%_60%_at_100%_0%,rgba(14,165,233,0.08),transparent_40%)]" />

      <Hero />
      <Showreel />

      <SkillSection
        id="editing"
        title="Video Editing"
        subtitle="Pace, rhythm, and narrative flow with tight transitions and sound design."
        cta={{ label: 'View full edits', href: '#contact' }}
        items={videoEditingItems}
      />

      <SkillSection
        id="cinematography"
        title="Cinematography"
        subtitle="Camera movement, framing, and grading that feels bold and cinematic."
        cta={{ label: 'Book a shoot', href: '#contact' }}
        items={cinematographyItems}
      />

      <SkillSection
        id="gfx"
        title="GFX / Motion"
        subtitle="Graphic systems, 3D, and motion identities with a brutalist edge."
        cta={{ label: 'Request styleframes', href: '#contact' }}
        items={gfxItems}
      />

      <Contact />
    </div>
  )
}

export default App
