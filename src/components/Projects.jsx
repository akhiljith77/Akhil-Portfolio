import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with React frontend and Node.js backend',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management system with user authentication and notifications',
      tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data and forecasts',
      tags: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      github: '#',
      live: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black border-y border-red-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-lg overflow-hidden hover:border-red-500 transition group"
            >
              <div className="h-48 bg-gradient-to-br from-red-900/30 to-black flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-red-900/30 border border-red-700/50 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-red-500 hover:text-red-400 transition">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-red-500 hover:text-red-400 transition">
                    <ExternalLink size={20} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}