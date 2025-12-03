'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'وب‌سایت فروشگاه آنلاین ماهی',
      category: 'تجارت الکترونیک',
      description:
        'طراحی و توسعه فروشگاه آنلاین کامل با سیستم مدیریت سفارشات',
      image: '🛒',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'پورتال اطلاعاتی شیلات',
      category: 'اطلاع‌رسانی',
      description:
        'سایت جامع اطلاعاتی با بخش‌های مختلف برای صنعت شیلات',
      image: '📚',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'اپلیکیشن رزرو تور ماهیگیری',
      category: 'خدمات',
      description:
        'اپلیکیشن موبایل برای رزرو تورهای ماهیگیری و خدمات مرتبط',
      image: '📱',
      tech: ['React Native', 'Firebase'],
    },
    {
      title: 'سایت شرکت تولیدی آبزیان',
      category: 'شرکت',
      description:
        'وب‌سایت شرکتی با بخش‌های معرفی محصولات و تماس با ما',
      image: '🏢',
      tech: ['Next.js', 'Sanity CMS'],
    },
    {
      title: 'پلتفرم آموزش آنلاین',
      category: 'آموزش',
      description:
        'سایت آموزش آنلاین دوره‌های مرتبط با صنعت شیلات',
      image: '🎓',
      tech: ['Vue.js', 'Laravel'],
    },
    {
      title: 'وب‌سایت نمایشگاه',
      category: 'رویداد',
      description:
        'سایت اختصاصی برای نمایشگاه‌های شیلات و آبزیان',
      image: '🎪',
      tech: ['Next.js', 'Framer Motion'],
    },
  ]

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            نمونه کارها
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نمونه‌هایی از پروژه‌های موفق ما در زمینه صنعت شیلات و آبزیان
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-ocean-50 to-primary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-ocean-100 group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-ocean-400 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

