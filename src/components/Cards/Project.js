import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  return (
    <div className="project-item">
      <div className="project-content">
        <h3>
          <a href={project.url} target="_blank">
            {project.name}
          </a>
          <div className="sub">
            {project.year} • {project.technos}
          </div>
        </h3>
        <p>{project.purpose}</p>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
