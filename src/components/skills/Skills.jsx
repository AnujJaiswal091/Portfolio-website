import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer
import './skills.scss';

const skills = [
  { id: 1, name: 'HTML', svg: 'html.svg' },
  { id: 2, name: 'CSS', svg: 'css.svg' },
  { id: 3, name: 'JavaScript', svg: 'js.svg' },
  { id: 4, name: 'React', svg: 'react.svg' },
  { id: 5, name: 'Node.js', svg: 'nodejs.svg' },
  { id: 6, name: 'Express.js', svg: 'express.svg' },
  { id: 7, name: 'MongoDB', svg: 'mongodb 1.svg' },
  { id: 8, name: 'SQL', svg: 'sql.png' },
  { id: 9, name: 'Firebase', svg: 'firebase.svg' },
  { id: 10, name: 'scss', svg: 'scss.svg' },
  { id: 11, name: 'Framer', svg: 'framer.svg' },
  { id: 12, name: 'Tailwind', svg: 'tailwind.svg' },
  { id: 13, name: 'git', svg: 'git.svg' },
  { id: 14, name: 'C++', svg: 'c++.svg' },
  { id: 15, name: 'JAVA', svg: 'java.svg' },
];

const getRandomDuration = () => Math.random() * 2 + 1; // Generates a random duration between 1 and 3 seconds

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setIsVisible(true); // Set isVisible to true when the component mounts
  }, []);

  return (
    <section className="skill-section" style={{ background: 'linear-gradient(180deg, #111312, #1b1b50)' }}>
      <motion.div
        className="content"
        ref={ref}
        initial={{ y: 0 }} // Ensure content is visible initially
        animate={{ y: isVisible && inView ? 0 : 100 }} // Animate only when isVisible and inView are true
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.h1>
          <b>Skills</b> & Expertise:
        </motion.h1>
        <motion.div className="outerContainer">
          {skills.map(skill => (
            <motion.div key={skill.id} className="skills-container">
              <motion.div
                className="skill-item"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                animate={{ y: [8, -8, 5, -5, 2, -2, 0, 8] }} // Same animation for all items
                transition={{
                  duration: getRandomDuration(),
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                <motion.img src={skill.svg} alt={skill.name} />
                <div className="tooltip">{skill.name}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skill;
