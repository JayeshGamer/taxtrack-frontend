'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, TrendingUp, ArrowRight, DollarSign, AlertCircle } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export function TreasurySnapshot() {
  const treasuryData = {
    totalBalance: convertToINR(2400000), // Convert from USD to INR
    allocatedFunds: convertToINR(1800000),
    availableFunds: convertToINR(600000),
    pendingApprovals: 3,
    recentAllocations: [
      {
        id: '1',
        project: 'Park Renovation',
        amount: convertToINR(450000),
        status: 'approved',
        date: '2025-01-15'
      },
      {
        id: '2',
        project: 'Digital Library',
        amount: convertToINR(180000),
        status: 'pending',
        date: '2025-01-10'
      },
      {
        id: '3',
        project: 'Green Energy Phase 2',
        amount: convertToINR(850000),
        status: 'in-review',
        date: '2025-01-08'
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20'
      case 'pending':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20'
      case 'in-review':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20'
    }
  }

  const allocationPercentage = (treasuryData.allocatedFunds / treasuryData.totalBalance) * 100

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Treasury Snapshot
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Current fund allocation and status
            </p>
          </div>
          <Link
            href="/treasury"
            className="inline-flex items-center text-sm font-medium text-aurora-teal-600 dark:text-aurora-teal-400 hover:text-aurora-teal-700 dark:hover:text-aurora-teal-300"
          >
            View details
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Total Balance */}
        <div className="text-center p-6 bg-gradient-to-br from-aurora-teal-50 to-midnight-navy-50 dark:from-aurora-teal-900/10 dark:to-midnight-navy-900/10 rounded-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-aurora-teal-100 dark:bg-aurora-teal-900/20 rounded-full mb-3">
            <Shield className="w-6 h-6 text-aurora-teal-600 dark:text-aurora-teal-400" />
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {formatCurrency(treasuryData.totalBalance)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Treasury Balance
          </div>
        </div>

        {/* Allocation Overview */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Fund Allocation
          </h3>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Allocated</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {allocationPercentage.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-aurora-teal-500 to-midnight-navy-500 h-2 rounded-full"
                style={{ width: `${allocationPercentage}%` }}
              />
            </div>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatCurrency(treasuryData.allocatedFunds)}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Allocated
              </div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatCurrency(treasuryData.availableFunds)}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Available
              </div>
            </div>
          </div>
        </div>

        {/* Pending Approvals Alert */}
        {treasuryData.pendingApprovals > 0 && (
          <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3" />
            <div className="flex-1">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                {treasuryData.pendingApprovals} approvals pending
              </p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400">
                Requires committee review
              </p>
            </div>
          </div>
        )}

        {/* Recent Allocations */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Recent Allocations
          </h3>
          <div className="space-y-3">
            {treasuryData.recentAllocations.slice(0, 3).map((allocation) => (
              <div key={allocation.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {allocation.project}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(allocation.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(allocation.amount)}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(allocation.status)}`}>
                    {allocation.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
