import React from 'react'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Showreel from './components/Showreel'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Glassmorphic gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(80%_60%_at_100%_0%,rgba(14,165,233,0.08),transparent_40%)]" />

      <Hero />
      <Showreel />
      <WorkGrid />
      <Contact />
    </div>
  )
}

export default App
