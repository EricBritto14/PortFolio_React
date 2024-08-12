import React from "react";
import { SparkButton } from '@bosch-web-dds/spark-ui-react';
import { useNavigate } from "react-router-dom";

function AboutMe(){
    const navigate = useNavigate();
    
    const handleProjects = (event) =>{
        const { value } = event.target
        navigate(value)
    }

    return(
        <>
            <div>
                <spark-header search-bar="false"></spark-header>
            </div>
            <spark-divider/>
                <h1>About Me</h1>
            <spark-divider/>
            <p>
                Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
            </p>

            <div>
                <SparkButton className="hover" type="button" text="Back" icon="" iconplacement="leading" pallete="secundary" disabled="false" custom-width="" value="/" onClick={handleProjects}></SparkButton>
                <SparkButton className="hover" type="button" text="Next" icon="" iconplacement="leading" pallete="primary" disabled="false" custom-width="" value="/projects" onClick={handleProjects}></SparkButton>
            </div>
        </>
    )
}

export default AboutMe