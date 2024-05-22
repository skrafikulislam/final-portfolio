import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="TypeScript" />
        <SkillList skill="Node" />
        <SkillList skill="Express" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="React" />
        <SkillList skill="MySql" />
        <SkillList skill="MongoDB" />
        <SkillList skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Redux" />
        <SkillList skill="Webpack" />
        <SkillList skill="Git" />
        <SkillList skill="PostMan" />
        <SkillList skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
