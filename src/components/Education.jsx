const education = [
    {
      degree: "B.E. in Information Technology",
      institution: "Smt. Kashibai Navale College Of Engineering",
      year: "2019 - 2023",
      Marks:"CGPA : 8.8",
      location:"Pune, Maharashtra"
    },
    {
        degree: "12th Science",
        institution: "R. K. Kakani Junior College",
        year: "2018 - 2019",
        Marks:"Percentage : 78",
        location:"Malegaon, Maharashtra"
      }
  ];
  
  export default function Education() {
    return (
      <>
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {education.map((edu, idx) => (
          <div key={idx} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-700 ">
            <h3 className="text-xl font-bold">{edu.degree} ({edu.year})</h3>
            <span className="text-sm text-blue-200">{edu.institution} | {edu.location} </span>
            <p className="text-sm text-white font-extrabold mt-1">{edu.Marks}</p>
            
          </div>
        ))}
        </div>
      </>
    );
  }
  