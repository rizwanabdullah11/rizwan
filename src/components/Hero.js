import { useState, useEffect } from 'react';
import HeroImage from '../assets/rizwanport.png';
import CV from '../assets/Rizwan CV.pdf';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import LightBulb from '../assets/lightbulb.png';

const Hero = () => {
  const [nameIndex, setNameIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [isPaused, setIsPaused] = useState(false);
  const fullName = "Rizwan Abdullah";

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused) return;

      if (direction === 'forward') {
        if (nameIndex < fullName.length) {
          setNameIndex(prev => prev + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setDirection('backward');
          }, 3000); // 3 second pause
        }
      } else {
        if (nameIndex > 0) {
          setNameIndex(prev => prev - 1);
        } else {
          setDirection('forward');
        }
      }
    }, 100); // Adjust timing as needed

    return () => clearInterval(timer);
  }, [nameIndex, direction, isPaused]);

  const renderName = () => {
    return fullName.split('').map((char, index) => (
      <span
        key={index}
        className={`inline-block transition-opacity duration-200 ${
          index < nameIndex ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className='bg-black text-white py-12 sm:py-24 pt-20 min-h-[700px] relative' id="home">
      <div className='container mx-auto px-4 flex flex-col-reverse md:flex-row items-center'>
        <div className='text-center md:text-left md:w-1/2 md:pr-8 z-10 mt-8 md:mt-0'>
          <h1 className='text-4xl sm:text-5xl mt-10 md:text-6xl font-bold font-garamond'>
            I&apos;m{" "}
            <span className='bg-clip-text mt-10 text-transparent bg-gradient-to-r from-purple-800 to-purple-400 inline-block'>
              {renderName()}
            </span>
          </h1>
          <h2 className='font-montserrat text-2xl mt-10 sm:text-3xl md:text-4xl font-semibold mt-2'>
            Frontend Developer
          </h2>
          <p className='mt-3 text-base sm:text-lg mt-8 text-gray-300 text-justify font-garamond'>
            Welcome to my portfolio! I&apos;m Rizwan, a Computer Science graduate specializing in Frontend Web Development. I have worked on numerous projects, continuously refining my web development skills. This portfolio highlights my work, skills, and achievements, demonstrating how I can add value to your next project or opportunity.
          </p>
          {/* Social Media Icons */}
          <div className='flex justify-center md:justify-start mt-8 space-x-3'>
            <a href="https://www.linkedin.com/in/rizwan-abdullah-804208232/" className="bg-purple-800 p-2 sm:p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaLinkedin className="text-lg sm:text-xl" />
            </a>
            <a href="https://github.com/rizwanabdullah11/" className="bg-[#181717] p-2 sm:p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaGithub className="text-white text-lg sm:text-xl" />
            </a>
            <a href="https://www.instagram.com/rizwan_abdullah11/" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-2 sm:p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaInstagram className="text-white text-lg sm:text-xl" />
            </a>
            <a href="https://www.facebook.com/rizwan.abdullah.5458/" className="bg-purple-800 p-2 sm:p-3 rounded-full transform hover:scale-110 transition duration-300">
              <FaFacebook className="text-white text-lg sm:text-xl" />
            </a>
          </div>
          {/* Resume Button */}
          <div className='mt-10'>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <button className='bg-gradient-to-r from-purple-800 to-purple-400 text-white transform transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold'>
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Image Section with Stack */}
        <div className='md:w-1/2 flex justify-center relative mb-8 md:mb-0 z-0'>
          <img 
            src={HeroImage} 
            alt="Rizwan Abdullah" 
            className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] object-cover transition-transform duration-300 shadow-lg'
          />
          <img 
            src={LightBulb} 
            alt="Light Bulb" 
            className='absolute right-20 top-[-60px] w-14 sm:w-16 md:w-20'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
