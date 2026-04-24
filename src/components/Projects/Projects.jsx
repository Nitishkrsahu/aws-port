
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration, admin dashboard, and product management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: '/ecommerce.png',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and user authentication.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      image: '/task.png',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and user authentication.',
      technologies: ['php', 'Laravel', 'SQL', 'Flutter'],
      image: '/ecommerce.png',
      githubLink: '#',
      liveLink: '#'
    }

  ];

  return (
    <section className="py-2" style={{
        backgroundColor: '#000',
        color: '#fff'
    }}>
      <div className="container">
        <SectionTitle title="My Projects" subtitle="What I've built" />
        
        <div className="row g-4 ">
          {projects.map(project => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;