'use client'

import React from 'react'
import { Shield, Users, TrendingUp, FileText, Eye, Zap, Globe, Lock, Star } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Transparent Governance',
      description: 'Every decision, vote, and allocation is recorded on-chain for complete transparency and accountability.',
      color: 'from-aurora-teal-500 to-aurora-teal-600'
    },
    {
      icon: Users,
      title: 'Community Participation',
      description: 'Citizens can propose, discuss, and vote on municipal initiatives that matter to their community.',
      color: 'from-midnight-navy-500 to-midnight-navy-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Track budget utilization, project progress, and governance metrics with live dashboards.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Proposal Management',
      description: 'Submit detailed proposals with budgets, timelines, and documentation stored securely on IPFS.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Public Audit Trail',
      description: 'Complete history of all transactions and decisions available for public scrutiny and verification.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Approved proposals are executed automatically through smart contracts, ensuring efficient delivery.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Globe,
      title: 'Multi-Jurisdiction',
      description: 'Designed to work across different municipal systems and regulatory environments.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Lock,
      title: 'Secure & Verified',
      description: 'Identity verification and multi-signature security ensure only legitimate participants can vote.',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-aurora-teal-200/10 to-blue-200/10 dark:from-aurora-teal-800/5 dark:to-blue-800/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200/10 to-pink-200/10 dark:from-purple-800/5 dark:to-pink-800/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced header section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-200/50 dark:border-orange-700/50 mb-6">
            <Star className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
              Powered by Blockchain Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Revolutionary Features for{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
              Modern Governance
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            TaxTrack combines cutting-edge blockchain technology with intuitive design to create the most transparent and efficient governance platform available.
          </p>
        </div>

        {/* Enhanced features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative">
                {/* Enhanced icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  {feature.description}
                </p>

                {/* Decorative dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-60`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-40`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-20`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced call-to-action section */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 dark:from-orange-400/10 dark:via-red-400/10 dark:to-pink-400/10 rounded-3xl"></div>

          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  Community?
                </span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Join municipalities worldwide that are already using TaxTrack to create more transparent, efficient, and citizen-centric governance.
              </p>

              {/* Enhanced buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl text-lg relative overflow-hidden">
                  <span className="relative z-10">Start Your DAO</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap className="w-5 h-5 ml-2 inline relative z-10" />
                </button>
                <button className="group px-8 py-4 border-2 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl font-semibold transition-all duration-300 text-lg relative overflow-hidden">
                  <span className="relative z-10">Schedule Demo</span>
                  <Globe className="w-5 h-5 ml-2 inline relative z-10" />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center gap-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">Enterprise Security</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">1000+ Communities</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
