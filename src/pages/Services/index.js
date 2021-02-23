import React from 'react'
import Layout from 'components/Layout'
import Service from 'components/Service'
import ArrowLink from 'icons/ArrowLink'
import { NavLink } from 'react-router-dom'
import styles from './Services.module.sass'
import Header from 'components/Header'

const Services = () => {
  return (
    <Layout>
      <Header url='/services'/>
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.introduction}>
            <p><span className={styles.service}>services<span className={styles.bg}> </span></span>Production de beaux films et de beaux visuels, qui racontent avec élégance les histoires des marques. 
              Design graphique, tournage, production 3D, shooting photo, Piboyeux prend tout en charge, de la conception à la production.</p>
          </div>
        </div>
        <div className={styles.skills}>
        <Service></Service>
        <Service></Service>
        </div>
        <div className={styles.button}>
          <NavLink to="/contact"className={styles.contact}>
          Contact <ArrowLink></ArrowLink>
          </NavLink>
        </div>
      </div>
    </Layout>
  )
}

export default Services
