import React from 'react';

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
    </div>
  );
};

export default ProjectDetails;
