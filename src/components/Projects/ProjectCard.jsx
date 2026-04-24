
const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm text-white border border-1 animate__animated animate__fadeIn" style={{
      backgroundColor: '#000'
    }}>
      <img 
        src={project.image} 
        className="card-img-top" 
        alt={project.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}<hr /></h5>
        <p className="card-text flex-grow-1 text-success">{project.description}</p>
        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge me-1 mb-1 text-dark" style={{
              backgroundColor: '#fe0087'
            }}>{tech}</span>
          ))}
        </div>
        <div className="d-flex gap-2">
          <a 
            href={project.githubLink} 
            className="btn btn-outline-warning btn-sm flex-grow-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bi bi-github"> GitHub</span>
          </a>
          <a 
            href={project.liveLink} 
            className="btn btn-warning btn-sm flex-grow-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;