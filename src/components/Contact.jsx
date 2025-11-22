import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s collaborate</h3>
            <p className="text-blue-200/80 mt-3">Commercials, music videos, product films, motion design — available for freelance and select full-time roles worldwide.</p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-blue-200/80">
              <span className="bg-white text-slate-900 px-2 py-1 rounded-sm">Available</span>
              <span className="border border-white/20 px-2 py-1 rounded-sm">Remote</span>
              <span className="border border-white/20 px-2 py-1 rounded-sm">On-site</span>
            </div>
          </div>

          <form className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Name</label>
              <input className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Email</label>
              <input type="email" className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Project details</label>
              <textarea rows="4" className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Timeline, scope, references" />
            </div>
            <button type="button" className="w-full bg-white text-slate-900 py-3 rounded-sm font-semibold shadow-[6px_6px_0_#0ea5e9] hover:-translate-x-1 hover:-translate-y-1 transition-transform">Send inquiry</button>
          </form>
        </div>

        <div className="mt-10 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} — Video Editing • GFX • Cinematography
        </div>
      </div>
    </section>
  )
}
