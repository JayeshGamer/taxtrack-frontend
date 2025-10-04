'use client'

import React from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { MetricsOverview } from '@/components/dashboard/MetricsOverview'
import { ActiveProposals } from '@/components/dashboard/ActiveProposals'
import { TreasurySnapshot } from '@/components/dashboard/TreasurySnapshot'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { ParticipationChart } from '@/components/dashboard/ParticipationChart'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Governance Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Monitor community participation, treasury status, and active proposals
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Data
            </div>
          </div>
        </div>

        {/* Metrics Overview */}
        <MetricsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <ActiveProposals />
            <ParticipationChart />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            <TreasurySnapshot />
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
