import React from 'react'
import Layout from 'components/Layout'
import styles from './About.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const About = () => {
  return (
    <Layout>
      <Header url='/about'/>
      <div className={styles.container}>
        <div className={styles.text__column}>
          <p>L’art est dans l’infini dEtail.Federico Fellini</p>
        </div>
        <div className={styles.text__informations}>
          <div className={styles.step}>
            <h2>1. ETHAN PIBOYEUX</h2>
            <p>Ethan est un jeune vidéaste, graphiste et photographe basé sur Bordeaux. Il est spécialisé dans la direction artistique et la réalisation.
Sa vision artistique est influencé par le monde urbain et le monde du luxe.</p>
          </div>
          <div className={styles.step}>
            <h2>2. Associations </h2>
              <p><a href=''>Fais-Moi Signe</a> - Communication, Graphisme</p>
              <p><a href=''>Kleidi</a> - Chef de projet</p>
              <p><a href=''>C-Production</a> - Graphiste & Vidéaste</p>
              <p><a href=''>ETAPE Coworking</a> - Médiateur Numérique</p>
          </div>
          <div className={styles.step}>
            <h2>3. PRESSE</h2>
              <a href=''>Courrier de Gironde 08.01.21</a>
          </div>
          <div className={styles.step}>
            <h2>4. Réseaux </h2>
              <a href=''>Instagram</a>
              <a href=''>Pinterest</a>
          </div>
          <div className={styles.step}>
            <h2>5. CV</h2>
            <a href=''>cv-piboyeux.pdf</a>
          </div>
          <div className={styles.step}>
            <h2>6. CRÉDITS </h2>
              <h3>CODE & LOVE</h3>
                <a href='https://samilafrance.com/'>Sami Lafrance</a>
              <h3>Typographies</h3>
                <p>Agenda</p>
                <p>TheNightWatch</p>
          </div>
        </div>
      </div>
      <Footer allProjectsDisplay={false}/>
    </Layout>
  )
}

export default About
