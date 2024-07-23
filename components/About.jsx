import aboutImg from '../assets/hehehe.jpg';
import { motion } from 'framer-motion';
import Characteristics from './Characterstics';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center lg:justify-start">
            <Characteristics />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-end">
            <img
              className="h-1/2 w-1/2 rounded-md"
              src={aboutImg}
              alt="aboutImg"
            ></img>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
