import React from 'react';
import { ExternalLink, Github, Search, ShoppingCart, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Movie Search App",
      description: "Built with JavaScript, HTML, and CSS. Uses OMDb API for fetching movie details with dynamic search functionality and responsive layouts.",
      icon: <Search className="w-8 h-8" />,
      link: "https://renukachouhan-24.github.io/Movie-Search-App/",
      github: "https://github.com/renukachouhan-24/Movie-Search-App",
      tech: ["JavaScript", "HTML", "CSS", "OMDb API"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Amazon Web Page",
      description: "Responsive e-commerce mockup featuring product listings, categories, and clean UX design with modern layout principles.",
      icon: <ShoppingCart className="w-8 h-8" />,
      link: "https://renukachouhan-24.github.io/Amazon-Page/",
      github: "https://github.com/renukachouhan-24/Amazon-Page",
      tech: ["HTML", "CSS", "Responsive Design"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Notes Taking App",
      description: "Feature-rich note-taking application with add, edit, delete functionality and local storage for data persistence.",
      icon: <FileText className="w-8 h-8" />,
      link: "https://renukachouhan-24.github.io/Notes-taker/",
      github: "https://github.com/renukachouhan-24/Notes-taker",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've built to showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;