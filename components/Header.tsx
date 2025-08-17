'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'About', 'Blog', 'Pages']

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-6"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IX</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Invstor X</span>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 text-gray-700"
              >
                <ShoppingCart size={20} />
                <span>Cart(0)</span>
              </motion.div>
            </nav>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow duration-200"
          >
            Pitch your startup →
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-white border-gray-100 p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-1 text-gray-700">
                <ShoppingCart size={20} />
                <span>Cart(0)</span>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium w-fit">
                Pitch your startup →
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header