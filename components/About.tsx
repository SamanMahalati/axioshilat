'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    // Handle non-numeric values like "24/7"
    if (value.includes('/')) {
      return
    }

    const numericValue = parseInt(value.replace(/\D/g, ''))
    if (isNaN(numericValue) || numericValue === 0) {
      return
    }

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInView, value, delay])

  if (value.includes('/')) {
    return <span ref={ref}>{value}</span>
  }

  return <span ref={ref}>{count}{value.includes('+') ? '+' : ''}</span>
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features = [
    {
      icon: '🐟',
      title: 'محصولات تازه',
      description: 'ارائه تازه‌ترین محصولات شیلات و آبزیان',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
    },
    {
      icon: '🚚',
      title: 'ارسال سریع',
      description: 'ارسال سریع و به موقع به سراسر کشور',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      iconBg: 'bg-orange-100',
    },
    {
      icon: '⭐',
      title: 'کیفیت عالی',
      description: 'تضمین کیفیت و تازگی محصولات',
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      iconBg: 'bg-yellow-100',
    },
    {
      icon: '💬',
      title: 'پشتیبانی 24/7',
      description: 'پشتیبانی و مشاوره در تمام ساعات شبانه‌روز',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
    },
  ]

  const stats = [
    { number: '100+', label: 'پروژه موفق', icon: '🎯' },
    { number: '50+', label: 'مشتری راضی', icon: '😊' },
    { number: '5+', label: 'سال تجربه', icon: '⭐' },
    { number: '24/7', label: 'پشتیبانی', icon: '🕐' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              درباره ما
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            درباره ما
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-24 h-1 bg-primary-600"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary-600 to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ما یک شرکت پیشرو در زمینه عرضه و فروش محصولات شیلات و آبزیان هستیم.
            با سال‌ها تجربه در این صنعت، بهترین و تازه‌ترین محصولات را از
            مزارع پرورشی و دریا به دست شما می‌رسانیم. کیفیت و رضایت مشتری
            اولویت اصلی ماست.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -12, scale: 1.03 }}
              onHoverStart={() => setHoveredFeature(feature.title)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="group relative"
            >
              <div className={`
                relative h-full bg-gradient-to-br ${feature.bgGradient} 
                p-8 rounded-3xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 border border-white/50
                overflow-hidden
              `}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]"></div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={
                    hoveredFeature === feature.title
                      ? { x: '100%', opacity: [0, 0.5, 0] }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </motion.div>

                {/* Icon Container */}
                <motion.div 
                  className={`relative z-10 mb-6 inline-flex items-center justify-center w-20 h-20 ${feature.iconBg} rounded-2xl`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl">{feature.icon}</div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gray-300/50 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gray-300/50 rounded-bl-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative"
        >
          {/* Stats Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-ocean-500/5 to-primary-600/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group"
                >
                  {/* Icon */}
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 to-ocean-600 bg-clip-text text-transparent mb-3">
                    <AnimatedCounter value={stat.number} delay={0.8 + index * 0.1} />
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-700 font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '60%' } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="h-1 bg-gradient-to-r from-primary-600 to-ocean-600 rounded-full mx-auto mt-4"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

