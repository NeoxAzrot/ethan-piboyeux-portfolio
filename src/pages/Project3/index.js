// Importation des fichiers
import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project3.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'

const Project3 = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Youv Dee</title>
        <meta name="description" content="Description" />
      </Helmet>
      
      <Header url='/youv-dee'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Youv Dee"
        index={3}
        titleLink="Écouter l'album"
        link="https://open.spotify.com/playlist/3t4yLWMNFch9wLMoTRRt1S?si=50838cba63824015"
        year={2021}
        services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <img className={styles.animation__transform_top} src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg"/>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-2.jpg"/>
            <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-3.jpg"/>
          </div>
          <img className={styles.animation__transform_top} src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-4.jpg"/>
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits credits={[
              {
                name: 'Ashwin Cazal',
                role: 'Images'
              },
              {
                name: 'Youv Dee',
                role: 'Artiste'
              }
            ]}/>

            <div className={styles.animation__background}>
              <LinkNextProject text="Projet suivant" link="/trieste"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project3
