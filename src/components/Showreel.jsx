import React from 'react'

export default function Showreel() {
  return (
    <section className="relative bg-slate-950 text-white py-16">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Showreel</h2>
          <p className="text-blue-200/80 mt-2">A fast-cut montage showcasing editing rhythm, transitions, and grading style.</p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0&modestbranding=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
