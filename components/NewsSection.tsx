'use client'

import { motion } from 'framer-motion'
import { BookOpen, Database, BarChart3, Presentation as PresentationChart } from 'lucide-react'

const NewsSection = () => {
  const featuredArticle = {
    category: 'Investments',
    date: 'Jul 19, 2023',
    title: 'How to raise capital: 5 fundraising strategies for your startup',
    description: 'Lorem ipsum dolor amet consectetur diam nulla nullam mauris non turpis mi sit in a nunc id lectus facilisi justo eu egestas armet.',
    icon: BookOpen
  }

  const articles = [
    {
      category: 'Articles',
      date: 'Jul 19, 2023',
      title: 'We are leading Series A investment round for BRIX Templates',
      icon: Database
    },
    {
      category: 'Press releases',
      date: 'Jul 19, 2023',
      title: 'Early Stage Fund details for 2025 are now available',
      icon: BarChart3
    },
    {
      category: 'Investments',
      date: 'Aug 2, 2023',
      title: 'Congratulations on new Webflow\'s Series D investment round',
      icon: PresentationChart
    }
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
            08/
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            News & articles
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center group cursor-pointer"
            >
              <featuredArticle.icon 
                size={32} 
                className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
              />
            </motion.div>
          </motion.div>

          {/* Featured Article Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                {featuredArticle.category}
              </span>
              <span>{featuredArticle.date}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {featuredArticle.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {featuredArticle.description}
            </p>
            
            <motion.button
              whileHover={{ x: 5 }}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              Read article →
            </motion.button>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-200"
              >
                <article.icon 
                  size={24} 
                  className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
                />
              </motion.div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Browse All Articles */}
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
            Browse all articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection