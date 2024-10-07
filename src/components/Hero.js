import HeroImage from '../assets/rizwanport.png';
import CV from '../assets/Rizwan CV.pdf';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import LightBulb from '../assets/lightbulb.png'; 

const Hero = () => {
  return (
    <div className='bg-black text-white py-24 mt-8 min-h-[700px] relative' id="home">
      <div className='container mx-auto px-4 flex flex-col-reverse md:flex-row items-center'>
        <div className='text-center ml-10 md:text-left md:w-1/2 md:pr-8 z-10 relative'>
          <h1 className='text-6xl font-bold'> 
            I&apos;m{" "}a
            <span className='bg-clip-text bg-gradient-to-r text-purple-800'>
              Rizwan Abdullah
            </span><br />
            Frontend Developer
          </h1>
          <p className='mt-3 text-lg text-gray-300 text-justify'>
            Welcome to my portfolio! I&apos;m Rizwan, a Computer Science student at Air University Islamabad,
            with valuable experience in Frontend Web Development. I have worked on numerous projects,
            continuously honing my web development skills. This portfolio showcases my work, skills, and
            accomplishments, highlighting how I can contribute to your next project or opportunity.
          </p>
          {/* Social Media Icons */}
          <div className='flex justify-center md:justify-start mt-4 space-x-3'>
            <a href="#" className="bg-purple-800 p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="bg-[#181717] p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaGithub className="text-white text-xl" />
            </a>
            <a href="#" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaInstagram className="text-white text-xl" />
            </a>
            <a href="#" className="bg-purple-800 p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaFacebook className="text-white text-xl" />
            </a>
          </div>
          {/* Resume Button */}
          <div className='mt-6'>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <button className='bg-gradient-to-r from-purple-800 to-purple-400 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full text-lg font-semibold'>
                Download CV
              </button>
            </a>
          </div>
        </div>
        
        {/* Image Section with Stack */}
        <div className='md:w-1/2 flex justify-center relative mb-10 z-0'>
          {/* Image Layer */}
          <img 
            src={HeroImage} 
            alt="Rizwan Abdullah" 
            className='w-[550px] h-[550px] object-cover transition-transform duration-300 shadow-lg'
          />

          {/* Light Bulb on top */}
          <img 
            src={LightBulb} 
            alt="Light Bulb" 
            className='absolute w-[60px] h-[150px] right-[250px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
