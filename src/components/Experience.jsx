const experiences = [
  {
    role: "React.js Developer",
    company: "Cognizant",
    duration: "Sept 2023 - Present",
    description: ["Spearheaded the development of multiple React applications, improving user engagement by 25% through optimized UI/UX design and interactive features.",
      "Implemented state management solutions using Redux, reducing application load time by 20%.",
      "Collaborated with cross-functional teams to integrate RESTful APIs, boosting application performance and reliability by 20%.",
      "Contributed to code reviews, ensuring high-quality, maintainable code and adherence to bestpractices."
    ]
  },
  

];

export default function Experience() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-700">
            <h3 className="text-xl font-bold">{exp.role} | {exp.company}</h3>
            <span className="text-sm text-blue-200">{exp.duration}</span>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </>
  );
}
