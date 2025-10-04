'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Users, TrendingUp, Zap, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-aurora-teal-100 dark:bg-aurora-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-midnight-navy-100 dark:bg-midnight-navy-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-aurora-teal-50 to-midnight-navy-50 dark:from-aurora-teal-900/30 dark:to-midnight-navy-900/30 border border-aurora-teal-200 dark:border-aurora-teal-700/50 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-aurora-teal-600 dark:text-aurora-teal-400 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
              Transparent Municipal Finance DAO
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Empower{' '}
            <span className="text-teal-700 text-aurora-teal-700 dark:text-teal-300 dark:text-aurora-teal-300 font-semibold">
              Civic
            </span>{' '}
            Participation
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Join the decentralized governance platform that brings transparency, accountability, and citizen engagement to municipal finance decisions.
          </p>
        </div>

        {/* Key features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-aurora-teal-500 to-aurora-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Budget Tracking</h3>
            <p className="text-gray-600 dark:text-gray-400">Monitor municipal spending in real-time with complete transparency</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-midnight-navy-500 to-midnight-navy-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Governance</h3>
            <p className="text-gray-600 dark:text-gray-400">Participate in democratic decision-making for your community</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Transparent Allocations</h3>
            <p className="text-gray-600 dark:text-gray-400">Every rupee tracked with blockchain-powered accountability</p>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Link href="/proposals">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg border-0 bg-black text-white dark:bg-white dark:text-black hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora-teal-300">
              View Proposals
            </Button>
          </Link>
        </div>

        {/* Stats preview - Enhanced design */}
        <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Platform Impact</h2>
            <p className="text-gray-600 dark:text-gray-400">Real numbers from our governance ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-aurora-teal-500 to-aurora-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">₹20.04 Cr</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Total Treasury</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-midnight-navy-500 to-midnight-navy-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">1,247</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Active Citizens</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">89%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Participation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
