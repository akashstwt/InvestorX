'use client'

import { motion } from 'framer-motion'
import { Smartphone, HardDrive, Code, Twitter, Instagram, Linkedin } from 'lucide-react'

const IndustriesSection = () => {
  const industries = [
    {
      icon: Smartphone,
      title: 'Mobile app',
      description: 'Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis leo',
      link: 'Read more →'
    },
    {
      icon: HardDrive,
      title: 'Hardware companies',
      description: 'Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis leo',
      link: 'Read more →'
    },
    {
      icon: Code,
      title: 'Software companies',
      description: 'Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas armet tellus felis leo',
      link: 'Read more →'
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
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
            05/
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Industries we invest in
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="mb-6">
                <industry.icon 
                  size={48} 
                  className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {industry.description}
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                {industry.link}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 flex items-center justify-center">
            {/* Animated background */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
            
            {/* Content */}
            <div className="relative z-10 text-center text-white space-y-6 px-4">
              <p className="text-sm uppercase tracking-wide opacity-80">06/</p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                We invest in the companies<br />
                of the future, today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white/80 max-w-md mx-auto"
              >
                Lorem ipsum dolor sit amet consectetur solicitudin pulvinar ipsum ut 
                vestibus molestuddin dui lorem ac.
              </motion.p>
              
              {/* CTA and Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-200"
                >
                  Pitch your startup →
                </motion.button>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <social.icon size={20} className="text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-purple-300/20 rounded-full blur-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection