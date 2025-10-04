'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { TreasuryOverview } from '@/components/treasury/TreasuryOverview'
import { AllocationsList } from '@/components/treasury/AllocationsList'
import { TransactionHistory } from '@/components/treasury/TransactionHistory'
import { BudgetChart } from '@/components/treasury/BudgetChart'
import { Shield, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export default function TreasuryPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'allocations', label: 'Allocations', icon: DollarSign },
    { id: 'transactions', label: 'Transactions', icon: TrendingUp },
    { id: 'budget', label: 'Budget Analysis', icon: AlertCircle }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Treasury Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Transparent fund allocation and financial oversight for municipal governance
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Multi-sig Protected
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Real-time Updates
            </div>
          </div>
        </div>

        {/* Treasury Stats - Updated to INR */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Primary card - emphasized */}
          <div className="rounded-xl p-6 shadow-md bg-gradient-to-r from-aurora-teal-500 to-midnight-navy-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white">{formatCurrency(convertToINR(2400000))}</div>
                <div className="text-white/90 font-medium mt-1">Total Balance</div>
              </div>
              <Shield className="w-8 h-8 text-white/80" />
            </div>
          </div>

          {/* Secondary cards - consistent styling */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(convertToINR(1800000))}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">Allocated</div>
              </div>
              <DollarSign className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(convertToINR(600000))}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">Available</div>
              </div>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">Pending</div>
              </div>
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
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
            {activeTab === 'overview' && <TreasuryOverview />}
            {activeTab === 'allocations' && <AllocationsList />}
            {activeTab === 'transactions' && <TransactionHistory />}
            {activeTab === 'budget' && <BudgetChart />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
