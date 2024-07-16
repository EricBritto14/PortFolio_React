import React from "react";
import styles from "../componentes/FooterStyles.module.css"

function Footer(){
    return (
        <section id="footer" className={styles.container}>
            <p> 
            <spark-divider></spark-divider>
            &copy; Eric Barreto 2024. <br/>
            Projeto de portfólio em React.
            </p>
        </section>
    )
}

export default Footer