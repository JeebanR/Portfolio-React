import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6 py-20"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/src/assets/profile.jpg"
              alt="JK Profile"
              className="w-60 h-60 rounded-3xl object-cover shadow-lg border-4 border-blue-500/20"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hi, I’m <span className="font-semibold text-blue-600">JK</span>, a
              passionate{" "}
              <span className="font-semibold">Backend Developer</span>
              turned <span className="font-semibold">Fullstack Engineer</span>.
              I love solving complex problems and building scalable systems
              using
              <span className="font-semibold"> Node.js, AWS, PostgreSQL</span>,
              and now exploring
              <span className="font-semibold"> React & Tailwind</span> for
              modern web experiences.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I’ve worked on projects like Savannah India, Samunnati, and
              Ricetec USA, focusing on APIs, data pipelines, and AWS
              integrations. My goal is to blend solid backend logic with elegant
              frontend design to deliver complete, performant web solutions.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I’m not coding, you’ll find me reading tech blogs, exploring
              AI/ML, or fine-tuning new ideas for scalable architecture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
