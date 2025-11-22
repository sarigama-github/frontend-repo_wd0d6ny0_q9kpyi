import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon City Cut',
    tag: 'Editing • Color • Sound Design',
    thumb: 'https://images.unsplash.com/photo-1517817748496-62dbeda2cf6f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Glass Finance ID',
    tag: 'GFX • 3D • Motion',
    thumb: 'https://images.unsplash.com/photo-1629977152080-37dc305ab1d8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Hypercar Spot',
    tag: 'Cinematography • Grading',
    thumb: 'https://images.unsplash.com/photo-1511396275276-7d8f4f4f2526?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Minimal Product Loop',
    tag: 'Loop • GFX • Lighting',
    thumb: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative bg-slate-950 text-white py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(14,165,233,0.15),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Works</h2>
          <a href="#contact" className="text-xs uppercase tracking-widest border border-white/20 px-3 py-2 rounded-sm hover:bg-white/10">Request Reel</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="aspect-video overflow-hidden">
                <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-200/80">{p.tag}</div>
                  <div className="font-semibold">{p.title}</div>
                </div>
                <div className="bg-white text-slate-900 text-xs px-2 py-1 rounded-sm shadow-[4px_4px_0_#0ea5e9] opacity-0 group-hover:opacity-100 transition">View</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
