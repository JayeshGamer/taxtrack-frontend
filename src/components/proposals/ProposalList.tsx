'use client'

import React from 'react'
import Link from 'next/link'
import { Clock, Users, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { formatCurrency, convertToINR } from '@/lib/utils'

interface ProposalListProps {
  searchQuery: string
  selectedCategory: string
  selectedStatus: string
}

export function ProposalList({ searchQuery, selectedCategory, selectedStatus }: ProposalListProps) {
  const proposals = [
    {
      id: '1',
      title: 'Community Park Renovation Project',
      description: 'Comprehensive upgrade of Central Park including new playground equipment, walking trails, and improved lighting for enhanced safety and community enjoyment.',
      status: 'live',
      category: 'infrastructure',
      budget: convertToINR(450000), // Convert to INR
      sponsor: 'Parks & Recreation Committee',
      votes: { support: 67, against: 23, abstain: 10 },
      totalVotes: 892,
      timeLeft: '4 days',
      participation: 71.2,
      comments: 24,
      createdAt: '2025-01-10'
    },
    {
      id: '2',
      title: 'Digital Library Expansion',
      description: 'Enhance online resources with new e-books, databases, and provide free coding bootcamps for residents to improve digital literacy.',
      status: 'live',
      category: 'community',
      budget: convertToINR(180000), // Convert to INR
      sponsor: 'Education Committee',
      votes: { support: 78, against: 15, abstain: 7 },
      totalVotes: 634,
      timeLeft: '6 days',
      participation: 50.6,
      comments: 18,
      createdAt: '2025-01-08'
    },
    {
      id: '3',
      title: 'Green Energy Initiative Phase 2',
      description: 'Install solar panels on municipal buildings and community centers to reduce carbon footprint and energy costs.',
      status: 'live',
      category: 'infrastructure',
      budget: convertToINR(850000), // Convert to INR
      sponsor: 'Environmental Committee',
      votes: { support: 82, against: 12, abstain: 6 },
      totalVotes: 1156,
      timeLeft: '2 days',
      participation: 92.3,
      comments: 41,
      createdAt: '2025-01-05'
    },
    {
      id: '4',
      title: 'Small Business Support Program',
      description: 'Provide grants and mentorship programs for local entrepreneurs and small businesses affected by economic challenges.',
      status: 'draft',
      category: 'community',
      budget: convertToINR(300000), // Convert to INR
      sponsor: 'Economic Development',
      votes: { support: 0, against: 0, abstain: 0 },
      totalVotes: 0,
      timeLeft: 'Draft',
      participation: 0,
      comments: 7,
      createdAt: '2025-01-15'
    },
    {
      id: '5',
      title: 'Traffic Safety Improvements',
      description: 'Install new traffic lights, crosswalks, and speed cameras in high-traffic areas to improve pedestrian safety.',
      status: 'closed',
      category: 'infrastructure',
      budget: convertToINR(220000), // Convert to INR
      sponsor: 'Transportation Committee',
      votes: { support: 89, against: 8, abstain: 3 },
      totalVotes: 1341,
      timeLeft: 'Completed',
      participation: 95.1,
      comments: 32,
      createdAt: '2024-12-20'
    }
  ]

  // Filter proposals based on search and filters
  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         proposal.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || proposal.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || proposal.status === selectedStatus
    
    return matchesSearch && matchesCategory && matchesStatus
  })

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

  if (filteredProposals.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
        <div className="text-gray-400 dark:text-gray-600 mb-4">
          <Users className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No proposals found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Try adjusting your search or filter criteria
        </p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Clear filters
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {filteredProposals.map((proposal) => (
        <div
          key={proposal.id}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-200"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {proposal.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                  {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(proposal.category)}`}>
                  {proposal.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {proposal.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <span>By {proposal.sponsor}</span>
                <span>•</span>
                <span>{new Date(proposal.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Budget - Updated to display in INR (icon removed) */}
          <div className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {formatCurrency(proposal.budget)} requested
          </div>

          {/* Voting Progress (only for live proposals) */}
          {proposal.status === 'live' && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Voting Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {proposal.totalVotes} votes ({proposal.participation}% participation)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="flex h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500 flex-shrink-0"
                    style={{ width: `${proposal.votes.support}%` }}
                  />
                  <div
                    className="bg-red-500 flex-shrink-0"
                    style={{ width: `${proposal.votes.against}%` }}
                  />
                  <div
                    className="bg-gray-400 flex-shrink-0"
                    style={{ width: `${proposal.votes.abstain}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mt-2">
                <span className="text-green-600 dark:text-green-400">
                  {proposal.votes.support}% Support
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {proposal.votes.abstain}% Abstain
                </span>
                <span className="text-red-600 dark:text-red-400">
                  {proposal.votes.against}% Against
                </span>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {proposal.timeLeft}
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {proposal.comments} comments
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {proposal.status === 'live' && (
                <Button size="sm" className="bg-aurora-teal-500 hover:bg-aurora-teal-600">
                  Vote Now
                </Button>
              )}
              <Link href={`/proposals/${proposal.id}`}>
                <Button variant="outline" size="sm">
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
