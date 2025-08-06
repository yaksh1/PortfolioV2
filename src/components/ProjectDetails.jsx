import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="project-details">
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.technologies &&
          project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
        <FaGithub className="github-icon" />
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;
