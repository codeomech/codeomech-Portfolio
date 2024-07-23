import React from 'react';
import { motion } from 'framer-motion';

export const RevealCharacteristics = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
      {characteristics.map((char, index) => (
        <FlipLink key={index} identity={char.identity} />
      ))}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ identity }) => {
  const parts = identity.split(' ');

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {parts.map((part, partIndex) =>
          part.split('').map((l, i) => (
            <motion.span
              key={`${partIndex}-${i}`}
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: '-100%',
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * (i + partIndex * part.length),
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))
        )}
      </div>
      <div className="absolute inset-0">
        {parts.map((part, partIndex) =>
          part.split('').map((l, i) => (
            <motion.span
              key={`${partIndex}-${i}`}
              variants={{
                initial: {
                  y: '100%',
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * (i + partIndex * part.length),
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))
        )}
      </div>
    </motion.div>
  );
};

export const characteristics = [
  {
    identity: 'wannabe guitarist',
    action: 'smooth web things',
    trait: 'fast learner',
    wish: 'work with you',
  },
  {
    identity: 'sports fanatic',
    action: 'Singing',
    trait: 'friendly',
    wish: 'play Piano',
  },
  {
    identity: 'movie eater',
    action: 'breathing',
    trait: 'easy to live',
    wish: 'watch real madrid',
  },
  {
    identity: 'Creative person',
    action: 'running and lifting',
    trait: 'good listener',
    wish: 'work again with you',
  },
];
