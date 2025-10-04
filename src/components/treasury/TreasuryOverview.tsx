'use client'

import React from 'react'
import { Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'

export function TreasuryOverview() {
  const treasuryMetrics = {
    totalBalance: 2400000,
    allocatedFunds: 1800000,
    availableFunds: 600000,
    monthlyIncome: 180000,
    monthlyExpenses: 150000,
    allocationRate: 75
  }

  const recentApprovals = [
    {
      id: '1',
      proposal: 'Community Park Renovation',
      amount: 450000,
      status: 'approved',
      approvedBy: 'Treasury Committee',
      date: '2025-01-15'
    },
    {
      id: '2',
      proposal: 'Digital Library Expansion',
      amount: 180000,
      status: 'pending',
      approvedBy: 'Under Review',
      date: '2025-01-12'
    },
    {
      id: '3',
      proposal: 'Green Energy Initiative',
      amount: 850000,
      status: 'approved',
      approvedBy: 'Multi-sig Wallet',
      date: '2025-01-10'
    }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-8">
      {/* Financial Health Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-aurora-teal-50 to-midnight-navy-50 dark:from-aurora-teal-900/10 dark:to-midnight-navy-900/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-aurora-teal-600" />
            Financial Health
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Allocation Rate</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {treasuryMetrics.allocationRate}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-aurora-teal-500 to-midnight-navy-500 h-3 rounded-full"
                style={{ width: `${treasuryMetrics.allocationRate}%` }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {formatCurrency(treasuryMetrics.monthlyIncome)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Income</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-red-600 dark:text-red-400">
                  {formatCurrency(treasuryMetrics.monthlyExpenses)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Expenses</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
            Fund Distribution
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-aurora-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Allocated</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {formatCurrency(treasuryMetrics.allocatedFunds)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Available</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {formatCurrency(treasuryMetrics.availableFunds)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Approvals */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Fund Approvals
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentApprovals.map((approval) => (
            <div key={approval.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  approval.status === 'approved' 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-yellow-100 dark:bg-yellow-900/20'
                }`}>
                  {approval.status === 'approved' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {approval.proposal}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {approval.approvedBy} • {new Date(approval.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(approval.amount)}
                </div>
                <div className={`text-sm capitalize ${
                  approval.status === 'approved' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-yellow-600 dark:text-yellow-400'
                }`}>
                  {approval.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
