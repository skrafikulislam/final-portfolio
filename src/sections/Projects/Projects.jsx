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
          link="https://github.com/skrafikulislam/web3-dex-site"
          h3="Web-3"
          p="Token Exchnage App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/skrafikulislam/dalle-image-generator"
          h3="Image Generator"
          p="AI Generated"
        />
        <ProjectCard
          src={hipsster}
          link="https://foodhere-rafi.netlify.app"
          h3="Fooders-Stop"
          p="Dlicious Food Maker"
        />
        <ProjectCard
          src={fitLift}
          link="https://catbreed-rafi.netlify.app"
          h3="Cat-Breedence"
          p="Check Before Adopt"
        />
      </div>
    </section>
  );
}

export default Projects;
