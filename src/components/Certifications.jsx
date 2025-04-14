const certifications = [
    {
      name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      year: "2024"
    },
    {
      name: "Salesforce Certified AI Associate",
      year: "2024"
    }
  ];
  
  export default function Certifications() {
    return (
      <>
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          {certifications.map((cert, idx) => (
            <li key={idx} className="text-sm">
              <strong>{cert.name}</strong> - {cert.year}
            </li>
          ))}
        </ul>
      </>
    );
  }
  