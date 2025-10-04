'use client'

import React from 'react'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

const roadmap = [
	{
		quarter: 'Q1 2025',
		title: 'Foundation Sprint',
		bullets: ['Design tokens', 'Global nav', 'Theme switching'],
		status: 'completed',
		progress: 100,
	},
	{
		quarter: 'Q2 2025',
		title: 'Governance Core',
		bullets: ['Proposal directory', 'Voting booth', 'Discussion lounge'],
		status: 'in-progress',
		progress: 65,
	},
	{
		quarter: 'Q3 2025',
		title: 'Treasury & Evidence',
		bullets: ['Treasury dashboard', 'Document vault', 'Allocation workspace'],
		status: 'upcoming',
		progress: 0,
	},
]

export default function TimelineGrid() {
	return (
		<section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
			<div className="max-w-7xl mx-auto">
				{/* Enhanced header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6">
						<Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
						<span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
							Development Roadmap
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
						Interactive{' '}
						<span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
							Roadmap
						</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Progress milestones and upcoming sprints — click an item to learn more
						about our development journey
					</p>
				</div>

				{/* Enhanced timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 dark:from-blue-700 dark:via-indigo-600 dark:to-purple-700 rounded-full"></div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
						{roadmap.map((item, index) => (
							<div
								key={item.quarter}
								className={`relative ${
									index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
								}`}
							>
								{/* Timeline dot */}
								<div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
									<div
										className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
											item.status === 'completed'
												? 'bg-gradient-to-r from-green-500 to-emerald-500'
												: item.status === 'in-progress'
												? 'bg-gradient-to-r from-blue-500 to-indigo-500'
												: 'bg-gradient-to-r from-gray-400 to-gray-500'
										}`}
									>
										{item.status === 'completed' && (
											<CheckCircle className="w-3 h-3 text-white mx-auto" />
										)}
									</div>
								</div>

								{/* Enhanced card */}
								<div className="group bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
									{/* Status indicator */}
									<div className="flex items-center justify-between mb-6">
										<div
											className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
												item.status === 'completed'
													? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/50'
													: item.status === 'in-progress'
													? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700/50'
													: 'bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-900/30 dark:to-slate-900/30 text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-gray-700/50'
											}`}
										>
											{item.status.replace('-', ' ')}
										</div>
										<Clock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
									</div>

									{/* Quarter badge */}
									<div className="text-sm font-bold text-aurora-teal-600 dark:text-aurora-teal-400 mb-2 tracking-wide">
										{item.quarter}
									</div>

									{/* Title */}
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-aurora-teal-600 dark:group-hover:text-aurora-teal-400 transition-colors duration-300">
										{item.title}
									</h3>

									{/* Progress bar */}
									{item.status !== 'upcoming' && (
										<div className="mb-6">
											<div className="flex justify-between items-center mb-2">
												<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
													Progress
												</span>
												<span className="text-sm font-bold text-gray-900 dark:text-white">
													{item.progress}%
												</span>
											</div>
											<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
												<div
													className={`h-full rounded-full transition-all duration-1000 ${
														item.status === 'completed'
															? 'bg-gradient-to-r from-green-500 to-emerald-500'
															: 'bg-gradient-to-r from-blue-500 to-indigo-500'
													}`}
													style={{ width: `${item.progress}%` }}
												></div>
											</div>
										</div>
									)}

									{/* Features list */}
									<ul className="space-y-3">
										{item.bullets.map((bullet, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
											>
												<div
													className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
														item.status === 'completed'
															? 'bg-gradient-to-r from-green-500 to-emerald-500'
															: item.status === 'in-progress'
															? 'bg-gradient-to-r from-blue-500 to-indigo-500'
															: 'bg-gray-400'
													}`}
												></div>
												<span className="leading-relaxed">{bullet}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Enhanced bottom section */}
				<div className="text-center mt-8">
					<div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							Stay Updated on Our Progress
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-6">
							Follow our development journey and be the first to know about new
							features
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
								Subscribe to Updates
							</button>
							<button className="px-6 py-3 border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-semibold transition-all duration-300">
								View on GitHub
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
