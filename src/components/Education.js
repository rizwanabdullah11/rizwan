const Education = () => {
  const educationData = [
    {
      degree: "Bachelors of Science in Computer Science - BS(CS)",
      institution: "Air University Islamabad, Pakistan",
      years: "2020 - 2024",
    },
    {
      degree: "Govt Post Graduate College Jampur (Rajanpur) (HSSC)",
      institution: "BISE Dera Ghazi Khan",
      years: "2018 - 2020",
    },
  ];

  return (
    <div className="text-white bg-black py-24" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-40 text-white">
          Education
        </h2>
        <div className="space-y-24">
          {educationData.map((edu, index) => (
            <div key={index} className="mt-3 flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-bold">{edu.degree}</h2>
                <p className="text-2xl text-gray-500">{edu.institution}</p>
              </div>
              <div className="text-2xl text-gray-400 text-right">
                <p>{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
