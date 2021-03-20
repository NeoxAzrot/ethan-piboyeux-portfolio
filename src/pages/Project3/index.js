import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Project3.module.sass'
import Header from 'components/Header'
import HeaderProject from 'components/HeaderProject'
import LinkNextProject from 'components/LinkNextProject'
import Credits from 'components/Credits'

const Project3 = () => {
  return (
    <Layout>
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
        link="#"
        year={2021}
        services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg"/>
          <div className={styles.row}>
            <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-2.jpg"/>
            <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-3.jpg"/>
          </div>
          <img src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-4.jpg"/>
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

            <LinkNextProject text="Projet suivant" link="/project-4"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project3
