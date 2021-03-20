import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project1.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'

const Project1 = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Louis Pion</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/louis-pion'/>
      <div className={styles.container}>
        <HeaderProject 
        title="Louis Pion"
        index={1}
        titleLink="Voir la vidéo"
        link="#"
        year={2021}
        services={['Direction artistique', 'Production vidéo', 'Montage vidéo']}
        />

        <div className={styles.images__container}>
          <video controls poster="images/louis-pion/louis-pion-ethan-piboyeux-miniature.jpg">
            <source src="images/louis-pion/louis-pion-ethan-piboyeux.mp4" type="video/mp4"/>
          </video>
          <div className={styles.row}>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-2.jpg"/>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-3.jpg"/>
          </div>
          <div className={styles.row}>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-4.jpg"/>
            <img src="images/louis-pion/louis-pion-ethan-piboyeux-5.jpg"/>
          </div>
        </div>

        <div className={styles.footer__project}>
          <LinkNextProject text="Projet suivant" link="/project-2"/>
        </div>
      </div>
    </Layout>
  )
}

export default Project1
