'use client'

import React from 'react'
import { TrendingUp, Users, Banknote, Award, Clock, Target } from 'lucide-react'

export default function KPIMarquee() {
  const kpis = [
    { icon: Banknote, label: 'Total Treasury', value: '₹20.04 Cr', change: '+12%', color: 'text-green-600' },
    { icon: Users, label: 'Active Citizens', value: '1,247', change: '+8%', color: 'text-blue-600' },
    { icon: TrendingUp, label: 'Participation Rate', value: '89%', change: '+3%', color: 'text-purple-600' },
    { icon: Award, label: 'Proposals Passed', value: '156', change: '+15%', color: 'text-emerald-600' },
    { icon: Clock, label: 'Avg Decision Time', value: '7 days', change: '-2 days', color: 'text-amber-600' },
    { icon: Target, label: 'Success Rate', value: '94%', change: '+5%', color: 'text-rose-600' },
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedKpis = [...kpis, ...kpis]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Live Platform Metrics
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-aurora-teal-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll-left space-x-8">
          {duplicatedKpis.map((kpi, index) => (
            <div
              key={`${kpi.label}-${index}`}
              className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300 min-w-[280px]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  kpi.change.startsWith('+') || (kpi.change.startsWith('-') && kpi.label === 'Avg Decision Time')
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {kpi.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
