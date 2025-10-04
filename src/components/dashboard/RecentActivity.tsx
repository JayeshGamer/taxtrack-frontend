'use client'

import React from 'react'
import { FileText, Users, DollarSign, CheckCircle, Clock, MessageSquare } from 'lucide-react'

export function RecentActivity() {
  const activities = [
    {
      id: '1',
      type: 'proposal_created',
      title: 'New proposal submitted',
      description: 'Community Center WiFi Upgrade',
      user: 'Alex Thompson',
      timestamp: '2 hours ago',
      icon: FileText,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
    },
    {
      id: '2',
      type: 'vote_cast',
      title: 'Vote submitted',
      description: 'Park Renovation Project - Support',
      user: 'Maria Garcia',
      timestamp: '4 hours ago',
      icon: CheckCircle,
      color: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20'
    },
    {
      id: '3',
      type: 'budget_approved',
      title: 'Budget allocation approved',
      description: '$180,000 for Digital Library expansion',
      user: 'Treasury Committee',
      timestamp: '6 hours ago',
      icon: DollarSign,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20'
    },
    {
      id: '4',
      type: 'comment_added',
      title: 'New discussion comment',
      description: 'Green Energy Initiative feedback',
      user: 'David Chen',
      timestamp: '8 hours ago',
      icon: MessageSquare,
      color: 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20'
    },
    {
      id: '5',
      type: 'proposal_closed',
      title: 'Voting period ended',
      description: 'Street Lighting Upgrade - Passed',
      user: 'System',
      timestamp: '12 hours ago',
      icon: Clock,
      color: 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20'
    },
    {
      id: '6',
      type: 'member_joined',
      title: 'New member verified',
      description: 'Sarah Johnson joined the DAO',
      user: 'Verification System',
      timestamp: '1 day ago',
      icon: Users,
      color: 'text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/20'
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Latest governance activities
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Live</span>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="flex items-start space-x-3">
              {/* Icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
                <activity.icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.timestamp}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  by {activity.user}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-sm text-aurora-teal-600 dark:text-aurora-teal-400 hover:text-aurora-teal-700 dark:hover:text-aurora-teal-300 font-medium">
          View all activity
        </button>
      </div>
    </div>
  )
}
