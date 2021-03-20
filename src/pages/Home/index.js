import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Home.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProjectHomePage from 'components/ProjectHomePage'

const Home = () => {
  return (
    <Layout>
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
              link: 'project-1',
              image: 'images/louis-pion/louis-pion-ethan-piboyeux.jpg'
            },
            {
              name: 'Mode',
              year: '2021',
              services: 'D.A, Design Graphique',
              link: 'project-2',
              image: 'images/mode/lycan-mode-ethan-piboyeux.jpg'
            },
            {
              name: 'Youv Dee',
              year: '2021',
              services: 'D.A, Design Graphique',
              link: 'project-3',
              image: 'images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg'
            },
            {
              name: 'Trieste',
              year: '2021',
              services: 'D.A, Design Graphique',
              link: 'project-4',
              image: 'images/trieste/trieste-ethan-piboyeux.jpg'
            },
            {
              name: 'Kleidi',
              year: '2021',
              services: 'Chef de projet',
              link: 'project-5',
              image: 'images/kleidi/kleidi-ethan-piboyeux.jpg'
            },
          ]
        }/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
