import { useState } from 'react';
import { characteristics } from '../constants';

const Characteristics = () => {
  const [index, setIndex] = useState(0);

  const handleReload = () => {
    setIndex((prevIndex) => (prevIndex + 1) % characteristics.length);
  };

  const { identity, action, trait, wish } = characteristics[index];

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <p className="text-6xl mb-6">
        I am a <span className="text-green-400 font-playwrite">{identity}</span>
      </p>
      <p className="text-6xl mb-6">
        I do <span className="text-blue-400 font-playwrite">{action}</span>
      </p>
      <p className="text-6xl mb-6">
        I am also <span className="text-red-400 font-playwrite">{trait}</span>
      </p>
      <p className="text-6xl mb-10">
        I wish to <span className="text-yellow-400 font-playwrite">{wish}</span>
      </p>
      <button
        onClick={handleReload}
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg focus:outline-none"
      >
        Reload
      </button>
    </div>
  );
};

export default Characteristics;
