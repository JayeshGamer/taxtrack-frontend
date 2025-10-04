'use client'

import React from 'react'

export default function Roadmap() {
  const items = [
    { quarter: 'Q1 2025', title: 'Foundation Sprint', desc: 'Design tokens, global shell, theme switching, command palette.' },
    { quarter: 'Q2 2025', title: 'Governance Core', desc: 'Proposal directory, proposal detail, voting booth.' },
    { quarter: 'Q3 2025', title: 'Treasury & Evidence', desc: 'Treasury dashboard, allocations, document vault.' }
  ]

  return (
    <section className="py-20 bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Roadmap</h2>
          <p className="text-white/70 mt-2">Planned milestones to make TaxTrack production-ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.quarter} className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-sm text-aurora-teal-300 font-medium">{it.quarter}</div>
              <h3 className="text-xl font-semibold text-white mt-2">{it.title}</h3>
              <p className="text-white/60 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

