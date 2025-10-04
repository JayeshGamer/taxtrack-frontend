'use client'

import React from 'react'
import { TrendingUp, Users, DollarSign, FileText, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export function MetricsOverview() {
  const metrics = [
    {
      title: 'Total Treasury',
      value: formatCurrency(convertToINR(2400000)),
      change: '+12.3%',
      changeType: 'positive',
      icon: DollarSign,
      description: 'Total funds under management'
    },
    {
      title: 'Active Citizens',
      value: '1,247',
      change: '+8.1%',
      changeType: 'positive',
      icon: Users,
      description: 'Verified governance participants'
    },
    {
      title: 'Active Proposals',
      value: '23',
      change: '-2.4%',
      changeType: 'negative',
      icon: FileText,
      description: 'Currently open for voting'
    },
    {
      title: 'Participation Rate',
      value: '89.2%',
      change: '+5.7%',
      changeType: 'positive',
      icon: TrendingUp,
      description: 'Average voting participation'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={metric.title}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-aurora-teal-100 dark:bg-aurora-teal-900/20 rounded-lg">
              <metric.icon className="w-5 h-5 text-aurora-teal-600 dark:text-aurora-teal-400" />
            </div>
            <div className={`flex items-center text-sm font-medium ${
              metric.changeType === 'positive' 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {metric.changeType === 'positive' ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              {metric.change}
            </div>
          </div>

          {/* Value */}
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {metric.title}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {metric.description}
          </p>
        </div>
      ))}
    </div>
  )
}
