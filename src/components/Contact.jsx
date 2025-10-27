import { Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import React from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-lg p-8">
            <Mail className="text-red-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:your@email.com" className="text-gray-400 hover:text-red-500 transition">
              jithakhil811@email.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-lg p-8">
            <MessageSquare className="text-red-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
            <p className="text-gray-400">Feel free to reach out for collaborations</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-red-500 outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-red-500 outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-black border border-red-900/50 rounded px-4 py-2 text-white focus:border-red-500 outline-none transition resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-700 py-3 rounded font-semibold hover:shadow-lg hover:shadow-red-500/50 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}