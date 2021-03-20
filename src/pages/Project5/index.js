import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project5.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'

const Project5 = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Kleidi</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/kleidi'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Kleidi"
        index={5}
        titleLink="Voir le site"
        link="#"
        year={2021}
        services={['Chef de projet']}
        />

        <p className={styles.text__introduction}>Kleidi est un dispositif visant à rendre accessible l'art aux personnes en situation de handicap visuel à travers une expérience innovante, sensorielle et auditive via le biais d'impressions de plaques tactiles et d'audioguides.</p>

        <div className={styles.images__container}>
          <div className={styles.row}>
            <img src="images/kleidi/kleidi-ethan-piboyeux.jpg"/>
            <video controls poster="images/kleidi/kleidi-ethan-piboyeux-miniature-1.jpg">
              <source src="images/kleidi/kleidi-plaque-ethan-piboyeux.mp4" type="video/mp4"/>
            </video>
          </div>
          <video controls poster="images/kleidi/kleidi-ethan-piboyeux-miniature-2.jpg">
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

            <LinkNextProject text="Projet suivant" link="/project-1"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project5
