import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project2.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'

const Project2 = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Mode</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/mode'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Mode"
        index={2}
        titleLink="Écouter le single"
        link="#"
        year={2021}
        services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <img src="images/mode/lycan-mode-ethan-piboyeux-2.jpg"/>
          <div className={styles.row}>
            <img src="images/mode/lycan-mode-ethan-piboyeux-3.jpg"/>
            <img src="images/mode/lycan-mode-ethan-piboyeux-4.jpg"/>
          </div>
          <img src="images/mode/lycan-mode-ethan-piboyeux-5.jpg"/>
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

            <LinkNextProject text="Projet suivant" link="/project-3"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project2
