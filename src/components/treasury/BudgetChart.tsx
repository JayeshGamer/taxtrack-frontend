'use client'

import React from 'react'
import { TrendingUp, PieChart, BarChart3, DollarSign } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export function BudgetChart() {
  const budgetData = {
    categories: [
      { name: 'Infrastructure', allocated: convertToINR(1200000), spent: convertToINR(900000), color: 'bg-blue-500' },
      { name: 'Community Programs', allocated: convertToINR(600000), spent: convertToINR(450000), color: 'bg-purple-500' },
      { name: 'Environmental', allocated: convertToINR(400000), spent: convertToINR(320000), color: 'bg-green-500' },
      { name: 'Technology', allocated: convertToINR(200000), spent: convertToINR(130000), color: 'bg-orange-500' }
    ],
    monthlySpending: [
      { month: 'Sep', amount: convertToINR(180000) },
      { month: 'Oct', amount: convertToINR(220000) },
      { month: 'Nov', amount: convertToINR(195000) },
      { month: 'Dec', amount: convertToINR(250000) },
      { month: 'Jan', amount: convertToINR(280000) },
      { month: 'Feb', amount: convertToINR(310000) }
    ]
  }

  const totalAllocated = budgetData.categories.reduce((sum, cat) => sum + cat.allocated, 0)
  const totalSpent = budgetData.categories.reduce((sum, cat) => sum + cat.spent, 0)
  const maxMonthlySpending = Math.max(...budgetData.monthlySpending.map(m => m.amount))

  return (
    <div className="space-y-8">
      {/* Budget Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-aurora-teal-600" />
            Budget by Category
          </h3>

          <div className="space-y-4">
            {budgetData.categories.map((category, index) => {
              const spentPercentage = (category.spent / category.allocated) * 100

              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {category.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatCurrency(category.spent)} / {formatCurrency(category.allocated)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {spentPercentage.toFixed(1)}% utilized
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${spentPercentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Total Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900 dark:text-white">Total</span>
              <div className="text-right">
                <div className="font-bold text-lg text-gray-900 dark:text-white">
                  {formatCurrency(totalSpent)} / {formatCurrency(totalAllocated)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {((totalSpent / totalAllocated) * 100).toFixed(1)}% of budget used
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Spending Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
            Monthly Spending Trend
          </h3>

          {/* Chart */}
          <div className="space-y-4">
            {budgetData.monthlySpending.map((month, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {month.month}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative">
                    <div
                      className="bg-gradient-to-r from-aurora-teal-500 to-midnight-navy-500 h-6 rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${(month.amount / maxMonthlySpending) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">
                        {formatCurrency(month.amount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
              Spending Insights
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Monthly spending increased by 72% over 6 months</li>
              <li>• Infrastructure projects driving higher allocations</li>
              <li>• Q1 budget execution on track for 85% utilization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Budget Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-800 dark:text-green-300">
                {((totalSpent / totalAllocated) * 100).toFixed(1)}%
              </div>
              <div className="text-green-700 dark:text-green-400 text-sm font-medium">
                Budget Utilization
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-aurora-teal-50 to-aurora-teal-100 dark:from-aurora-teal-900/20 dark:to-aurora-teal-800/20 rounded-xl p-6 border border-aurora-teal-200 dark:border-aurora-teal-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-aurora-teal-800 dark:text-aurora-teal-300">
                {formatCurrency(totalAllocated - totalSpent)}
              </div>
              <div className="text-aurora-teal-700 dark:text-aurora-teal-400 text-sm font-medium">
                Remaining Budget
              </div>
            </div>
            <DollarSign className="w-8 h-8 text-aurora-teal-600 dark:text-aurora-teal-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                {budgetData.categories.length}
              </div>
              <div className="text-purple-700 dark:text-purple-400 text-sm font-medium">
                Active Categories
              </div>
            </div>
            <PieChart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
