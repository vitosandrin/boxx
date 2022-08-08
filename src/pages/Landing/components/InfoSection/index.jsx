import React from "react";
import { Loader } from "../../../../components";
import styles from './styles.module.css'

import rocket from '../../../../assets/json/alein.json'

const InfoSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info_container}>
                <h1 className={styles.title}>O que a .boxx proporciona?</h1>
                <div className={styles.desc_container}>
                    <p>☄️Entrega ágil e fiel ao cronograma.</p>
                    <p>☄️Qualidade com diferenciais competitivos.</p>
                    <p>☄️Controle e liberdade de criação.</p>
                </div>
                <h1 className={styles.title}>Nossos Serviços:</h1>
                <div className={styles.desc_container}>
                    <p>⚡️Landing Page de Alta Conversão.</p>
                    <p>⚡️Sistemas Web com Banco de Dados e Servidor Dedicado.</p>
                    <p>⚡️E-Commerce Completo com Painel De Controle ADM.</p>
                    <p>⚡️Sites Institucionais.</p>
                    <p>⚡️MarketPlace.</p>
                    <p>⚡️Design Gráfico.</p>
                    <p>⚡️E Muito Mais!</p>
                </div>
            </div>
            <div className={styles.loader}>
                <Loader height={350} width={350} data={rocket} />
            </div>
        </section>
    )
}

export default InfoSection