import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Services.module.sass'
import Header from 'components/Header'
import LinkNextProject from 'components/LinkNextProject'

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Mes services</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/services'/>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Production de beaux films et de beaux visuels, qui racontent avec élégance les histoires des marques et 
            artistes. <span>Design graphique</span>, <span>tournage</span>, <span>production 3D</span>, <span>shooting photo</span>, <span>motion design</span>, <span>VFX</span>, 
            Piboyeux prend tout en charge, de la conception à la production.
          </p>
        </div>
        <div className={styles.link__contact}>
          <LinkNextProject text="Contact" link="/contact"/>
        </div>
      </div>
    </Layout>
  )
}

export default Services
