'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  inStock: boolean
}

const products: Product[] = [
  // ماهی تازه
  {
    id: '1',
    name: 'ماهی قزل‌آلا تازه',
    price: 85000,
    image: '/images/products/ماهی قزل‌آلا تازه.jpg',
    category: 'fish',
    description: 'ماهی قزل‌آلای تازه و با کیفیت از مزارع پرورشی',
    inStock: true,
  },
  {
    id: '2',
    name: 'ماهی کپور',
    price: 45000,
    image: '/images/products/ماهی کپور.jpg',
    category: 'fish',
    description: 'ماهی کپور تازه و خوشمزه',
    inStock: true,
  },
  {
    id: '3',
    name: 'ماهی سفید',
    price: 120000,
    image: '/images/products/ماهی سفید.jpg',
    category: 'fish',
    description: 'ماهی سفید دریای خزر',
    inStock: true,
  },
  {
    id: '4',
    name: 'ماهی ساردین',
    price: 35000,
    image: '/images/products/ماهی ساردین.png',
    category: 'fish',
    description: 'ساردین تازه و خوشمزه',
    inStock: true,
  },
  // غذاهای دریایی
  {
    id: '5',
    name: 'میگو درشت',
    price: 180000,
    image: '/images/products/میگو درشت.jpg',
    category: 'seafood',
    description: 'میگو درشت و تازه',
    inStock: true,
  },
  {
    id: '6',
    name: 'خرچنگ زنده',
    price: 250000,
    image: '/images/products/خرچنگ زنده.jpg',
    category: 'seafood',
    description: 'خرچنگ تازه و زنده',
    inStock: true,
  },
  {
    id: '7',
    name: 'صدف خوراکی',
    price: 95000,
    image: '/images/products/صدف خوراکی.jpg',
    category: 'seafood',
    description: 'صدف تازه و خوشمزه',
    inStock: true,
  },
  {
    id: '8',
    name: 'ماهی مرکب',
    price: 110000,
    image: '/images/products/ماهی مرکب.jpg',
    category: 'seafood',
    description: 'ماهی مرکب تازه',
    inStock: true,
  },
  // تجهیزات ماهیگیری
  {
    id: '9',
    name: 'قلاب ماهیگیری',
    price: 25000,
    image: '/images/products/قلاب ماهیگیری.jpg',
    category: 'fishing',
    description: 'قلاب ماهیگیری حرفه‌ای',
    inStock: true,
  },
  {
    id: '10',
    name: 'چوب ماهیگیری',
    price: 350000,
    image: '/images/products/چوب ماهیگیری.jpg',
    category: 'fishing',
    description: 'چوب ماهیگیری حرفه‌ای',
    inStock: true,
  },
  {
    id: '11',
    name: 'طناب ماهیگیری',
    price: 45000,
    image: '/images/products/طناب ماهیگیری.webp',
    category: 'fishing',
    description: 'طناب ماهیگیری مقاوم',
    inStock: true,
  },
  {
    id: '12',
    name: 'جعبه لوازم ماهیگیری',
    price: 150000,
    image: '/images/products/جعبه لوازم ماهیگیری.jpg',
    category: 'fishing',
    description: 'جعبه کامل لوازم ماهیگیری',
    inStock: true,
  },
  // محصولات فرآوری شده
  {
    id: '13',
    name: 'ماهی تن کنسرو شده',
    price: 55000,
    image: '/images/products/ماهی تن کنسرو شده.jpg',
    category: 'processed',
    description: 'کنسرو ماهی تن با کیفیت',
    inStock: true,
  },
  {
    id: '14',
    name: 'ساردین کنسرو شده',
    price: 35000,
    image: '/images/products/ساردین کنسرو شده.jpg',
    category: 'processed',
    description: 'کنسرو ساردین خوشمزه',
    inStock: true,
  },
  {
    id: '15',
    name: 'ماهی دودی',
    price: 95000,
    image: '/images/products/ماهی دودی.jpg',
    category: 'processed',
    description: 'ماهی دودی با طعم عالی',
    inStock: true,
  },
  // تجهیزات آبزی‌پروری
  {
    id: '16',
    name: 'فیلتر آب استخر',
    price: 2500000,
    image: '/images/products/فیلتر آب استخر.jpg',
    category: 'aquaculture',
    description: 'فیلتر حرفه‌ای برای استخرهای پرورش ماهی',
    inStock: true,
  },
  {
    id: '17',
    name: 'پمپ اکسیژن',
    price: 1800000,
    image: '/images/products/پمپ اکسیژن.webp',
    category: 'aquaculture',
    description: 'پمپ اکسیژن برای آبزی‌پروری',
    inStock: true,
  },
  {
    id: '18',
    name: 'خوراک ماهی',
    price: 85000,
    image: '/images/products/خوراک ماهی.webp',
    category: 'aquaculture',
    description: 'خوراک مخصوص ماهی‌های پرورشی',
    inStock: true,
  },
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const { addToCart } = useCart()

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const categories = [
    { id: null, name: 'همه محصولات' },
    { id: 'fish', name: 'ماهی تازه' },
    { id: 'seafood', name: 'غذاهای دریایی' },
    { id: 'fishing', name: 'تجهیزات ماهیگیری' },
    { id: 'processed', name: 'محصولات فرآوری شده' },
    { id: 'aquaculture', name: 'تجهیزات آبزی‌پروری' },
  ]

  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      fish: 'ماهی تازه',
      seafood: 'غذاهای دریایی',
      fishing: 'تجهیزات ماهیگیری',
      processed: 'محصولات فرآوری شده',
      aquaculture: 'تجهیزات آبزی‌پروری',
    }
    return categoryMap[category] || ''
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price)
  }

  return (
    <section
      id="products"
      ref={ref}
      className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-ocean-50/50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-ocean-200/20 rounded-full blur-3xl"></div>
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
              محصولات
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            محصولات ما
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-24 h-1 bg-primary-600"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-primary-600 to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            بهترین محصولات شیلات و آبزیان با کیفیت عالی
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id || 'all'}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group relative"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/50 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {/* Image */}
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      scale: hoveredProduct === product.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary-600 rounded-full text-xs font-bold shadow-md">
                      {getCategoryName(product.category)}
                    </span>
                  </div>

                  {/* Stock Badge */}
                  {product.inStock && (
                    <div className="absolute top-4 left-4 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5"
                      >
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        موجود
                      </motion.div>
                    </div>
                  )}

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary-600/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Product Name */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>

                  {/* Price and Action */}
                  <div className="mt-auto space-y-4">
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 mb-1">قیمت</span>
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-gray-500">تومان</span>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      onClick={() => addToCart(product)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!product.inStock}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                    >
                      {product.inStock ? (
                        <>
                          <svg
                            className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          افزودن به سبد خرید
                        </>
                      ) : (
                        'ناموجود'
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={
                    hoveredProduct === product.id
                      ? { x: '100%', opacity: [0, 0.5, 0] }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🐟</div>
            <p className="text-xl text-gray-600">محصولی در این دسته‌بندی یافت نشد</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

