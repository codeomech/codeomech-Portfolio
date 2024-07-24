import React, { useState, useEffect, useRef } from 'react';
import '../common/RoundedButton/buttoncss.css';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

export default function Hero() {
  const [currentChild, setCurrentChild] = useState(0);
  const tlxRefs = useRef([]);
  const characteristics = [
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
      identity: 'creative person',
      action: 'running and lifting',
      trait: 'good listener',
      wish: 'run half marathon',
    },
  ];

  const handleReload = () => {
    setCurrentChild((prev) => (prev + 1) % characteristics.length);
  };

  useEffect(() => {
    const animateText = (selector) => {
      const element = document.querySelector(selector);
      if (!element) return;

      if (tlxRefs.current[selector]) {
        tlxRefs.current[selector].kill();
      }

      const splitTitle = new SplitTextJS(element);

      const tlx = gsap.timeline();
      tlx.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.05,
          duration: 1,
        },
        '<'
      );

      tlx.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.05,
          duration: 1,
        },
        '<1'
      );

      tlxRefs.current[selector] = tlx;
    };

    animateText('.text-wrapper-identity');
    animateText('.text-wrapper-action');
    animateText('.text-wrapper-trait');
    animateText('.text-wrapper-wish');
  }, [currentChild]);

  return (
    <>
      <div className="flex items-center text-6xl gap-3">
        I am a{' '}
        <div className="text-wrapper text-wrapper-identity">
          <p>{characteristics[currentChild].identity}</p>
        </div>
      </div>
      <div className="flex items-center text-6xl gap-3 mt-5">
        I do{' '}
        <div className="text-wrapper text-wrapper-action">
          <p>{characteristics[currentChild].action}</p>
        </div>
      </div>
      <div className="flex items-center text-6xl gap-3 mt-5">
        I am also{' '}
        <div className="text-wrapper text-wrapper-trait">
          <p>{characteristics[currentChild].trait}</p>
        </div>
      </div>
      <div className="flex items-center text-6xl gap-3 mt-5">
        I wish to{' '}
        <div className="text-wrapper text-wrapper-wish">
          <p>{characteristics[currentChild].wish}</p>
        </div>
      </div>
      <button className="reload-button" onClick={handleReload}>
        Reload Animation
      </button>
    </>
  );
}
