'use client'

import React from 'react'
import { ExternalLink, Award, Newspaper, Star } from 'lucide-react'

const mentions = [
	{
		name: 'CityLab',
		link: '#',
		description: 'Featured in Urban Innovation Report',
		rating: 5,
		quote: 'Revolutionary approach to municipal transparency',
	},
	{
		name: 'GovTech Weekly',
		link: '#',
		description: 'Top Blockchain Gov Platform 2024',
		rating: 5,
		quote: 'Setting new standards for civic engagement',
	},
	{
		name: 'Civic News',
		link: '#',
		description: 'Best Governance Solution Award',
		rating: 5,
		quote: 'Transforming how communities make decisions',
	},
	{
		name: 'Tech Crunch',
		link: '#',
		description: 'Startup Spotlight Feature',
		rating: 4,
		quote: 'The future of democratic participation',
	},
	{
		name: 'Forbes',
		link: '#',
		description: '30 Under 30 Civic Tech',
		rating: 5,
		quote: 'Pioneering transparent governance solutions',
	},
]

export default function PressMentions() {
	return (
		<section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
			<div className="max-w-7xl mx-auto">
				{/* Enhanced header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 border border-amber-200/50 dark:border-amber-700/50 mb-6">
						<Award className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-3" />
						<span className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide">
							Press & Recognition
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
						As seen{' '}
						<span className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
							in
						</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Recognized by leading publications and industry experts for innovation in
						civic technology
					</p>
				</div>

				{/* Enhanced press mentions grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
					{mentions.map((mention, index) => (
						<a
							key={mention.name}
							href={mention.link}
							className="group block bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-1"
							aria-label={`Read about TaxTrack in ${mention.name}`}
						>
							{/* Publication logo/icon */}
							<div className="flex items-center justify-between mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Newspaper className="w-6 h-6 text-white" />
								</div>
								<ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" />
							</div>

							{/* Publication name */}
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
								{mention.name}
							</h3>

							{/* Description/Award */}
							<p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
								{mention.description}
							</p>

							{/* Star rating */}
							<div className="flex items-center gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`w-4 h-4 ${
											i < mention.rating
												? 'text-amber-500 fill-amber-500'
												: 'text-gray-300 dark:text-gray-600'
										}`}
									/>
								))}
								<span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
									{mention.rating}/5
								</span>
							</div>

							{/* Quote */}
							<blockquote className="text-gray-700 dark:text-gray-300 italic border-l-4 border-amber-300 dark:border-amber-600 pl-4">
								"{mention.quote}"
							</blockquote>

							{/* Hover effect overlay */}
							<div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</a>
					))}
				</div>

				{/* Enhanced bottom section */}
				<div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm text-center mt-8">
					<div className="max-w-3xl mx-auto">
						<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
							Want to feature TaxTrack?
						</h3>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
							We're always happy to share our story and discuss the future of civic
							technology with journalists and industry analysts.
						</p>

						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
								Press Kit
								<Award className="w-5 h-5 ml-2 inline" />
							</button>
							<button className="px-8 py-4 border-2 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-xl font-semibold transition-all duration-300">
								Media Contact
								<ExternalLink className="w-5 h-5 ml-2 inline" />
							</button>
						</div>

						{/* Media stats */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
							<div className="text-center">
								<div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
									50+
								</div>
								<div className="text-gray-600 dark:text-gray-400">
									Media Mentions
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
									15
								</div>
								<div className="text-gray-600 dark:text-gray-400">
									Industry Awards
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
									1M+
								</div>
								<div className="text-gray-600 dark:text-gray-400">
									Media Reach
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
