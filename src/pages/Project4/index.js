// Importation des fichiers
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project4.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'
import ModalImage from 'components/ModalImage'

const Project4 = () => {

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
        <title>Ethan Piboyeux | Trieste</title>
        <meta name="description" content="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal}/>
      
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
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/trieste/trieste-ethan-piboyeux-4.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." onClick={handleImage} />
            <img src="images/trieste/trieste-ethan-piboyeux-7.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/trieste/trieste-ethan-piboyeux-6.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." onClick={handleImage} />
            <img src="images/trieste/trieste-ethan-piboyeux-5.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/trieste/trieste-ethan-piboyeux-2.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." onClick={handleImage} />
            <img src="images/trieste/trieste-ethan-piboyeux-3.jpg" alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek." onClick={handleImage} />
          </div>
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
