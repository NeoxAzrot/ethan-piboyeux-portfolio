// Importation des fichiers
import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project4.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'

const Project4 = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Trieste</title>
        <meta name="description" content="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." />
      </Helmet>
      
      <Header url='/trieste'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Trieste"
        index={4}
        titleLink="Essayer le jeu"
        link="https://trieste.netlify.app/"
        year={2021}
        services={['Direction artistique', 'Design graphique', 'Écriture de scénario']}
        />

        <p className={`${styles.text__introduction} ${styles.animation__transform_top}`}>Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek.</p>

        <div className={styles.images__container}>
          <img className={styles.animation__transform_top} src="images/trieste/trieste-ethan-piboyeux-4.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."/>
          <img className={styles.animation__transform_top} src="images/trieste/trieste-ethan-piboyeux-7.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."/>
          <img className={styles.animation__transform_top} src="images/trieste/trieste-ethan-piboyeux-6.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."/>
          <img className={styles.animation__transform_top} src="images/trieste/trieste-ethan-piboyeux-5.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."/>
          <img className={styles.animation__transform_top} src="images/trieste/trieste-ethan-piboyeux-2.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."/>
          <img className={styles.animation__transform_top} src="images/trieste/trieste-ethan-piboyeux-3.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."/>
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits credits={[
              {
                name: 'Enzo Arnaudet',
                role: 'Motion design, Écriture'
              },
              {
                name: 'Mathieu Delepine',
                role: 'Écriture, Motion design'
              },
              {
                name: 'Tristan Guillemot',
                role: 'Écriture, Motion design'
              },
              {
                name: 'Sami Lafrance',
                role: 'Développeur interactif'
              },
              {
                name: 'Marc Lacault',
                role: 'Sound design, Musiques'
              },
              {
                name: 'Beaux-Arts, Bordeaux',
                role: 'Collaborateur'
              }
            ]}/>

            <div className={styles.animation__background}>
              <LinkNextProject text="Kleidi" link="/kleidi"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project4
