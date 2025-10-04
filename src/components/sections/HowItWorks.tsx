'use client'

import React from 'react'
import { Wallet, Search, Vote, ArrowRight, Sparkles } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Connect Wallet',
      desc: 'Securely connect your wallet to participate in governance and access member tools with enterprise-grade security.',
      icon: Wallet,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Explore Proposals',
      desc: 'Discover proposals, review budgets, and read supporting evidence before you vote with comprehensive analytics.',
      icon: Search,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Vote & Allocate',
      desc: 'Cast your vote and help approve allocations — funds are then released through the treasury workflow automatically.',
      icon: Vote,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-green-200/20 to-emerald-200/20 dark:from-green-800/10 dark:to-emerald-800/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Enhanced header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 border border-violet-200/50 dark:border-violet-700/50 mb-6">
            <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            How{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              TaxTrack
            </span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A simple three-step flow to participate in community governance and make your voice heard
          </p>
        </div>

        {/* Enhanced steps */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3"></div>
              <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600 animate-pulse" />
              <div className="w-1/3"></div>
              <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600 animate-pulse" />
              <div className="w-1/3"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Step number */}
                <div className="flex justify-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>

                {/* Enhanced card */}
                <div className="bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-2 text-center group-hover:border-gray-300 dark:group-hover:border-gray-600">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {step.desc}
                  </p>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced call-to-action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of citizens already participating in transparent governance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Connect Wallet Now
                <Wallet className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border-2 border-violet-200 dark:border-violet-700 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-xl font-semibold transition-all duration-300 text-lg">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
