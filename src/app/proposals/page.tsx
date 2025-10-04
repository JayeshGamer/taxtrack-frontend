'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { ProposalList } from '@/components/proposals/ProposalList'
import { ProposalFilters } from '@/components/proposals/ProposalFilters'
import { CreateProposalButton } from '@/components/proposals/CreateProposalButton'
import { Plus, Filter, Search } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export default function ProposalsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Governance Proposals
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Participate in community decision-making and municipal governance
            </p>
          </div>
          <CreateProposalButton />
        </div>

        {/* Stats Overview - Updated to INR */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">23</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Proposals</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">89</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Passed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1,247</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Participants</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(convertToINR(2400000))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Budget</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search proposals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-aurora-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Filters */}
            <ProposalFilters
              selectedCategory={selectedCategory}
              selectedStatus={selectedStatus}
              onCategoryChange={setSelectedCategory}
              onStatusChange={setSelectedStatus}
            />
          </div>
        </div>

        {/* Proposals List */}
        <ProposalList
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
        />
      </div>
    </DashboardLayout>
  )
}
