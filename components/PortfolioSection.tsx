'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const PortfolioSection = () => {
  const portfolioItems = [
    { name: 'Facebook', category: 'Social Network', year: '2025', logo: 'facebook' },
    { name: 'Google', category: 'Cloud Software', year: '2024', logo: 'Google' },
    { name: 'Youtube', category: 'Streaming', year: '2022', logo: 'YouTube' },
    { name: 'Webflow', category: 'Cloud Software', year: '2020', logo: 'webflow' },
    { name: 'Twitch', category: 'Streaming', year: '2019', logo: 'Twitch' }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4">
            03/
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our portfolio
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-2xl md:text-3xl font-light text-gray-300">
                  {item.logo}
                </div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">
                  {item.category} / {item.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Browse Portfolio Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 underline underline-offset-4"
          >
            Browse investment portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection