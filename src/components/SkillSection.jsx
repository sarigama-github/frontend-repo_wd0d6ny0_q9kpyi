import React from 'react'
import { motion } from 'framer-motion'

export default function SkillSection({ id, title, subtitle, cta, items = [] }) {
  return (
    <section id={id} className="relative bg-slate-950 text-white py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="text-blue-200/80 mt-2 max-w-2xl">{subtitle}</p>}
          </div>
          {cta && (
            <a href={cta.href} className="text-xs uppercase tracking-widest border border-white/20 px-3 py-2 rounded-sm hover:bg-white/10">
              {cta.label}
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              href={p.href || '#'}
              target={p.href?.startsWith('http') ? '_blank' : undefined}
              rel={p.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="aspect-video overflow-hidden">
                <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div>
                  {p.tag && <div className="text-sm text-blue-200/80">{p.tag}</div>}
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
