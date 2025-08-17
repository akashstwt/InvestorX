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
    <section className="py-16 md:py-24 bg-[#f8f7ff]">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
            News & articles
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white h-80 rounded-2xl justify-center items-center flex"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-xl flex items-center justify-center group cursor-pointer"
            >
              <featuredArticle.icon 
                size={100} 
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
            className="space-y-4 h-full flex flex-col justify-center"
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
        <div className="grid md:grid-cols-3 gap-16 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <div key={article.title} className="flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2}}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white h-80 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center transition-colors duration-200"
                >
                  <article.icon 
                    size={100} 
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
                  />
                </motion.div>
              </motion.div>
              {/* Article text below the white container */}
              <div className="space-y-3 px-2 pt-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
              </div>
            </div>
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
            className="text-black font-medium hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:white transition-colors duration-500 px-8 py-3 border border-black/40 rounded-full"
          >
            Browse all articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection