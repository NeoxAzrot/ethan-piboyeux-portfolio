// Importation des fichiers
import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Home.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProjectHomePage from 'components/ProjectHomePage'

const Home = () => {
  const [displayMouse, setDisplayMouse] = useState(true)

  // Fonction pour enlever l'animation de la souris après un certain temps
  setTimeout(() => {
    setDisplayMouse(false)
  }, 3000 + 6000) // 3000 c'est le temps avant l'apparition, puis on ajoute le temps qu'il faut avant de le faire disparaître

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Portfolio</title>
        <meta name="description" content="Description" />
      </Helmet>

      <Header url='.'/>
      <div className={styles.container}>
        <ProjectHomePage projects={
          [
            {
              name: 'Louis Pion',
              year: '2020',
              services: 'Production vidéo',
              link: 'louis-pion',
              image: 'images/louis-pion/louis-pion-ethan-piboyeux.jpg'
            },
            {
              name: 'Mode',
              year: '2021',
              services: 'D.A, Design Graphique',
              link: 'mode',
              image: 'images/mode/lycan-mode-ethan-piboyeux.jpg'
            },
            {
              name: 'Youv Dee',
              year: '2021',
              services: 'D.A, Design Graphique',
              link: 'youv-dee',
              image: 'images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg'
            },
            {
              name: 'Trieste',
              year: '2021',
              services: 'D.A, Design Graphique',
              link: 'trieste',
              image: 'images/trieste/trieste-ethan-piboyeux.jpg'
            },
            {
              name: 'Kleidi',
              year: '2021',
              services: 'Chef de projet',
              link: 'kleidi',
              image: 'images/kleidi/kleidi-ethan-piboyeux.jpg'
            },
          ]
        }/>

        <div className={`${styles.mouse__container} ${styles.animation__opacity}`}>
          <div className={`${styles.mouse} ${displayMouse ? '' : styles.hidden}`}></div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
