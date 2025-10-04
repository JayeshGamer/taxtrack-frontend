'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { TrendingUp, BarChart3, PieChart, Activity, Users, Vote, DollarSign, Calendar } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('governance')
  const [timeRange, setTimeRange] = useState('30d')

  const tabs = [
    { id: 'governance', label: 'Governance Analytics', icon: Vote },
    { id: 'participation', label: 'Participation Heatmap', icon: Users },
    { id: 'treasury', label: 'Treasury Analytics', icon: DollarSign },
    { id: 'tokens', label: 'Token Health', icon: TrendingUp }
  ]

  const timeRanges = [
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' },
    { id: '1y', label: '1 Year' }
  ]

  const analyticsMetrics = [
    { label: 'Proposal Success Rate', value: '84%', change: '+5%', icon: Vote, color: 'green' },
    { label: 'Average Participation', value: '71%', change: '+3%', icon: Users, color: 'blue' },
    { label: 'Treasury Efficiency', value: '92%', change: '+7%', icon: DollarSign, color: 'purple' },
    { label: 'Token Velocity', value: '1.4x', change: '+0.2x', icon: TrendingUp, color: 'orange' }
  ]

  const proposalData = [
    { month: 'Jun', proposals: 12, passed: 10, participation: 68 },
    { month: 'Jul', proposals: 15, passed: 13, participation: 72 },
    { month: 'Aug', proposals: 18, passed: 14, participation: 75 },
    { month: 'Sep', proposals: 14, passed: 12, participation: 78 },
    { month: 'Oct', proposals: 16, passed: 14, participation: 81 }
  ]

  const participationByRegion = [
    { region: 'Downtown', participation: 92, members: 345 },
    { region: 'Suburbs North', participation: 78, members: 289 },
    { region: 'Industrial Zone', participation: 84, members: 156 },
    { region: 'Suburbs South', participation: 71, members: 234 },
    { region: 'Riverside', participation: 67, members: 178 }
  ]

  const tokenMetrics = [
    { metric: 'Total Supply', value: '10,000,000 TTK', change: 'Fixed' },
    { metric: 'Circulating Supply', value: '7,450,000 TTK', change: '+2.3%' },
    { metric: 'Active Holders', value: '1,247', change: '+8.1%' },
    { metric: 'Average Holdings', value: '5,973 TTK', change: '+1.2%' }
  ]

  const treasuryAnalytics = [
    { category: 'Infrastructure', allocated: convertToINR(850000), spent: convertToINR(720000), efficiency: 85 },
    { category: 'Education', allocated: convertToINR(520000), spent: convertToINR(498000), efficiency: 96 },
    { category: 'Environment', allocated: convertToINR(380000), spent: convertToINR(361000), efficiency: 95 },
    { category: 'Community', allocated: convertToINR(290000), spent: convertToINR(275000), efficiency: 95 }
  ]

  const renderGovernanceAnalytics = () => (
    <div className="space-y-6">
      {/* Proposal Trends Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Proposal Activity Trends</h3>
        <div className="h-64 flex items-end space-x-4">
          {proposalData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              <div className="w-full space-y-1">
                <div
                  className="bg-aurora-teal-500 rounded-t"
                  style={{ height: `${(data.passed / 20) * 200}px` }}
                ></div>
                <div
                  className="bg-gray-300 dark:bg-gray-600 rounded-b"
                  style={{ height: `${((data.proposals - data.passed) / 20) * 200}px` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{data.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-aurora-teal-500 rounded mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Passed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Failed</span>
          </div>
        </div>
      </div>

      {/* Voting Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vote Distribution</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Support Votes</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">67%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Against Votes</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">23%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '23%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Abstain</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">10%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gray-400 h-2 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Proposal Categories</h3>
          <div className="space-y-3">
            {[
              { category: 'Infrastructure', count: 8, color: 'bg-blue-500' },
              { category: 'Community', count: 6, color: 'bg-purple-500' },
              { category: 'Environment', count: 4, color: 'bg-green-500' },
              { category: 'Education', count: 3, color: 'bg-orange-500' }
            ].map((item) => (
              <div key={item.category} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 ${item.color} rounded mr-3`}></div>
                  <span className="text-sm text-gray-900 dark:text-white">{item.category}</span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderParticipationHeatmap = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Participation by Region</h3>
        <div className="space-y-4">
          {participationByRegion.map((region) => (
            <div key={region.region} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{region.region}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{region.members} members</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-aurora-teal-500 h-2 rounded-full"
                    style={{ width: `${region.participation}%` }}
                  ></div>
                </div>
              </div>
              <div className="ml-4">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{region.participation}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Engagement Timeline</h3>
          <div className="text-center py-8">
            <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">Interactive timeline coming soon</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Demographics</h3>
          <div className="text-center py-8">
            <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">Demographic breakdown coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTreasuryAnalytics = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Budget Efficiency by Category</h3>
        <div className="space-y-4">
          {treasuryAnalytics.map((item) => (
            <div key={item.category} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{item.category}</span>
                <span className="text-sm font-semibold text-green-600">{item.efficiency}% efficient</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Allocated: {formatCurrency(item.allocated)}</span>
                <span>Spent: {formatCurrency(item.spent)}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-aurora-teal-500 h-2 rounded-full"
                  style={{ width: `${item.efficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTokenHealth = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tokenMetrics.map((metric) => (
          <div key={metric.metric} className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{metric.metric}</h4>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</span>
              <span className="text-sm font-medium text-green-600">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Token Distribution</h3>
        <div className="text-center py-8">
          <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">Token distribution chart coming soon</p>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Advanced insights on participation, governance, and treasury metrics
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {timeRanges.map((range) => (
                <option key={range.id} value={range.id}>{range.label}</option>
              ))}
            </select>
            <button className="bg-aurora-teal-500 hover:bg-aurora-teal-600 text-white px-4 py-2 rounded-lg font-medium">
              Export Report
            </button>
          </div>
        </div>

        {/* Analytics Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {analyticsMetrics.map((metric) => (
            <div key={metric.label} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{metric.label}</div>
                  <div className="text-sm text-green-600 font-medium mt-1">{metric.change}</div>
                </div>
                <metric.icon className={`w-6 h-6 text-${metric.color}-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-aurora-teal-500 text-aurora-teal-600 dark:text-aurora-teal-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'governance' && renderGovernanceAnalytics()}
            {activeTab === 'participation' && renderParticipationHeatmap()}
            {activeTab === 'treasury' && renderTreasuryAnalytics()}
            {activeTab === 'tokens' && renderTokenHealth()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
