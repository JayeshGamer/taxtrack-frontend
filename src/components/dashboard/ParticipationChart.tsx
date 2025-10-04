'use client'

import React from 'react'
import { TrendingUp, Users, Calendar } from 'lucide-react'

export function ParticipationChart() {
  // Mock data for participation over time
  const participationData = [
    { month: 'Sep', participation: 78, proposals: 12 },
    { month: 'Oct', participation: 82, proposals: 15 },
    { month: 'Nov', participation: 85, proposals: 18 },
    { month: 'Dec', participation: 89, proposals: 23 },
    { month: 'Jan', participation: 92, proposals: 19 },
    { month: 'Feb', participation: 89, proposals: 21 }
  ]

  const maxParticipation = Math.max(...participationData.map(d => d.participation))

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Participation Trends
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Citizen engagement over the last 6 months
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <div className="w-3 h-3 bg-aurora-teal-500 rounded-full mr-2"></div>
              Participation Rate
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <div className="w-3 h-3 bg-midnight-navy-500 rounded-full mr-2"></div>
              Active Proposals
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full mb-2">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">+14%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Growth</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-2">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">92%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Peak Rate</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-2">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">108</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Votes</div>
          </div>
        </div>

        {/* Chart */}
        <div className="space-y-6">
          <div className="flex items-end justify-between h-48 space-x-4">
            {participationData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
                {/* Participation Bar */}
                <div className="relative w-full">
                  <div
                    className="bg-aurora-teal-500 rounded-t-md transition-all duration-500 ease-in-out"
                    style={{
                      height: `${(data.participation / maxParticipation) * 160}px`,
                    }}
                  />
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-900 dark:text-white">
                    {data.participation}%
                  </div>
                </div>

                {/* Proposals Indicator */}
                <div className="flex items-center space-x-1">
                  <div
                    className="bg-midnight-navy-500 rounded-full"
                    style={{
                      width: `${Math.max(data.proposals / 5, 1)}px`,
                      height: `${Math.max(data.proposals / 5, 1)}px`,
                    }}
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {data.proposals}
                  </span>
                </div>

                {/* Month Label */}
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {data.month}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-aurora-teal-500 rounded mr-2"></div>
              Participation percentage
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-midnight-navy-500 rounded-full mr-2"></div>
              Number of proposals
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-6 p-4 bg-aurora-teal-50 dark:bg-aurora-teal-900/10 rounded-lg">
          <h3 className="text-sm font-semibold text-aurora-teal-900 dark:text-aurora-teal-300 mb-2">
            Key Insights
          </h3>
          <ul className="text-sm text-aurora-teal-800 dark:text-aurora-teal-200 space-y-1">
            <li>• Participation has grown consistently over 6 months</li>
            <li>• Highest engagement during peak proposal periods</li>
            <li>• Community involvement exceeds industry average by 35%</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
