// Importation des fichiers
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project2.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'
import ModalImage from 'components/ModalImage'

const Project2 = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Les variables pour le modal des images
  const [imageModal, setImageModal] = useState()
  const [altModal, setAltModal] = useState()
  const [displayModal, setDisplayModal] = useState(false)

  // Fonction pour changer l'image en fonction de l'image sur laquelle on clique
  const handleImage = (x) => {
    setImageModal(x.target.src)
    setAltModal(x.target.alt)
    setDisplayModal(true)
  }

  // Fonction pour cacher l'image au clique
  useEffect(() => {
    // On désactive l'image si et seulement si l'image est déjà activé
    const clickHandler = () => {
      if(displayModal) {
        setDisplayModal(false)
      }
    }

    // On utilie un listener pour chaque clique
    window.addEventListener("click", clickHandler, false)

    return () => {
      window.removeEventListener("click", clickHandler, false)
    }
  })
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Mode</title>
        <meta name="description" content="Design Graphique de la pochette (cover) du single « Mode » de l'artiste Lycan, réalisé par Ethan Piboyeux." />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal}/>
      
      <Header url='/mode'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Mode"
        index={2}
        titleLink="Écouter le single"
        link="https://open.spotify.com/track/3Cdho3oYoyHUKLvd06s2Uw?si=8144267fd9914bac"
        year={2021}
        services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <img className={styles.animation__transform_top} src="images/mode/lycan-mode-ethan-piboyeux-2.jpg" alt="Design Graphique de la pochette (cover) du single 'Mode' de l'artiste Lycan, réalisé par Ethan Piboyeux." onClick={handleImage} />
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/mode/lycan-mode-ethan-piboyeux-3.jpg" alt="Design Graphique de la pochette (cover) du single 'Mode' de l'artiste Lycan, réalisé par Ethan Piboyeux." onClick={handleImage} />
            <img src="images/mode/lycan-mode-ethan-piboyeux-4.jpg" alt="Design Graphique de la pochette (cover) du single 'Mode' de l'artiste Lycan, réalisé par Ethan Piboyeux." onClick={handleImage} />
          </div>
          <img className={styles.animation__transform_top} src="images/mode/lycan-mode-ethan-piboyeux-5.jpg" alt="Design Graphique de la pochette (cover) du single 'Mode' de l'artiste Lycan, réalisé par Ethan Piboyeux." onClick={handleImage} />
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits credits={[
              {
                name: 'François Grenier',
                role: 'Peintre'
              },
              {
                name: 'Antony Lycan',
                role: 'Artiste'
              }
            ]}/>
            <div className={styles.animation__background}>
              <LinkNextProject text="Youv Dee" link="/youv-dee"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project2
