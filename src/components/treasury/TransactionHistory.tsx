'use client'

import React from 'react'
import { ExternalLink, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react'
import { formatCurrency, convertToINR } from '@/lib/utils'

export function TransactionHistory() {
  const transactions = [
    {
      id: '1',
      type: 'disbursement',
      amount: convertToINR(450000), // Convert to INR
      description: 'Park Renovation Project - Initial Payment',
      recipient: '0x742d35Cc6633C0523cfcE5c2D5FDF570c5BD2F03',
      txHash: '0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456',
      timestamp: '2025-01-18T14:30:00Z',
      status: 'confirmed',
      blockNumber: 12847593
    },
    {
      id: '2',
      type: 'deposit',
      amount: convertToINR(500000), // Convert to INR
      description: 'Monthly Treasury Funding',
      recipient: 'Treasury Wallet',
      txHash: '0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a',
      timestamp: '2025-01-15T09:00:00Z',
      status: 'confirmed',
      blockNumber: 12845123
    },
    {
      id: '3',
      type: 'disbursement',
      amount: convertToINR(180000), // Convert to INR
      description: 'Digital Library - Content Licensing',
      recipient: '0x8ba1f109551bD432803012645Hac136c223Ba74',
      txHash: '0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2',
      timestamp: '2025-01-12T16:45:00Z',
      status: 'confirmed',
      blockNumber: 12843876
    }
  ]

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatTxHash = (hash: string) => {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`
  }

  const getTransactionIcon = (type: string) => {
    return type === 'disbursement' ? (
      <ArrowUpRight className="w-4 h-4 text-red-500" />
    ) : (
      <ArrowDownLeft className="w-4 h-4 text-green-500" />
    )
  }

  const getTransactionColor = (type: string) => {
    return type === 'disbursement'
      ? 'text-red-600 dark:text-red-400'
      : 'text-green-600 dark:text-green-400'
  }

  return (
    <div className="space-y-4">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-full ${
                tx.type === 'disbursement' 
                  ? 'bg-red-100 dark:bg-red-900/20' 
                  : 'bg-green-100 dark:bg-green-900/20'
              }`}>
                {getTransactionIcon(tx.type)}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {tx.description}
                </h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span>To: {formatAddress(tx.recipient)}</span>
                    <span>•</span>
                    <span>Block #{tx.blockNumber.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(tx.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className={`text-xl font-bold ${getTransactionColor(tx.type)}`}>
                {tx.type === 'disbursement' ? '-' : '+'}{formatCurrency(tx.amount)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {tx.type}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Transaction Hash:</span>
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                {formatTxHash(tx.txHash)}
              </code>
            </div>

            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                {tx.status}
              </span>
              <a
                href={`https://etherscan.io/tx/${tx.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-aurora-teal-600 dark:text-aurora-teal-400 hover:text-aurora-teal-700 dark:hover:text-aurora-teal-300"
              >
                View on Etherscan
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
