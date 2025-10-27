import React from 'react';

const Education = () => {
     const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "MACFAST College, Thiruvalla",
      year: "Expected Graduation: 2027",
      details:
        "Relevant Coursework: DSA, Web Dev, DBMS, AI ML",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      university: "SAS SNDP Yogam College, Konni",
      year: "Graduated: 2023",
      details: "GPA: 6.2/10",
    },
  ];
   return (
    <section id="education" className="py-20 px-4 bg-black border-y border-red-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            Education
          </span>
        </h2>

        <div
          className={`grid gap-8 ${
            educationData.length === 1 ? "place-items-center" : "md:grid-cols-2"
          }`}
        >
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-lg overflow-hidden hover:border-red-500 transition group p-6"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 mb-1">{edu.university}</p>
                  <p className="text-gray-500 mb-4">{edu.year}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;