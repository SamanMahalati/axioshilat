'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Categories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = [
    {
      id: 'fish',
      name: 'ماهی تازه',
      icon: '🐟',
      description: 'انواع ماهی تازه و با کیفیت',
      gradient: 'from-blue-500 via-blue-600 to-cyan-600',
      hoverGradient: 'from-blue-600 via-blue-700 to-cyan-700',
      glowColor: 'rgba(59, 130, 246, 0.5)',
    },
    {
      id: 'seafood',
      name: 'غذاهای دریایی',
      icon: '🦐',
      description: 'میگو، خرچنگ، صدف و...',
      gradient: 'from-pink-500 via-rose-500 to-pink-600',
      hoverGradient: 'from-pink-600 via-rose-600 to-pink-700',
      glowColor: 'rgba(236, 72, 153, 0.5)',
    },
    {
      id: 'fishing',
      name: 'تجهیزات ماهیگیری',
      icon: '🎣',
      description: 'لوازم و تجهیزات ماهیگیری',
      gradient: 'from-emerald-500 via-green-500 to-emerald-600',
      hoverGradient: 'from-emerald-600 via-green-600 to-emerald-700',
      glowColor: 'rgba(16, 185, 129, 0.5)',
    },
    {
      id: 'processed',
      name: 'محصولات فرآوری شده',
      icon: '🥫',
      description: 'ماهی کنسرو شده و محصولات آماده',
      gradient: 'from-orange-500 via-amber-500 to-orange-600',
      hoverGradient: 'from-orange-600 via-amber-600 to-orange-700',
      glowColor: 'rgba(249, 115, 22, 0.5)',
    },
    {
      id: 'aquaculture',
      name: 'تجهیزات آبزی‌پروری',
      icon: '🏭',
      description: 'تجهیزات و لوازم آبزی‌پروری',
      gradient: 'from-purple-500 via-violet-500 to-purple-600',
      hoverGradient: 'from-purple-600 via-violet-600 to-purple-700',
      glowColor: 'rgba(168, 85, 247, 0.5)',
    },
    {
      id: 'accessories',
      name: 'لوازم جانبی',
      icon: '⚓',
      description: 'لوازم و اکسسوری مرتبط',
      gradient: 'from-cyan-500 via-sky-500 to-cyan-600',
      hoverGradient: 'from-cyan-600 via-sky-600 to-cyan-700',
      glowColor: 'rgba(6, 182, 212, 0.5)',
    },
  ]

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-transparent via-blue-100/20 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              دسته‌بندی‌ها
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            دسته‌بندی محصولات
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-24 h-1 bg-primary-600"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary-600 to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            دسترسی آسان به تمام محصولات در دسته‌بندی‌های مختلف
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setActiveCategory(category.id)}
              onHoverEnd={() => setActiveCategory(null)}
              className="relative group"
            >
              <a 
                href={`#products?category=${category.id}`}
                className="block h-full"
              >
                <div
                  className={`
                    relative h-full bg-gradient-to-br ${category.gradient} 
                    p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl 
                    transition-all duration-300 text-center text-white 
                    overflow-hidden border border-white/20
                    group-hover:border-white/40
                  `}
                  style={{
                    boxShadow: activeCategory === category.id 
                      ? `0 20px 40px -10px ${category.glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`
                      : '0 10px 25px -5px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={activeCategory === category.id ? { 
                      x: '100%', 
                      opacity: [0, 0.3, 0] 
                    } : {}}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />

                  {/* Icon Container */}
                  <motion.div 
                    className="relative z-10 mb-5"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-5xl md:text-6xl drop-shadow-lg">
                      {category.icon}
                    </div>
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl -z-10"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base md:text-lg font-bold mb-2 drop-shadow-sm">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={activeCategory === category.id ? { width: '60%' } : { width: '0%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 bg-white/60 rounded-full"
                  />

                  {/* Corner Decoration */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Wave Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <svg
            className="w-full max-w-4xl h-auto"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

