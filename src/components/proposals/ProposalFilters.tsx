'use client'

import React from 'react'
import { Filter } from 'lucide-react'

interface ProposalFiltersProps {
  selectedCategory: string
  selectedStatus: string
  onCategoryChange: (category: string) => void
  onStatusChange: (status: string) => void
}

export function ProposalFilters({
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange
}: ProposalFiltersProps) {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'community', label: 'Community' },
    { value: 'treasury', label: 'Treasury' },
    { value: 'governance', label: 'Governance' }
  ]

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'draft', label: 'Draft' },
    { value: 'live', label: 'Live' },
    { value: 'closed', label: 'Closed' },
    { value: 'executed', label: 'Executed' }
  ]

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-gray-600 dark:text-gray-400">
        <Filter className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-aurora-teal-500 focus:border-transparent"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      {/* Status Filter */}
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-aurora-teal-500 focus:border-transparent"
      >
        {statuses.map((status) => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </select>
    </div>
  )
}
