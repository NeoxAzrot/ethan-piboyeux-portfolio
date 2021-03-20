import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Contact.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Contact</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/contact'/>
      <div className={styles.container}>
        <a href="mailto:contact@ethanpiboyeux.fr" className={styles.contact__link}>contact (@) ethanpiboyeux.fr</a>
      </div>
      <Footer allProjectsDisplay={false}/>
    </Layout>   
  )
}

export default Contact
