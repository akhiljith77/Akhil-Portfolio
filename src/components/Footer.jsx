import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/akhiljith77" className="text-gray-400 hover:text-red-500 transition">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akhiljith-a-2446532b6/
" className="text-gray-400 hover:text-red-500 transition">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition">
            <Twitter size={24} />
          </a>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">© 2025 AK. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}