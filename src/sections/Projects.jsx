import React from 'react';
import styles from './ProjectStyles.module.css'
import Traffic from '../assets/OIP.jpg'

function Projects() {
  return (
    <section id = "projects" className={styles.container }>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/ketheoduoias/NCKH2023.git" target="_blank">
        <img className="hover" src={Traffic} alt="traffic app logo "/>
        <h3>Traffic</h3>
        <p>detect traffic smart</p>
        </a>
      </div>
      </section>
  );
}

export default Projects;
