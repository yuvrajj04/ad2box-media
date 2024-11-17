import { useState } from "react";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white py-4 px-6">
      <div className="text-lg font-bold">
        Ad2box Media
      </div>

      <ul className="hidden md:flex gap-5">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#portfolio" className="hover:underline">Portfolio</a>
        <a href="#team" className="hover:underline">Team</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </ul>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li><a href="#home" onClick={toggleMenu} className="hover:underline">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:underline">About</a></li>
          <li><a href="#services" onClick={toggleMenu} className="hover:underline">Services</a></li>
          <li><a href="#portfolio" onClick={toggleMenu} className="hover:underline">Portfolio</a></li>
          <li><a href="#team" onClick={toggleMenu} className="hover:underline">Team</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:underline">Contact</a></li>
        </ul>
      )}

    </nav>
  )
}

export default NavBar
