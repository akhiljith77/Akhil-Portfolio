import React from 'react'
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black border-y border-red-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a dedicated MCA student with a strong foundation in computer science. I have a passion for full-stack web development and love solving complex problems through code.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Currently, I'm focusing on modern JavaScript frameworks, cloud technologies, and software architecture. I believe in continuous learning and staying updated with industry trends.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects or exploring new technologies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-500">Quick Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li><span className="text-red-500 font-semibold">Education:</span> MCA (Pursuing)</li>
              <li><span className="text-red-500 font-semibold">Location:</span> Kerala,India</li>
              <li><span className="text-red-500 font-semibold">Focus:</span> Software Development</li>
              <li><span className="text-red-500 font-semibold">Interests:</span> FullStack Dev, AI/ML, Cloud</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}