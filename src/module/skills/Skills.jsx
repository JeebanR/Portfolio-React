import React from "react";
import { Code, Database, Cloud, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    name: "JavaScript / TypeScript",
  },
  {
    icon: <Terminal className="w-8 h-8 text-green-500" />,
    name: "Node.js / Express",
  },
  {
    icon: <Database className="w-8 h-8 text-purple-500" />,
    name: "PostgreSQL / MongoDB",
  },
  {
    icon: <Cloud className="w-8 h-8 text-yellow-500" />,
    name: "AWS (Lambda, S3, RDS)",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {skill.icon}
              <p className="mt-4 text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
