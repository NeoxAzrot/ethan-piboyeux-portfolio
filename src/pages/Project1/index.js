// Importation des fichiers
import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project1.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'

const Project1 = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Louis Pion</title>
        <meta name="description" content="Vidéo de présentation de produit de la Montre ACHILLE XK1491IN2-15 de louis pion, réalisé par Ethan Piboyeux." />
      </Helmet>
      
      <Header url='/louis-pion'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Louis Pion"
        index={1}
        titleLink="Voir la vidéo"
        link="https://youtu.be/MK6FZHSqu68"
        year={2021}
        services={['Direction artistique', 'Production vidéo', 'Montage vidéo']}
        />

        <div className={styles.images__container}>
          <video className={styles.animation__transform_top} controls controlsList="nodownload" poster="images/louis-pion/louis-pion-ethan-piboyeux-miniature.jpg">
            <source src="images/louis-pion/louis-pion-ethan-piboyeux.mp4" type="video/mp4"/>
          </video>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-2.jpg" alt=" Vidéo de présentation de produit de la Montre ACHILLE XK1491IN2-15 de louis pion, réalisé par Ethan Piboyeux."/>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-3.jpg" alt=" Vidéo de présentation de produit de la Montre ACHILLE XK1491IN2-15 de louis pion, réalisé par Ethan Piboyeux."/>
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-4.jpg" alt=" Vidéo de présentation de produit de la Montre ACHILLE XK1491IN2-15 de louis pion, réalisé par Ethan Piboyeux."/>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-5.jpg" alt=" Vidéo de présentation de produit de la Montre ACHILLE XK1491IN2-15 de louis pion, réalisé par Ethan Piboyeux."/>
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Mode" link="/mode"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project1
