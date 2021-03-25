// Importation des fichiers
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project5.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'
import ModalImage from 'components/ModalImage'

const Project5 = () => {

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
        <title>Ethan Piboyeux | Kleidi</title>
        <meta name="description" content="Kleidi est un dispositif visant à rendre accessible l'art aux personnes en situation de handicap visuel à travers une expérience innovante, sensorielle et auditive via le biais d'impressions de plaques tactiles et d'audioguides." />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal}/>
      
      <Header url='/kleidi'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Kleidi"
        index={5}
        titleLink="Voir le site"
        link="https://kleidi.org/"
        year={2021}
        services={['Chef de projet']}
        />

        <p className={`${styles.text__introduction} ${styles.animation__transform_top}`}>Kleidi est un dispositif visant à rendre accessible l'art aux personnes en situation de handicap visuel à travers une expérience innovante, sensorielle et auditive via le biais d'impressions de plaques tactiles et d'audioguides.</p>

        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/kleidi/kleidi-ethan-piboyeux.jpg" alt="Kleidi est un dispositif visant à rendre accessible l'art aux personnes en situation de handicap visuel à travers une expérience innovante, sensorielle et auditive via le biais d'impressions de plaques tactiles et d'audioguides." onClick={handleImage} />
            <video controls controlsList="nodownload" poster="images/kleidi/kleidi-ethan-piboyeux-miniature-1.jpg">
              <source src="images/kleidi/kleidi-plaque-ethan-piboyeux.mp4" type="video/mp4"/>
            </video>
          </div>
          <video className={styles.animation__transform_top} controls controlsList="nodownload" poster="images/kleidi/kleidi-ethan-piboyeux-miniature-2.jpg">
            <source src="images/kleidi/kleidi-inauguration-ethan-piboyeux.mp4" type="video/mp4"/>
          </video>
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits credits={[
              {
                name: 'Enzo Arnaudet',
                role: 'Développeur web'
              },
              {
                name: 'Mathieu Delepine',
                role: 'Développeur web, Rédaction, 3D'
              },
              {
                name: 'Tristan Guillemot',
                role: 'Communication'
              },
              {
                name: 'Mael Aurensan',
                role: 'Communication, Presse, Partenaires'
              },
              {
                name: 'Marc Lacault',
                role: 'Rédaction, Sound design'
              },
              {
                name: 'Théo Saminadin',
                role: 'Communication, Presse'
              },
              {
                name: 'Nathaël Labat',
                role: 'Community manager, Sound design'
              },
              {
                name: 'Gaëtan Jestin',
                role: '3D, Rédaction'
              },
              {
                name: 'Mahela Pellot',
                role: 'Voix off, Presse'
              },
              {
                name: 'Julian Laballe',
                role: 'Sound design'
              },
              {
                name: 'Musée d\'Aquitaine',
                role: 'Partenaire'
              },
              {
                name: 'Bordeaux',
                role: 'Partenaire'
              }
            ]}/>
            <div className={styles.animation__background}>
              <LinkNextProject text="Louis Pion" link="/louis-pion"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project5
