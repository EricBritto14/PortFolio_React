import React from "react"
import { SparkButton } from '@bosch-web-dds/spark-ui-react';
import { useNavigate } from "react-router-dom";

function Experience(){
    const navigate = useNavigate();

    const handleHobbies = (event) =>{
        const { value } = event.target
        navigate(value)
    }

    return(
        <div>
            <div>
                <spark-header search-bar="false"></spark-header>
            </div>
            
            <div>
                <spark-divider/>
                    <h1 className="sectionTitle">Experience</h1>
                <spark-divider/>
            </div>

            <div>
                <h1>EITV (3 meses)</h1>
                <p>
                    Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
                </p>
            </div>
            
            <br/>
            <br/>
            
            <div>
                <h1>Instituto de Pesquisas Eldorado (1 ano 6 meses)</h1>
                <p>
                    Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
                </p>
            </div>

            <br/>
            <br/>

            <div>
                <h1>Bosch Brasil (8 meses)</h1>
                <p>
                    Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
                </p>
            </div>
            
            <br />
            <br />
            
            <div>
                <SparkButton className="hover" type="button" text="Back" icon="" iconplacement="leading" pallete="secundary" disabled="false" custom-width="" value="/skills" onClick={handleHobbies}></SparkButton>
                <SparkButton className="hover" type="button" text="Next" icon="" iconplacement="leading" pallete="primary" disabled="false" custom-width="" value="/hobbies" onClick={handleHobbies}></SparkButton>
            </div>

        </div>

    )
}

export default Experience