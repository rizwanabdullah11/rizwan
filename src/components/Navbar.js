import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50 shadow-lg'>
      <div className='container py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-3xl font-bold'>Rizwan</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8 text-lg'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#skill" className='hover:text-gray-400'>Skills</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#education" className='hover:text-gray-400'>Education</a>
        </div>

        {/* Connect Button (Desktop) */}
        <a 
          href="#contact" 
          className='bg-gradient-to-r from-purple-800 to-purple-300 text-white hidden md:inline 
            transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full text-lg'
        >
          Contact Me
        </a>

        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden text-3xl cursor-pointer' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full`}>
        <div className='flex flex-col items-center space-y-6 py-8'>
          <a href="#home" className='hover:text-gray-400' onClick={toggleMenu}>Home</a>
          <a href="#skill" className='hover:text-gray-400' onClick={toggleMenu}>Skills</a>
          <a href="#project" className='hover:text-gray-400' onClick={toggleMenu}>Projects</a>
          <a href="#education" className='hover:text-gray-400' onClick={toggleMenu}>Education</a>
          <a 
            href="#contact" 
            className='bg-gradient-to-r from-purple-800 to-purple-200 text-white px-6 py-3 rounded-full text-lg'
            onClick={toggleMenu}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
