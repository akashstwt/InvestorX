'use client'

import { motion } from 'framer-motion'
import InfiniteMovingCardsDemo from './InfiniteScroll'

const HeroSection = () => {
  return (
    <section className="pt-20 md:pt-0 bg-[#f8f7ff]">
      <div className="max-w-[1650px] h-[920px] space-y-2 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-between lg:pl-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight"
            >
              We invest in the companies of the future, today
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-base leading-relaxed max-w-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar ipsum ut vestibus molestudoin dui lorem ac id vel nunc ipsum magna.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200"
              >
                Pitch your startup →
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black font-medium hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:white transition-colors duration-200 px-8 py-3 border border-black rounded-full"
              >
                Investment portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-end"
          >
            <div className="relative w-[600px] h-[400px] md:h-[600px] lg:h-[800px] rounded-b-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 overflow-hidden">
            </div>
          </motion.div>
        </div>
        <div className="py-5">
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </section>
  )
}

export default HeroSection