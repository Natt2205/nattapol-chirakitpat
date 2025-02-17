import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.facebook.com/nattapol.chirakitpat"
          h3="Artificial intelligence"
          p="AI App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.facebook.com/nattapol.chirakitpat"
          h3="System Security"
          p="Surveilance"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.facebook.com/nattapol.chirakitpat"
          h3="Internet Security"
          p="Network"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.instagram.com/nattart_near/"
          h3="Cyber Security"
          p="Software"
        />
      </div>
    </section>
  );
}

export default Projects;
