import React from 'react';
import styles from '../skills/SkillsStyles.module.css';

import checkMarkIconDark from '../skills/assets/checkmark-dark.svg';
import checkMarkIconLight from '../skills/assets/checkmark-light.svg';
import SkillList from '../../Common/SkillList';
import { useTheme } from '../../Common/ThemeContext';

import { SparkButton } from '@bosch-web-dds/spark-ui-react';
import { useNavigate } from 'react-router-dom';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const navigate = useNavigate();

  const handleExperience = (event) => {
      const { value } = event.target
      navigate(value)
  }

  return (
    <section id='skills' className={styles.container}>
       <div>
                    <spark-header search-bar="false"></spark-header>
                </div>
                <spark-divider/>
                    <h1 className="sectionTitle">Skills</h1>
                <spark-divider/>
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

      <div>
            <SparkButton className="hover" type="button" text="Back" icon="" iconplacement="leading" pallete="secundary" disabled="false" custom-width="" value="/projects" onClick={handleExperience}></SparkButton>
            <SparkButton className="hover" type="button" text="Next" icon="" iconplacement="leading" pallete="primary" disabled="false" custom-width="" value="/experience" onClick={handleExperience}></SparkButton>
      </div>
    </section>
  )
}

export default Skills
