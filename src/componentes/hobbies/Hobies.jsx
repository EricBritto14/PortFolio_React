import React from "react";
import { SparkButton } from '@bosch-web-dds/spark-ui-react';
import { useNavigate } from "react-router-dom";

function Hobies() {
    const navigate = useNavigate();

    const handleVoltar = ( event ) =>{
        const { value } = event.target 
        navigate(value)
    }

    return(
        <>
            <div>
                <spark-header search-bar="false"></spark-header>
            </div>
            
            <div>
                <spark-divider/>
                    <h1 className="sectionTitle">Hobbies</h1>
                <spark-divider/>
            </div>

            <div>
                <h1>Musicas</h1>
                <p>
                    Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
                </p>
            </div>
            
            <br/>
            <br/>
            
            <div>
                <h1>Academia</h1>
                <p>
                    Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
                </p>
            </div>

            <br/>
            <br/>

            <div>
                <h1>Estudo línguas</h1>
                <p>
                    Backend Developer, passion in Java and Python. <br/> Already used (SpringBoot, FastAPI and Django) with those languages.
                </p>
            </div>

            <br/>
            <br/>

            <div>
                <SparkButton className="hover" type="button" text="Back" icon="" iconplacement="leading" pallete="secundary" disabled="false" custom-width="" value="/experience" onClick={handleVoltar}></SparkButton>
            </div>
            
        </>

    )
}

export default Hobies