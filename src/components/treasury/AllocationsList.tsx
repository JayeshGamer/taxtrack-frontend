'use client'

import React from 'react'
import { Calendar, User, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export function AllocationsList() {
  const allocations = [
    {
      id: '1',
      proposalTitle: 'Community Park Renovation Project',
      amount: convertToINR(450000), // Convert to INR
      recipient: '0x742d35Cc6633C0523cfcE5c2D5FDF570c5BD2F03',
      status: 'disbursed',
      approvalDate: '2025-01-15',
      disbursementDate: '2025-01-18',
      milestones: [
        { title: 'Design Phase', completed: true },
        { title: 'Equipment Purchase', completed: true },
        { title: 'Construction', completed: false },
        { title: 'Final Inspection', completed: false }
      ]
    },
    {
      id: '2',
      proposalTitle: 'Digital Library Expansion',
      amount: convertToINR(180000), // Convert to INR
      recipient: '0x8ba1f109551bD432803012645Hac136c223Ba74',
      status: 'approved',
      approvalDate: '2025-01-12',
      disbursementDate: null,
      milestones: [
        { title: 'Platform Selection', completed: true },
        { title: 'Content Acquisition', completed: false },
        { title: 'System Integration', completed: false },
        { title: 'Public Launch', completed: false }
      ]
    },
    {
      id: '3',
      proposalTitle: 'Green Energy Initiative Phase 2',
      amount: convertToINR(850000), // Convert to INR
      recipient: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      status: 'pending',
      approvalDate: null,
      disbursementDate: null,
      milestones: [
        { title: 'Site Assessment', completed: true },
        { title: 'Contractor Selection', completed: false },
        { title: 'Installation', completed: false },
        { title: 'Grid Connection', completed: false }
      ]
    }
  ]

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disbursed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'approved':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'disbursed':
        return <CheckCircle className="w-4 h-4" />
      case 'approved':
        return <Clock className="w-4 h-4" />
      case 'pending':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {allocations.map((allocation) => (
        <div
          key={allocation.id}
          className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {allocation.proposalTitle}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {formatAddress(allocation.recipient)}
                </div>
                {allocation.approvalDate && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Approved {new Date(allocation.approvalDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {formatCurrency(allocation.amount)}
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(allocation.status)}`}>
                {getStatusIcon(allocation.status)}
                <span className="ml-1 capitalize">{allocation.status}</span>
              </span>
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Project Milestones
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {allocation.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    milestone.completed
                      ? 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800'
                      : 'bg-gray-50 border-gray-200 dark:bg-gray-700/50 dark:border-gray-600'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${
                      milestone.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                    <span className={`text-sm font-medium ${
                      milestone.completed 
                        ? 'text-green-800 dark:text-green-300' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {milestone.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {allocation.milestones.filter(m => m.completed).length} of {allocation.milestones.length} completed
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-aurora-teal-500 to-midnight-navy-500 h-2 rounded-full"
                style={{
                  width: `${(allocation.milestones.filter(m => m.completed).length / allocation.milestones.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Disbursement Info */}
          {allocation.disbursementDate && (
            <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
              <div className="flex items-center text-green-800 dark:text-green-300">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">
                  Funds disbursed on {new Date(allocation.disbursementDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
