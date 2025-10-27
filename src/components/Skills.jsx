import React from 'react'
export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vite']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'NestJs','postgresql']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman',  'Docker']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-lg p-8 hover:border-red-500 transition"
            >
              <h3 className="text-2xl font-bold mb-6 text-red-500">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-red-900/30 to-red-900/10 border border-red-700/50 rounded-full text-sm font-semibold hover:border-red-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}