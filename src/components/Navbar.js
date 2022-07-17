import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[54px] flex justify-end items-center px-4  text-white bg-black">
      <ul className="hidden md:flex">
        <li className="font-medium tracking-wider hover:text-cyan-600 duration-150">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="font-medium tracking-wider hover:text-cyan-600 duration-150">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-medium tracking-wider hover:text-cyan-600 duration-150">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-medium tracking-wider hover:text-cyan-600 duration-150">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="font-medium tracking-wider hover:text-cyan-600 duration-150">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "md:hidden absolute top-0 left-[-750px] w-full h-screen bg-[#000000] flex flex-col justify-center items-center duration-500"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center ease-in duration-500"
        }
      >
        <li className="py-6 tracking-wide font-mono text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 tracking-wide font-mono text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 tracking-wide font-mono text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 tracking-wide font-mono text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 tracking-wide font-mono text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/divyank-singh-rawat/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/DivyankRawat"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:divyankrawat10@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/152P5c8zjOFROdjTNgRiocm7rjXn7IMXq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
