import { useState, useEffect,useRef } from 'react';
import Button from '../common/Button'
import { Resume } from '../button-component/resume';
import Skills from '../Skills/Skills';
import '../../App.css'
import { motion } from "motion/react"
const Home = () => {

  const fullText = "Nitish Kumar Sahu";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0); // typing index

  useEffect(() => {
    const speed = isDeleting ? 100 : 200;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        const char = fullText.charAt(indexRef.current);
        setDisplayText((prev) => prev + char);
        indexRef.current++;

        if (indexRef.current === fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // pause before deleting
        }
      } else {
        // Deleting
        setDisplayText((prev) => prev.slice(0, -1));
        indexRef.current--;

        if (indexRef.current === 0) {
          clearInterval(interval);
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [displayText, isDeleting]);

  return (
    <section className="hero py-5 text-white" 
    style={{
        backgroundColor: '#000',
    }} 
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4">
            <motion.img 
              src="./bio-pic.jpg" 
              alt="Developer" 
              className="img-fluid rounded-circle white-shadow-hard mb-3"
              width={300}
              initial={{ 
                 opacity: 0, scale: 0 
                  }}
              animate={{ 
                  opacity: 1, scale: 1 
                  }}
              transition={{
                  duration: 0.5,
                  scale: {
                     type: "spring", 
                     visualDuration: 0.4, 
                     bounce: 0.5 
                    },
            }} 
            
            />
            <p style={{color: '#FE0087'}}><i>"Cannot read property 'undefined' of undefined" — from both front-end AND back-end. "</i>😊</p>
            <div className='mt-3 mb-3'>
              <Resume />
            </div>
          </div>
          <div className="col-lg-8 mb-4 mb-lg-0 animate__animated animate__fadeIn">
            <h1 className="display-5 fw-bold mb-3 fs-1">
              Hi, I'm <span style={{color: '#2ba84f'}}>{displayText}</span>
            </h1>
            <h2 className="h4 mb-4" style={{color: '#FE0087'}}>MERN Stack Developer</h2>
            <p className="lead mb-4">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="d-flex gap-3">
              <Button text="View Projects" link="/services" variant="btn btn-warning" />
              <Button text="Contact Me" link="/contact" variant="btn btn-outline-success" />
            </div>
            <div className='mt-5'>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;