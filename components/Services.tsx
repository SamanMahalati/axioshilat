'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    {
      icon: '🐟',
      title: 'فروش ماهی تازه',
      description:
        'عرضه انواع ماهی تازه از مزارع پرورشی و دریا با بالاترین کیفیت',
      features: [
        'ماهی قزل‌آلا',
        'ماهی کپور',
        'ماهی سفید',
        'سایر انواع ماهی',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      icon: '🦐',
      title: 'غذاهای دریایی',
      description:
        'ارائه انواع غذاهای دریایی تازه شامل میگو، خرچنگ، صدف و...',
      features: [
        'میگو تازه',
        'خرچنگ',
        'صدف خوراکی',
        'ماهی مرکب',
      ],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      iconBg: 'bg-pink-100',
      borderColor: 'border-pink-200',
    },
    {
      icon: '🎣',
      title: 'تجهیزات ماهیگیری',
      description:
        'فروش انواع تجهیزات و لوازم ماهیگیری برای علاقه‌مندان',
      features: [
        'قلاب و چوب',
        'طناب و نخ',
        'جعبه لوازم',
        'اکسسوری',
      ],
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50',
      iconBg: 'bg-emerald-100',
      borderColor: 'border-emerald-200',
    },
    {
      icon: '🏭',
      title: 'تجهیزات آبزی‌پروری',
      description:
        'تامین تجهیزات حرفه‌ای برای مزارع پرورش ماهی و آبزی‌پروری',
      features: [
        'فیلتر و پمپ',
        'خوراک ماهی',
        'تجهیزات استخر',
        'مشاوره تخصصی',
      ],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50',
      iconBg: 'bg-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      icon: '🥫',
      title: 'محصولات فرآوری شده',
      description:
        'عرضه محصولات کنسرو شده و فرآوری شده با کیفیت عالی',
      features: [
        'ماهی تن کنسرو',
        'ساردین کنسرو',
        'ماهی دودی',
        'محصولات آماده',
      ],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      iconBg: 'bg-orange-100',
      borderColor: 'border-orange-200',
    },
    {
      icon: '🚚',
      title: 'ارسال به سراسر کشور',
      description:
        'ارسال سریع و مطمئن محصولات به تمام نقاط کشور',
      features: [
        'بسته‌بندی حرفه‌ای',
        'حفظ تازگی',
        'ارسال سریع',
        'پشتیبانی کامل',
      ],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconBg: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-ocean-50/50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-transparent via-primary-100/20 to-transparent blur-3xl"></div>
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
              خدمات
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            خدمات ما
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-24 h-1 bg-primary-600"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary-600 to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            مجموعه کاملی از خدمات شیلات و آبزیان برای تامین نیازهای شما
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative h-full"
            >
              <div className={`
                relative h-full bg-gradient-to-br ${service.bgGradient} 
                p-8 rounded-3xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 border-2 ${service.borderColor}
                overflow-hidden
              `}
              style={{
                boxShadow: hoveredService === service.title 
                  ? `0 20px 40px -10px rgba(0,0,0,0.15), 0 0 0 1px ${service.borderColor.replace('border-', '')}`
                  : '0 10px 25px -5px rgba(0,0,0,0.1)'
              }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_50%)]"></div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={
                    hoveredService === service.title
                      ? { x: '100%', opacity: [0, 0.5, 0] }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </motion.div>

                {/* Icon Container */}
                <motion.div 
                  className={`relative z-10 mb-6 inline-flex items-center justify-center w-20 h-20 ${service.iconBg} rounded-2xl shadow-md`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, -5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl">{service.icon}</div>
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    animate={{
                      opacity: hoveredService === service.title ? 0.2 : 0
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.3 }}
                        className="flex items-center text-gray-700 group/item"
                      >
                        <motion.div
                          className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center ml-3 shadow-sm`}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                        <span className="font-medium text-sm md:text-base group-hover/item:translate-x-1 transition-transform">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gray-300/50 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gray-300/50 rounded-bl-lg"></div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={hoveredService === service.title ? { width: '60%' } : { width: '0%' }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

