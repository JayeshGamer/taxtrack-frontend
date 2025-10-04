'use client'

import React from 'react'
import Link from 'next/link'
import { Clock, Users, TrendingUp, ArrowRight } from 'lucide-react'

export function ActiveProposals() {
  const proposals = [
    {
      id: '1',
      title: 'Community Park Renovation Project',
      description: 'Upgrade playground equipment and add new walking trails in Central Park',
      status: 'live',
      category: 'infrastructure',
      budget: '$450,000',
      votes: { support: 67, against: 23, abstain: 10 },
      totalVotes: 892,
      timeLeft: '4 days',
      participation: 71.2
    },
    {
      id: '2',
      title: 'Digital Library Expansion',
      description: 'Enhance online resources and provide free coding bootcamps for residents',
      status: 'live',
      category: 'community',
      budget: '$180,000',
      votes: { support: 78, against: 15, abstain: 7 },
      totalVotes: 634,
      timeLeft: '6 days',
      participation: 50.6
    },
    {
      id: '3',
      title: 'Green Energy Initiative Phase 2',
      description: 'Install solar panels on municipal buildings and community centers',
      status: 'live',
      category: 'infrastructure',
      budget: '$850,000',
      votes: { support: 82, against: 12, abstain: 6 },
      totalVotes: 1156,
      timeLeft: '2 days',
      participation: 92.3
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'infrastructure':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'community':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      case 'treasury':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Active Proposals
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Currently open for community voting
            </p>
          </div>
          <Link
            href="/proposals"
            className="inline-flex items-center text-sm font-medium text-aurora-teal-600 dark:text-aurora-teal-400 hover:text-aurora-teal-700 dark:hover:text-aurora-teal-300"
          >
            View all
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Proposals List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            {/* Title and badges */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 mr-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {proposal.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {proposal.description}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                  {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(proposal.category)}`}>
                  {proposal.category}
                </span>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Budget: {proposal.budget}
              </span>
            </div>

            {/* Voting Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Voting Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {proposal.totalVotes} votes ({proposal.participation}% participation)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full relative"
                  style={{ width: `${proposal.votes.support}%` }}
                >
                  <div
                    className="bg-red-500 h-2 rounded-r-full absolute right-0"
                    style={{ width: `${(proposal.votes.against / proposal.votes.support) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-green-600 dark:text-green-400">
                  {proposal.votes.support}% Support
                </span>
                <span className="text-red-600 dark:text-red-400">
                  {proposal.votes.against}% Against
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {proposal.timeLeft} remaining
              </div>
              <Link
                href={`/proposals/${proposal.id}`}
                className="text-aurora-teal-600 dark:text-aurora-teal-400 hover:text-aurora-teal-700 dark:hover:text-aurora-teal-300 font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
