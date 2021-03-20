import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project4.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'

const Project4 = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Trieste</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/trieste'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Trieste"
        index={4}
        titleLink="Essayer le jeu"
        link="#"
        year={2021}
        services={['Direction artistique', 'Design graphique', 'Écriture de scénario']}
        />

        <p className={styles.text__introduction}>Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux.</p>

        <div className={styles.images__container}>
          <img src="images/trieste/trieste-ethan-piboyeux-4.jpg"/>
          <img src="images/trieste/trieste-ethan-piboyeux-7.jpg"/>
          <img src="images/trieste/trieste-ethan-piboyeux-6.jpg"/>
          <img src="images/trieste/trieste-ethan-piboyeux-5.jpg"/>
          <img src="images/trieste/trieste-ethan-piboyeux-2.jpg"/>
          <img src="images/trieste/trieste-ethan-piboyeux-3.jpg"/>
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

            <LinkNextProject text="Projet suivant" link="/project-5"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project4
