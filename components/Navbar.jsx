import React from 'react';
import logo from '../assets/HM.png';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-14 mx-7 cursor-pointer" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaSquareXTwitter />
        <FaMediumM />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Navbar;
