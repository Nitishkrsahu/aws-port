
import SectionTitle from '../common/SectionTitle';
import 'animate.css';

const About = () => {
  return (
    <section className="py-3" style={{
        backgroundColor: '#000',
        color: '#fff'
    }}>
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me" />
        
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="text-center">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="img-fluid rounded shadow-lg border border-1 animate__animated animate__backInLeft w-100" 
                style={{ maxWidth: '310px' }}
              />
            </div>
          </div>
          <div className="col-lg-8 animate__animated animate__fadeIn">
            <h3 className="mb-3" style={{color: '#FE0087'}}>Who am I?</h3>
            <p className="lead">
              I'm a passionate MERN stack developer with 3+ years of experience 
              building web applications.
            </p>
            <p className='text-success'>
              My approach focuses on clean, efficient code and creating intuitive 
              user experiences. I'm constantly learning new technologies and 
              frameworks to stay at the forefront of web development.
            </p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Name:</span>
                  <p>Nitish Kumar sahu</p>
                </div>
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Email:</span>
                  <p>nitishkrsahu123@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Experience:</span>
                  <p>2+ Years</p>
                </div>
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Location:</span>
                  <p>Hydrebad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;