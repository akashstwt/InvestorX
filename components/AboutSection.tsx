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
      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-1"
          >
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight"
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
              className="space-y-4 pt-6 lg:pt-16 text-base"
            >
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis leo vestibulum ut neque mus. Tempus arcu metus.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis.
              </p>
            </motion.div>
          </motion.div>

          {/* Central Circular Design */}
            <div className="relative lg:col-span-2 mx-auto w-80 h-80 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600">

            </div>

          {/* Right Content - Circular Design + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative lg:col-span-1"
          >

            {/* Stats positioned around the circle */}
            <div id="about-stats" className=" items-end flex flex-col">
              {stats.map((stat, index) => {
                
                return (
                  <motion.div
                    key={stat.key}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`border-b border-black w-52 px-4 py-8 text-end`}
                  >
                    <div className="text-lg font-medium text-gray-600 mb-3">{stat.label}</div>
                    <div className="text-2xl md:text-6xl font-medium text-gray-900">
                      <span className='text-[#454ED7]'>{stat.suffix}</span>{counts[stat.key as keyof typeof counts]}{stat.unit || ''}
                    </div>
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