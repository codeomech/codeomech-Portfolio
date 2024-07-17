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
        <a href="https://github.com/codeomech" target="_blank">
          <FaGithub />{' '}
        </a>
        <a href="https://x.com/Harshhhhhhit" target="_blank">
          {' '}
          <FaSquareXTwitter />{' '}
        </a>
        <a href="https://medium.com/@harshitmangla96" target="_blank">
          <FaMediumM />{' '}
        </a>
        <a href="https://github.com/codeomech" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
