import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './MentionsLegales.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const MentionsLegales = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Mentions légales</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/légales'/>
      <div className={styles.container}>
        <div className={styles.item}>
          <h2>Identification</h2>
          <p>Ethan Piboyeux</p>
          <p>7 chemin de Carros, lieu-dit jeansotte 33650 St Selve</p>
          <p>07 81 18 48 22 / contact@ethanpiboyeux.fr</p>
          <p>Directeur de la publication et responsable de la rédaction : Ethan Piboyeux</p>
          <p>Hébergeur du site : Ethan Piboyeux</p>
        </div>
        <div className={styles.item}>
          <h2>Activité</h2>
          <p>Numéro de Siret : 87853240 00015</p>
          <p>Numéro de Siren : 87853240</p>
          <p>Code APE : 6201 Z Programmation informatique</p>
          <p>Micro-entrepreneur</p>
          <p>Date de création : 01/01/2020</p>
          <p>Forme juridique : Profession libérale</p>
        </div>
        <div className={styles.item}>
          <h2>Droit d'auteur - copyright</h2>
          <p>L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. Toute extraction et/ou reproduction d’une partie substantielle des informations diffusées sur le site est interdite sans l’autorisation expresse et préalable de son auteur.</p>
        </div>
      </div>
      <Footer allProjectsDisplay={false}/>
    </Layout>
  )
}

export default MentionsLegales
