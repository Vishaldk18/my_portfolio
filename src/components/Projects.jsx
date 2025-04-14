const projects = [
  {
    title: "Cricketly",
    description: [
      "A cricket accessories e-commerce site built with React and Redux.",
      "Utilized React.js for building reusable components, managing state with hooks, and optimizing UI rendering."
    ],
    url: "https://cricketly.netlify.app"
  },
  {
    title: "WeatherMate",
    description: [
      "Developed a weather forecasting application using React and Redux",
      "Integrated the Weather Map API for real-time weather updates and forecasts, displaying location- based temperature data.",

    ],
    url: "https://weathermate.netlify.app"
  },
  {
    title: "VideoNest",
    description: [
      "A video search and play app using YouTube API, built with React.",
      "Allows users to search, view, and play YouTube videos directly within the application.",
      "Built with a responsive layout to ensure seamless usage across devices."
    ],
    url: "https://videonest.netlify.app"
  },
  {
    title: "Resume & Cover Letter Generator",
    description: [
      "A React-based web application that leverages OpenRouter's GPT-3.5 to generate professional resumes and cover letters.",
      "Users input key details via a form and instantly receive AI-generated documents tailored to their profile.",
      "Includes functionality to download generated resumes or cover letters as properly formatted .docx files using the docx library.",
      "Built with a sleek and responsive UI using Tailwind CSS, featuring smooth loading states and error handling.",
      
    ],
    url: "https://yourcvresumegenerator.netlify.app/"
  }
];

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 bg-gray-700 text-white"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 mt-2">
              {Array.isArray(project.description)
                ? project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))
                : <li>{project.description}</li>}
            </ul>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-300 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-lg"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
