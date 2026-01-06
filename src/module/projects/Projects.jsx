import projects from "../../data/ProjectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  </section>
);

export default Projects;
