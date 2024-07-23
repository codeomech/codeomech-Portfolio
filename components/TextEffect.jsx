import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer',
        1500,
        'Sports Enthusiast',
        1500,
        'Finance Geek',
        1500,
        'Creative Developer',
        1500,
      ]}
      speed={50}
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent md:text-3xl"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
