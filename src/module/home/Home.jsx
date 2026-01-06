import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800"
      >
        Hello there, It's <span className="text-blue-500">Jeeban</span>
      </motion.h1>
      <p className="mt-4 text-gray-600 text-lg">Full Stack Developer | React Enthusiast | AWS Expert | Node Js</p>
    </section>
  );
};

export default Home;
