'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How do I connect my wallet?',
      a: 'Click the Connect Wallet button in the top-right of the site. We support common wallets via RainbowKit including MetaMask, WalletConnect, Coinbase Wallet, and more. The connection is secure and we never store your private keys.',
      category: 'Getting Started'
    },
    {
      q: 'How are proposals funded?',
      a: 'Proposals include a detailed budget ask which is thoroughly reviewed by the community through our transparent voting process. Once approved through democratic voting, funds are automatically disbursed from the Treasury using smart contracts.',
      category: 'Governance'
    },
    {
      q: 'Is my data public?',
      a: 'On-chain actions like voting and proposals are publicly transparent by design for accountability. However, personal data is only shared if you explicitly opt into identity verification features. We prioritize privacy while maintaining transparency.',
      category: 'Privacy'
    },
    {
      q: 'What happens if a proposal fails?',
      a: 'Failed proposals remain in the public record for transparency. No funds are allocated, and the proposer can revise and resubmit with improvements based on community feedback. This iterative process ensures better proposals over time.',
      category: 'Governance'
    },
    {
      q: 'How secure is the platform?',
      a: 'We use enterprise-grade security including multi-signature wallets, smart contract audits, and encrypted communications. All code is open-source and regularly audited by third-party security firms.',
      category: 'Security'
    }
  ]

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))]

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200/50 dark:border-emerald-700/50 mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
              Common Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Quick answers to common questions about TaxTrack and how it works
          </p>
        </div>

        {/* Enhanced FAQ accordion */}
        <div className="space-y-6 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/80 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex-1">
                  {/* Category badge */}
                  <div className="mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50">
                      {faq.category}
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {faq.q}
                  </h3>
                </div>

                {/* Chevron icon */}
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 dark:text-gray-500 transition-transform duration-300 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-700 dark:to-teal-700 mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced contact section */}
        <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm text-center mt-8">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Can't find the answer you're looking for? Our community and support team are here to help you get started.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Community Discord
              </button>
              <button className="px-6 py-3 border-2 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl font-semibold transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
