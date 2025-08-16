'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AboutSection = () => {
  const [counts, setCounts] = useState({
    companies: 0,
    members: 0,
    investment: 0,
    experience: 0
  })

  const stats = [
    { key: 'companies', target: 200, label: 'Companies', suffix: '+' },
    { key: 'members', target: 50, label: 'Team members', suffix: '+' },
    { key: 'investment', target: 5, label: 'Capital investment', suffix: '+', unit: 'B' },
    { key: 'experience', target: 15, label: 'Years of experience', suffix: '+' }
  ]

  const animateCount = (key: string, target: number) => {
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }))
        clearInterval(timer)
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }
    }, 30)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stats.forEach(stat => {
              animateCount(stat.key, stat.target)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('about-stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-blue-600 font-medium text-sm uppercase tracking-wide"
            >
              02/
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              About our invest firm
            </motion.h2>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium"
            >
              Pitch your startup →
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 pt-6"
            >
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis leo vestibulum ut neque mus. Tempus arcu metus.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Circular Design + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Central Circular Design */}
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full bg-gradient-to-l from-purple-400 via-blue-500 to-purple-600 opacity-80"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-24 rounded-full bg-white/20 backdrop-blur-sm"
              />
            </div>

            {/* Stats positioned around the circle */}
            <div id="about-stats" className="absolute inset-0">
              {stats.map((stat, index) => {
                const positions = [
                  'top-4 right-4',
                  'top-1/2 right-0',
                  'bottom-4 right-4',
                  'bottom-0 right-1/2'
                ]
                
                return (
                  <motion.div
                    key={stat.key}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`absolute ${positions[index]} bg-white rounded-lg p-4 shadow-lg min-w-[140px] text-center`}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      {stat.suffix}{counts[stat.key as keyof typeof counts]}{stat.unit || ''}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection