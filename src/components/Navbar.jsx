import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-red-900/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Portfolio
          </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-red-500 transition duration-300 text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-red-500"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-red-900/20 to-black border-t border-red-900/50 p-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 hover:text-red-500 transition text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}