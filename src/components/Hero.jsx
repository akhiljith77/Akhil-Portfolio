import React from 'react'
import img from '../assets/Akhiljith.jpg'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950/10 to-black pt-20">
      <div className="text-center px-4">
        <div className="mb-6">
          <div className="w-50 h-50 mx-auto rounded-full bg-gradient-to-br from-red-500 to-red-900 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
  <img
    src={img}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Akhiljith A</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          MCA Student | Aspiring Developer 
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
          Passionate about building scalable web applications and exploring cutting-edge technologies
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/akhiljith77" className="p-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full hover:scale-110 transition">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akhiljith-a-2446532b6/" className="p-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full hover:scale-110 transition">
            <Linkedin size={24} />
          </a>
          <a href="jithakhil@811" className="p-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full hover:scale-110 transition">
            <Mail size={24} />
          </a>
        </div>

        {/* <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
          Download Resume
        </button> */}
      </div>
    </section>
  )
}