'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin, Facebook, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Main pages',
      links: [
        'Home (Sales)',
        'Home V1',
        'Home V2',
        'Home V3',
        'About',
        'Portfolio V1',
        'Portfolio V2'
      ]
    },
    {
      title: 'Utility pages',
      links: [
        'Coming soon',
        'Sign in',
        'Sing up',
        'Reset password',
        'Update Password'
      ]
    },
    {
      title: 'Template pages',
      links: [
        'Start here',
        'Style guide',
        '404 not found',
        'Password protected',
        'Licenses',
        'Changelog'
      ]
    },
    {
      title: 'Contact pages',
      links: [
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-[#f8f7ff]  ">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6 lg:py-16">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 space-y-14 lg:space-y-24 bg-white rounded-3xl px-10 lg:px-16">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 w-full flex flex-col lg:flex-row items-start justify-between"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                  We invest in the companies<br />
                  of the future, today
                </h2>

                <div className='flex h-full flex-col md:flex-row gap-4'>

                {/* Right Content - Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 group"
                        aria-label={social.label}
                      >
                        <social.icon 
                          size={20} 
                          className="text-gray-600 group-hover:text-white transition-colors duration-200" 
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium"
                >
                  Pitch your startup →
                </motion.button>

                </div>
            </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
                {/* Move Contact Info below Contact pages section */}
                {section.title === 'Contact pages' && (
                  <div className="space-y-4 ">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                    >
                      <Mail size={20} />
                      <span>Send us a message</span>
                    </motion.div>
                    <p className="text-gray-900 font-medium">contact@invstor.com</p>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                    >
                      <Phone size={20} />
                      <span>Give us a call</span>
                    </motion.div>
                    <p className="text-gray-900 font-medium">(+14) 793 0681</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IX</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Invstor X</span>
            </motion.div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
              <p>Copyright © Invstor X | Designed by BRIX Templates | Powered by Webflow</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <span>Made in Webflow</span>
                <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer