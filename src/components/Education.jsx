import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 mb-8">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        <li className="bg-red-black-gradient p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
          <p>[University Name], [City] - [Expected Graduation Year]</p>
          <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems.</p>
        </li>
        <li className="bg-red-black-gradient p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
          <p>[University Name], [City] - [Graduation Year]</p>
          <p>GPA: [Your GPA]</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;