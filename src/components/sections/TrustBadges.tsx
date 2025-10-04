'use client'

import React from 'react'
import { ShieldCheck, Eye, Lock, Users, Award, Zap, Globe, CheckCircle } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Audited',
      subtitle: 'Security audit by CivicAudit',
      description: 'Comprehensive security review by leading blockchain auditors',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: Eye,
      title: 'Open Data',
      subtitle: 'All allocations publicly auditable',
      description: 'Complete transparency with public blockchain records',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: Lock,
      title: 'Privacy-first',
      subtitle: 'Optional identity verification',
      description: 'Your privacy protected with zero-knowledge proofs',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
    }
  ]

  const additionalTrust = [
    {
      icon: Users,
      value: '1000+',
      label: 'Verified Communities',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime Guarantee',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Zap,
      value: '<3s',
      label: 'Transaction Speed',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries Served',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ]

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200/50 dark:border-green-700/50 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
              Trust & Security
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Built with{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              Trust
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Security, transparency, and privacy are at the core of everything we build
          </p>
        </div>

        {/* Enhanced main badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`group relative bg-gradient-to-br ${badge.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Enhanced icon */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {badge.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {badge.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              {/* Verification checkmark */}
              <div className="absolute top-4 right-4">
                <div className={`w-8 h-8 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center shadow-md`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced trust metrics */}
        <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Platform Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalTrust.map((metric, index) => (
              <div key={metric.label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced compliance section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Enterprise-Grade Security
            </h3>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Trusted by governments and enterprises worldwide with bank-level security standards
            </p>

            {/* Compliance badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="font-semibold">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <Lock className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <Eye className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Certified Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
