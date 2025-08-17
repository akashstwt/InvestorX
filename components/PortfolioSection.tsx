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
    <section className="py-16 md:py-24 bg-[#f8f7ff]">
      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
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
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all h-96 duration-300 group cursor-pointer
                ${index === 3 ? 'md:col-span-2 lg:col-span-2' : ''}
              `}
            >
              <div className="flex flex-col justify-between h-full w-full">
                {/* Bottom: External Link Icon */}
                <div className="flex justify-end mt-4">
                  <ExternalLink className="group-hover:text-blue-600 text-gray-400 hover:rotate-45 duration-300" size={20} />
                </div>
                
                {/* Middle: Logo */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-2xl md:text-4xl font-bold text-gray-300 px-6 py-2 rounded-full">
                    {item.logo}
                  </div>
                </div>

                {/* Top: Name and Category/Date */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.category} / {item.year}
                  </p>
                </div>
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
            className="text-black font-medium hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:white transition-colors duration-500 px-8 py-3 border border-black/40 rounded-full"
          >
            Browse investment portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection