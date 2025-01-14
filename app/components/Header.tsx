"use client"

import Link from 'next/link'
import { Moon, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Moon className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold text-purple-500">MysticRealm</span>
          </Link>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><Link href="#services" className="block text-white hover:text-purple-500 transition-colors py-2 px-4 md:px-0">Servicios</Link></li>
              <li><Link href="#testimonials" className="block text-white hover:text-purple-500 transition-colors py-2 px-4 md:px-0">Testimonios</Link></li>
              <li><Link href="#contact" className="block text-white hover:text-purple-500 transition-colors py-2 px-4 md:px-0">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

