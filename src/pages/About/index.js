import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './About.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { NavLink } from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const About = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <Helmet>
          <title>Ethan Piboyeux | À propos</title>
          <meta name="description" content="Description" />
        </Helmet>
        <Header url='/à-propos'/>
          <div className={styles.container}>
            <Parallax className={styles.citation__container} x={['380px', '-250px']}>
                <div className={styles.citation}>
                  <h1>L’art est dans l’infini detail.</h1>
                  <h2>Federico Fellini</h2>
                </div>
            </Parallax>
            <Parallax className={styles.text} y={['-250px', '450px']}>
              <div className={styles.item}>
                <h4>1. Ethan Piboyeux</h4>
                <p>
                  Ethan est un jeune vidéaste, graphiste et photographe basé sur Bordeaux. 
                  Il est spécialisé dans la direction artistique et la réalisation. 
                  Sa vision artistique est influencé par le monde urbain et le monde du luxe.
                </p>
              </div>
              <div className={styles.item}>
                <h4>2. Associations</h4>
                <ul>
                  <li><a href="http://www.faismoisigne.org/">Fais-Moi Signe</a> - Communication, Graphisme</li>
                  <li><a href="https://kleidi.org/">Kleidi</a> - Chef de projet</li>
                  <li><a href="#">C-Production</a> - Graphiste & Vidéaste</li>
                  <li><a href="#">ETAPE Coworking</a> - Médiateur Numérique</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h4>3. Presse</h4>
                <a href="#">Courrier de Gironde 08.01.21</a>
              </div>
              <div className={styles.item}>
                <h4>4. Réseaux</h4>
                <ul>
                  <li><a href="https://www.instagram.com/piboyeux.design/">Instagram</a></li>
                  <li><a href="https://www.pinterest.fr/EthanPiboyeux/_created/">Pinterest</a></li>
                </ul>
              </div>
              <div className={styles.item}>
                <h4>5. CV</h4>
                <a href="#">cv-piboyeux.pdf</a>
              </div>
              <div className={styles.item}>
                <h4>6. Crédits</h4>
                <div className={styles.credit}>
                  <h5>Code & Love</h5>
                  <a href="#">Développeur</a>
                </div>
                <div className={styles.credit}>
                  <h5>Typographies</h5>
                  <ul>
                    <li>Agenda</li>
                    <li>TheNightWatch</li>
                  </ul>
                </div>
              </div>
              <div className={styles.item}>
                <h4>7. Légales</h4>
                <NavLink to='/mentions-legales'>mentions-legales.html</NavLink>
              </div>
            </Parallax>
          </div>
        <Footer allProjectsDisplay={false}/>
      </Layout>
    </ParallaxProvider>
  )
}

export default About
