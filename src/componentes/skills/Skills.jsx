import React from 'react';
import styles from '../skills/SkillsStyles.module.css';

import checkMarkIconDark from '../skills/assets/checkmark-dark.svg';
import checkMarkIconLight from '../skills/assets/checkmark-light.svg';
import SkillList from '../../Common/SkillList';
import { useTheme } from '../../Common/ThemeContext';


function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;


  return (
    <section id='skills' className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="C#"/>
        <SkillList src={checkMarkIcon} skill="GO"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="FastAPI"/>
        <SkillList src={checkMarkIcon} skill="SpringBoot"/>
        <SkillList src={checkMarkIcon} skill="Django"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="Github"/>
      </div>
    </section>
  )
}

export default Skills
