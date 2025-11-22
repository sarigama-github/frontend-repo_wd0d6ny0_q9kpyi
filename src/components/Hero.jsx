import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(59,130,246,0.25),transparent_60%)]" />

      {/* Glass header */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-2 shadow-xl">
          <span className="font-semibold tracking-wide text-blue-200">PORTFOLIO</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#work" className="uppercase tracking-widest text-xs bg-white text-slate-900 px-4 py-2 rounded-sm shadow-[4px_4px_0px_#0ea5e9] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">Work</a>
          <a href="#contact" className="uppercase tracking-widest text-xs border border-white/30 px-4 py-2 rounded-sm hover:bg-white/10 transition">Contact</a>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Video Editor
            <span className="block">GFX Designer</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
              Cinematography
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-blue-200/80">
            Crafting striking visuals that fuse brutalist energy with glassmorphic elegance. I cut, grade, and design frames that feel bold, modern, and deeply cinematic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="bg-white text-slate-900 px-6 py-3 rounded-sm font-semibold shadow-[6px_6px_0_#0ea5e9] hover:-translate-x-1 hover:-translate-y-1 transition-transform">View Selected Works</a>
            <a href="#about" className="border border-white/30 px-6 py-3 rounded-sm hover:bg-white/10 transition">About</a>
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="order-1 md:order-2 relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10" />
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* bottom brutal bar */}
      <div className="relative z-10 mt-12 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-blue-200/70">
          <span className="bg-white text-slate-900 px-2 py-1 rounded-sm">Adobe Premiere Pro</span>
          <span className="bg-white/10 border border-white/20 px-2 py-1 rounded-sm">After Effects</span>
          <span className="bg-white/10 border border-white/20 px-2 py-1 rounded-sm">DaVinci Resolve</span>
          <span className="bg-white/10 border border-white/20 px-2 py-1 rounded-sm">Cinema 4D</span>
          <span className="bg-white/10 border border-white/20 px-2 py-1 rounded-sm">Color Grading</span>
        </div>
      </div>
    </section>
  )
}
