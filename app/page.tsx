'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Categories from '@/components/Categories'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'
import { CartProvider } from '@/context/CartContext'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CartProvider>
      <main className="min-h-screen bg-white">
        <Navigation isScrolled={isScrolled} onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <Categories />
        <Products />
        <About />
        <Services />
        <Contact />
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </main>
    </CartProvider>
  )
}

