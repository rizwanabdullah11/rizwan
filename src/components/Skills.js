import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs } from "react-icons/fa"; // Frontend and Backend icons
import { SiCplusplus, SiPython, SiCsharp, SiFlutter, SiSqlite, SiMongodb, 
  SiExpress, SiRedux, SiNextdotjs  } from "react-icons/si"; // Programming Languages and Database icons

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="skill">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className=" text-6xl font-bold text-center mb-12">SKILLS</h2>

        {/* Skills Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12"> {/* Flex container for multiple columns */}
          
          {/* Frontend Column */}
          <div className="bg-gray-800 border-2 border-purple-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6 text-white pt-4 text-center">Frontend</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-start space-x-4">
                <FaHtml5 size={30} />
                <span>HTML</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <FaCss3Alt size={30} />
                <span>CSS</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <FaBootstrap size={30} />
                <span>Bootstrap</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <FaJs size={30} />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <FaReact size={30} />
                <span>React.js</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiRedux size={30} />
                <span>Redux.js</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiNextdotjs size={30} />
                <span>Next.js</span>
              </li>
            </ul>
          </div>

          {/* Programming Languages Column */}
          <div className="bg-gray-800 border-2 border-purple-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6 text-white pt-4 text-center">Programming Languages</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-start space-x-4">
                <FaJs size={30} />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiCplusplus size={30} />
                <span>C++</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiPython size={30} />
                <span>Python</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiCsharp size={30} />
                <span>C#</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiFlutter size={30} />
                <span>Flutter</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiSqlite size={30} />
                <span>Structured Query Language (SQL)</span>
              </li>
            </ul>
          </div>

          {/* Backend & Database Column */}
          <div className="bg-gray-800 border-2 border-purple-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6 text-white pt-4 text-center">Backend & Database</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-start space-x-4">
                <FaNodeJs size={30} />
                <span>Node.js</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiExpress size={30} />
                <span>Express.js</span>
              </li>
              <li className="flex items-center justify-start space-x-4">
                <SiMongodb size={30} />
                <span>MongoDB</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
