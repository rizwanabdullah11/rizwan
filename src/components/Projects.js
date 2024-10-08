import RNA from "../assets/rna.jpg";
import Medicine from "../assets/medicine.jpg";
import  AU from "../assets/project1.jpg";
import Eflyer from "../assets/eflyer.jpg";
import VRHub from "../assets/vrhub.jpg";

const projects = [
  {
    id: 1,
    name: "VR Hub",
    technologies: "React.js + Tailwind CSS",
    image: VRHub,
    github: "https://github.com/rizwanabdullah11/VR-Hub",
  },
  {
    id: 2,
    name: "Eflyer",
    technologies: "MERN Stack",
    image: Eflyer,
    github: "https://github.com/rizwanabdullah11/Eflyer",
  },
  {
    id: 3,
    name: "AU Verse",
    technologies: "Flutter",
    image: AU,
    github: "https://github.com/rizwanabdullah11/au-verse",
  },
  {
    id: 4,
    name: "Medicine Recommendation System",
    technologies: "Machine Learning",
    image: Medicine,
    github: "https://github.com/rizwanabdullah11/medicine-recommendation",
  },
  {
    id: 5,
    name: "RNA Car Rentals",
    technologies: "C# (.Net)",
    image: RNA,
    github: "https://github.com/rizwanabdullah11",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-transparent border-2 border-purple-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-purple-800 to-purple-400 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
