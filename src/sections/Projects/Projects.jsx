import styles from './ProjectsStyles.module.css';
import pro01 from '../../assets/pro01.png';
import pro02 from '../../assets/pro02.png';
import pro03 from '../../assets/pro03.png';
import pro04 from '../../assets/pro04.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pro01}
          link="https://www.facebook.com/nattapol.chirakitpat"
          h3="Artificial intelligence"
          p="AI App"
        />
        <ProjectCard
          src={pro02}
          link="https://www.facebook.com/nattapol.chirakitpat"
          h3="System Security"
          p="Surveilance"
        />
        <ProjectCard
          src={pro03}
          link="https://www.facebook.com/nattapol.chirakitpat"
          h3="Internet Security"
          p="Network"
        />
        <ProjectCard
          src={pro04}
          link="https://www.instagram.com/nattart_near/"
          h3="Cyber Security"
          p="Software"
        />
      </div>
    </section>
  );
}

export default Projects;
