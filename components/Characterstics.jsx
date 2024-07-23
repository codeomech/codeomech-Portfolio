import { useState } from 'react';
import { characteristics } from '../constants';
import { motion } from 'framer-motion';
import Rounded from '../common/RoundedButton';
import '../common/RoundedButton/buttoncss.css';

const DURATION = 0.25;
const STAGGER = 0.025;

const CharacterSpan = ({ children, custom }) => (
  <motion.span
    variants={{
      hidden: { y: '100%' },
      visible: { y: 0 },
    }}
    transition={{
      duration: DURATION,
      ease: 'easeInOut',
      delay: STAGGER * custom,
    }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

const AnimatedText = ({ text }) => (
  <>
    {text.split('').map((char, i) => (
      <CharacterSpan key={i} custom={i}>
        {char === ' ' ? '\u00A0' : char}
      </CharacterSpan>
    ))}
  </>
);

const Characteristics = () => {
  const [index, setIndex] = useState(0);

  const handleReload = () => {
    setIndex((prevIndex) => (prevIndex + 1) % characteristics.length);
  };

  const { identity, action, trait, wish } = characteristics[index];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="grid gap-4 ">
      <div>
        <div className="flex flex-col text-white ">
          <div className="relative block whitespace-nowrap text-3xl lg:text-6xl">
            I am a{' '}
            <motion.span
              key={identity}
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-customColors-purple1"
            >
              <AnimatedText text={identity} />
            </motion.span>
          </div>
          <div className="relative block whitespace-nowrap text-3xl lg:text-6xl">
            I do{' '}
            <motion.span
              key={action}
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-customColors-purple2"
            >
              <AnimatedText text={action} />
            </motion.span>
          </div>
          <div className="relative block whitespace-nowrap text-3xl lg:text-6xl">
            I am also{' '}
            <motion.span
              key={trait}
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-customColors-pink1"
            >
              <AnimatedText text={trait} />
            </motion.span>
          </div>
          <div className="relative block whitespace-nowrap text-3xl lg:text-6xl">
            I wish to{' '}
            <motion.span
              key={wish}
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-customColors-pink2"
            >
              <AnimatedText text={wish} />
            </motion.span>
          </div>
        </div>
        <Rounded onClick={handleReload}>
          <p>Reload</p>
        </Rounded>
      </div>
    </section>
  );
};

export default Characteristics;
