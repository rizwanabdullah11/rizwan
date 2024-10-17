import  { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rizwan.abdullah193@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-6xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-purple-800 to-purple-400 mb-4">Let&apos;s Talk</h3>
            <p>I&apos;m open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-purple-800 mr-2" />
              <a href="mailto:rizwan.abdullah193@gmail.com" className="hover:underline">
                rizwan.abdullah193@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-purple-800 mr-2" />
              <span>+92 330-8067161</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-purple-800 mr-2" />
              <span>Street # 10 Near Forward Public School Shamasabad Rawalpindi</span>
            </div>
          </div>
          <div className="flex-1 w-full"> 
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 border border-purple-800 focus:outline-none
                  focus:border-purple-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 border border-purple-800 focus:outline-none
                  focus:border-purple-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 border border-purple-800 focus:outline-none
                  focus:border-purple-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button type="submit" className="bg-gradient-to-r from-purple-800 to-purple-400 text-white
              transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;