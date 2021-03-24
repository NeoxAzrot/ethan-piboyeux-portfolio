// Importation des fichiers
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './AllProjects.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import AllProjectsFilter from 'components/AllProjectsFilter'

const AllProjects = () => {
  // On initialise le filtre en affichant tous les projets
  const [filter, setFilter] = useState('all-projects')

  // Fonction pour changer le filtre quand on clique sur un bouton
  const handleClick = (x) => {
    // On récupère le texte et on change le filtre par ce nom --> les espaces = '-'
    const newFilter = x.target.innerText.toLowerCase().replace(' ', '-')
    setFilter(newFilter)
  }

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Mes projets</title>
        <meta name="description" content="Retrouvez sur cette page différents projets de Ethan Piboyeux en vidéo, graphisme et photographie." />
      </Helmet>

      <Header url='/mes-projets'/>
      <div className={styles.container}>
        <div className={styles.container__filter}>
          <ul>
            {/* On met la classe active que si c'est le filtre actuel */}
            <li className={`${filter == 'all-projects' ? styles.active : ''}`} onClick={handleClick}>all projects</li>
            <li className={`${filter == 'graphisme' ? styles.active : ''}`} onClick={handleClick}>Graphisme</li>
            <li className={`${filter == 'video' ? styles.active : ''}`} onClick={handleClick}>Video</li>
            <li className={`${filter == 'photographie' ? styles.active : ''}`} onClick={handleClick}>Photographie</li>
          </ul>
        </div>
        <AllProjectsFilter 
          filter={filter}
          projects={
            [
              {
                year: '2018',
                services: 'Graphisme',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.cover,
                filter: 'graphisme'
              },
              {
                year: '2020',
                services: 'Video',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.video,
                filter: 'video'
              },
              {
                year: '2018',
                services: 'Photographie',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.poster,
                filter: 'photographie'
              },
              {
                year: '2016',
                services: 'Photographie',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.poster,
                filter: 'photographie'
              },
              {
                year: '2020',
                services: 'Video',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.video,
                filter: 'video'
              },
            ]
          }
        />
      </div>
      <Footer allProjectsAreShow={true}/>
    </Layout>
  )
}

export default AllProjects
