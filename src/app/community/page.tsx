'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Users, MessageSquare, Calendar, Award, TrendingUp, Globe, UserCheck, Heart } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'members', label: 'Members Directory', icon: UserCheck },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'events', label: 'Events & Meetings', icon: Calendar }
  ]

  const communityStats = [
    { label: 'Total Members', value: '1,247', change: '+8%', icon: Users, color: 'blue' },
    { label: 'Active Participants', value: '892', change: '+12%', icon: UserCheck, color: 'green' },
    { label: 'Monthly Discussions', value: '156', change: '+15%', icon: MessageSquare, color: 'purple' },
    { label: 'Upcoming Events', value: '4', change: '+1', icon: Calendar, color: 'orange' }
  ]

  const recentDiscussions = [
    { id: 1, title: 'Park Renovation Budget Discussion', author: 'Sarah Chen', replies: 23, lastActivity: '2 hours ago', category: 'Infrastructure' },
    { id: 2, title: 'Digital Library Access Expansion', author: 'Mike Rodriguez', replies: 18, lastActivity: '5 hours ago', category: 'Education' },
    { id: 3, title: 'Community Safety Initiative Feedback', author: 'Alex Johnson', replies: 31, lastActivity: '1 day ago', category: 'Safety' },
    { id: 4, title: 'Green Energy Project Timeline', author: 'Emma Davis', replies: 12, lastActivity: '2 days ago', category: 'Environment' }
  ]

  const upcomingEvents = [
    { id: 1, title: 'Monthly Community Call', date: 'Oct 15, 2025', time: '7:00 PM', type: 'Virtual', attendees: 156 },
    { id: 2, title: 'Budget Review Workshop', date: 'Oct 22, 2025', time: '2:00 PM', type: 'In-Person', attendees: 45 },
    { id: 3, title: 'Proposal Discussion Forum', date: 'Oct 28, 2025', time: '6:00 PM', type: 'Hybrid', attendees: 89 },
    { id: 4, title: 'Quarterly Town Hall', date: 'Nov 5, 2025', time: '7:30 PM', type: 'Virtual', attendees: 234 }
  ]

  const topContributors = [
    { name: 'Sarah Chen', contributions: 47, role: 'Community Moderator', avatar: '/api/placeholder/40/40' },
    { name: 'Mike Rodriguez', contributions: 38, role: 'Budget Analyst', avatar: '/api/placeholder/40/40' },
    { name: 'Emma Davis', contributions: 34, role: 'Environmental Advocate', avatar: '/api/placeholder/40/40' },
    { name: 'Alex Johnson', contributions: 29, role: 'Safety Coordinator', avatar: '/api/placeholder/40/40' }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Community Health Metrics */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Community Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Participation Rate</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">89%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-aurora-teal-500 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Discussion Engagement</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">76%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Discussions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Discussions</h3>
          <button className="text-aurora-teal-600 hover:text-aurora-teal-700 text-sm font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {recentDiscussions.map((discussion) => (
            <div key={discussion.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">{discussion.title}</h4>
                <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>by {discussion.author}</span>
                  <span>•</span>
                  <span>{discussion.replies} replies</span>
                  <span>•</span>
                  <span>{discussion.lastActivity}</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                {discussion.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Contributors */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Contributors</h3>
        <div className="space-y-4">
          {topContributors.map((contributor, index) => (
            <div key={contributor.name} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-aurora-teal-500 to-midnight-navy-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{contributor.name.charAt(0)}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{contributor.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{contributor.role}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{contributor.contributions}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">contributions</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{event.title}</h4>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </span>
                    <span>{event.time}</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{event.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Community Hub
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Connect, discuss, and collaborate with fellow community members
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="bg-aurora-teal-500 hover:bg-aurora-teal-600 text-white px-4 py-2 rounded-lg font-medium">
              Join Discussion
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {communityStats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  <div className="text-sm text-green-600 font-medium mt-1">{stat.change}</div>
                </div>
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
            </div>
          ))}
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
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'events' && renderEvents()}
            {activeTab === 'members' && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Members Directory</h3>
                <p className="text-gray-500 dark:text-gray-400">Coming soon - Browse and connect with community members</p>
              </div>
            )}
            {activeTab === 'discussions' && (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Discussion Forums</h3>
                <p className="text-gray-500 dark:text-gray-400">Coming soon - Participate in community discussions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
