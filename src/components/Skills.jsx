const skills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git","React-Redux","React-Router","API"];
export default function Skills() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <li key={skill} className="bg-gray-700 text-blue-200 px-4 py-2 rounded-full text-sm shadow-sm border border-white">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}