// Importation des fichiers
import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Contact.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Contact = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Contact</title>
        <meta name="description" content="Contactez Ethan Piboyeux par mail." />
      </Helmet>
      
      <Header url='/contact'/>
      <div className={styles.container}>
        <p className={`${styles.contact__link} ${styles.animation__background}`}>contact (@) ethanpiboyeux.fr</p>
      </div>
      <Footer allProjectsDisplay={false}/>
    </Layout>   
  )
}

export default Contact
