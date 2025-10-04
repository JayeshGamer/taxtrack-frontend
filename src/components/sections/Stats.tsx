'use client'

import React from 'react'
import { TrendingUp, Users, Banknote, FileText, Award, Clock } from 'lucide-react'

export function Stats() {
  const stats = [
    {
      label: 'Total Treasury Value',
      value: '₹20,04,00,000',
      change: '+12%',
      icon: Banknote,
      description: 'Managed transparently by the community'
    },
    {
      label: 'Active Citizens',
      value: '1,247',
      change: '+8%',
      icon: Users,
      description: 'Verified participants in governance'
    },
    {
      label: 'Proposals Passed',
      value: '89',
      change: '+15%',
      icon: FileText,
      description: 'Successfully implemented initiatives'
    },
    {
      label: 'Average Participation',
      value: '89%',
      change: '+3%',
      icon: TrendingUp,
      description: 'Citizen engagement in voting'
    },
    {
      label: 'Funds Allocated',
      value: '₹15,03,00,000',
      change: '+20%',
      icon: Award,
      description: 'Distributed to approved projects'
    },
    {
      label: 'Avg. Decision Time',
      value: '7 days',
      change: '-2 days',
      icon: Clock,
      description: 'From proposal to execution'
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced header section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-aurora-teal-50 to-emerald-50 dark:from-aurora-teal-900/30 dark:to-emerald-900/30 border border-aurora-teal-200/50 dark:border-aurora-teal-700/50 mb-6">
            <TrendingUp className="w-5 h-5 text-aurora-teal-600 dark:text-aurora-teal-400 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
              Real-time Platform Metrics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Impact by the{' '}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time insights into our community's governance and financial transparency
          </p>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-teal-500/5 to-emerald-500/5 dark:from-aurora-teal-400/10 dark:to-emerald-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Icon and change badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-aurora-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`text-sm font-bold px-4 py-2 rounded-full shadow-sm ${
                    stat.change.startsWith('+') 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/50' 
                      : stat.change.startsWith('-') && stat.label === 'Avg. Decision Time'
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/50'
                      : 'bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700/50'
                  }`}>
                    {stat.change}
                  </span>
                </div>

                {/* Main value */}
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join thousands of citizens making a difference in their community
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-3 h-3 bg-gradient-to-r from-aurora-teal-500 to-emerald-500 rounded-full shadow-sm"></div>
              <span className="font-semibold">🏛️ Trusted by municipalities worldwide</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm"></div>
              <span className="font-semibold">⚡ Powered by Blockchain Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
