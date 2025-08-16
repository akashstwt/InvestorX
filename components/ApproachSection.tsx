'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const ApproachSection = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in mauris a commodo vivamus a. Magna convallis non quctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales'
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'Comprehensive market analysis and due diligence process to evaluate potential investments and market opportunities with detailed risk assessment.'
    },
    {
      number: '03',
      title: 'Investment',
      description: 'Strategic investment deployment with ongoing support and mentorship to help portfolio companies achieve their growth objectives and scale successfully.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16"
        >
          <div>
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4">
              04/
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our approach
            </h2>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium"
            >
              Pitch your startup →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/30 rounded-full blur-lg"
              />
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  x: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-purple-300/40 rounded-full blur-md"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h3
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                {steps[currentStep].number}
              </motion.h3>
              
              <motion.h4
                key={`title-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl font-semibold text-gray-900"
              >
                {steps[currentStep].title}
              </motion.h4>
              
              <motion.p
                key={`desc-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 leading-relaxed"
              >
                {steps[currentStep].description}
              </motion.p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <motion.button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </motion.button>

              <div className="text-sm text-gray-500">
                {currentStep + 1} / {steps.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection