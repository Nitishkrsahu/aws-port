import { useEffect, useState } from "react";
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    axios.get('/skills.json')
      .then((response) => {
        setSkill(response.data);
      });
  }, []);

  const loopSkills = [...skill, ...skill];

  return (
    <section className="m-lg-3">
      <h2 className="text-info py-lg-4">My Skills</h2>
      <div className="skills-slider-box p-2">
        <div className="skills-slider-track">
          {loopSkills.map((item, index) => (
            <div className="skill-item bg-dark rounded rounded-1 p-1" key={index}>
              <img src={item.image} alt="tech-icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
