const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:underline" target="_blank">View Project</a>
    </div>
  </div>
);

export default ProjectCard;
