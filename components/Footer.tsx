'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center">
                <span className="text-white font-bold text-xl">ش</span>
              </div>
              <span className="text-xl font-bold">شیلات</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              عرضه کننده انواع محصولات شیلات و آبزیان با کیفیت عالی و قیمت
              مناسب
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              {[
                'خانه',
                'محصولات',
                'درباره ما',
                'خدمات',
                'تماس با ما',
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === 'خانه' ? 'home' : link === 'محصولات' ? 'products' : link === 'درباره ما' ? 'about' : link === 'خدمات' ? 'services' : 'contact'}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4">خدمات</h3>
            <ul className="space-y-2">
              {[
                'ماهی تازه',
                'غذاهای دریایی',
                'تجهیزات ماهیگیری',
                'محصولات فرآوری شده',
                'تجهیزات آبزی‌پروری',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © ۱۴۰۳ تمامی حقوق محفوظ است
            </p>
            <div className="flex gap-4">
              {['📘', '📷', '💼', '🐦'].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:opacity-80 transition-opacity"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

