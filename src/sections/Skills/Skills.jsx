import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionmTitle">Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Python"/>
      <SkillList src={checkMarkIcon} skill="Pytourch"/>
      <SkillList src={checkMarkIcon} skill="Dart"/>
      
     
    </div>
    
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Python"/>
      <SkillList src={checkMarkIcon} skill="Pytourch"/>
      <SkillList src={checkMarkIcon} skill="Dart"/>
      
     
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Flutter"/>
      <SkillList src={checkMarkIcon} skill="Firebase"/>
      <SkillList src={checkMarkIcon} skill="SQL"/>
      <SkillList src={checkMarkIcon} skill="MongoDB"/>
      <SkillList src={checkMarkIcon} skill="Numpy"/>
      <SkillList src={checkMarkIcon} skill="Pandas"/>
     
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Firewall"/>
      <SkillList src={checkMarkIcon} skill="Kalilinux"/>
      <SkillList src={checkMarkIcon} skill="Network"/>
  
     
    </div>
    </section>
    
  )
}

export default Skills;