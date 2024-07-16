import React from "react";
import styles from '../Header/HeroStyles.module.css';
import {useTheme} from "../../Common/ThemeContext";
import LinkedinLight from "../Header/assets/linkedin-light.svg";
import LinkedinDark from "../Header/assets/linkedin-dark.svg";
import GithubLight from "../Header/assets/github-light.svg";
import GithubDark from "../Header/assets/github-dark.svg";
import sun from "../Header/assets/sun.svg";
import moon from "../Header/assets/moon.svg";
import CV from "../Header/assets/Eric.pdf";
import ProfileImg from "../Header/assets/imagem.jpg";
import { SparkButton } from '@bosch-web-dds/spark-ui-react';

function Header(){
    const {theme, toggleTheme} = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;
    const GithubIcon = theme === 'light' ? GithubLight : GithubDark;

    return <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
        <spark-header search-bar="false" sub-brand="Portifólio Eric"></spark-header>
        <spark-divider></spark-divider>

            <div className={styles.lua}>
            <img className={styles.colorMode}
                src={themeIcon}
                alt='Color mode icon'
                onClick={toggleTheme}/>
            </div>
            <img className={styles.hero}
                src={ProfileImg}
                alt="Foto de perfil"/>

            <div className={styles.info}>
                <h1>
                    Eric 
                    <br />
                    Barreto
                </h1>
                <h2>BackEnd Developer</h2>
           

            <span>
                <a href="https://www.linkedin.com/in/eric-aparecido-britto-barreto-bb492a204/">
                    <img src={LinkedinIcon} alt="Linkedin Icon"/>
                </a>
                <a href="https://github.com/EricBritto14">
                    <img src={GithubIcon} alt="Github Icon" />
                </a>
            </span>

            <p className={styles.description}>
                Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
            </p>

            <a href={CV}>
                <SparkButton className="hover" type="button" text="Resume" icon="" iconplacement="leading" pallete="primary" disabled="false" custom-width="" download></SparkButton>
            </a>
            <spark-divider></spark-divider>
            </div>
        </div>
    </section>
}

export default Header