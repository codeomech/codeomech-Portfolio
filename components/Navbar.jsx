import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';
import { BugAntIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Magnetic from '../common/RoundedButton/Magnetic';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.div
          initial={{ y: -200, opacity: 1 }}
          animate={{ y: [0, 40, -20, 20, 0], opacity: 1 }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            times: [0, 0.3, 0.5, 0.7, 1],
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{ color: isHovered ? '#4f3a87' : '#ffffff' }} // Change color on hover
            transition={{ duration: 0.3 }}
          >
            <Magnetic>
              <BugAntIcon className="size-10 cursor-pointer" />
            </Magnetic>
          </motion.div>
        </motion.div>
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
