import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectStyles.module.css";
import fastapi from "./assets/projeto1.png";
import script_servidor from "./assets/python.png";
import projeto_estudo_spring from "./assets/springboot.png";
import projeto_spring from "./assets/projeto1.png"

import { SparkButton } from '@bosch-web-dds/spark-ui-react';
import { useNavigate } from "react-router-dom";

function Projects(){
    const navigate = useNavigate();
    
    const handleSkills = (event) => {
        const { value } = event.target 
        navigate(value)
    } 
    return (
        <>
            <section id="projects" className={styles.container}>
                <div>
                    <spark-header search-bar="false"></spark-header>
                </div>
                <spark-divider/>
                    <h1 className="sectionTitle">PROJECTS</h1>
                <spark-divider/>
                
                <div className={styles.projectsContainer}>
                    <ProjectCard src={fastapi}
                        link={'https://github.com/EricBritto14/FastAPI_Adega'}
                        h3='FastAPI Adega'
                        p='Backend em fastAPI'
                    />

                    <ProjectCard src={script_servidor}
                        link={'https://github.com/EricBritto14/Script_Servidor'}
                        h3='Script para o servidor da Bosch'
                        p='Script em python'
                    />

                    <ProjectCard src={projeto_estudo_spring}
                        link={'https://github.com/EricBritto14/javaSpringBoot'}
                        h3='Projeto em SpringBoot'
                        p='Projeto de estudo'
                    />

                    <ProjectCard src={projeto_spring}
                        link={'https://github.com/EricBritto14/BackEnd-Dose-Santa'}
                        h3='Backend em SpringBoot para a adega'
                        p='Projeto SpringBoot backend'
                    />
                </div>

                <div>
                    <SparkButton className="hover" type="button" text="Back" icon="" iconplacement="leading" pallete="secundary" disabled="false" custom-width="" value="/about_me" onClick={handleSkills}></SparkButton>
                    <SparkButton className="hover" type="button" text="Next" icon="" iconplacement="leading" pallete="primary" disabled="false" custom-width="" value="/skills" onClick={handleSkills}></SparkButton>
                </div>
            </section>
        </>

    )
}

export default Projects