// Importation des fichiers
import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './About.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { NavLink } from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const About = () => {

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    // On utilise le parallax provider autour de toute ma page
    <ParallaxProvider>
      <Layout>
        {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
        <Helmet>
          <title>Ethan Piboyeux | À propos</title>
          <meta name="description" content="Ethan est un jeune vidéaste, graphiste et photographe basé sur Bordeaux. Il est spécialisé dans la direction artistique et la réalisation. Sa vision artistique est influencé par le monde urbain et le monde du luxe." />
        </Helmet>

        <Header url='/à-propos'/>
          <div className={styles.container}>
            {/* On utilise le parallax sur notre container avec des valeurs un peu aléatoire mais qui fait que ça marche */}
            <Parallax className={styles.citation__container} x={['380px', '-250px']}>
              <div className={`${styles.citation} ${styles.animation__background}`}>
                <h1>L’art est dans l’infini detail.</h1>
                <h2>Federico Fellini</h2>
              </div>
            </Parallax>
            {/* On utilise le parallax sur notre container avec des valeurs un peu aléatoire mais qui fait que ça marche */}
            <Parallax className={styles.text} y={['-250px', '450px']}>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>1. Ethan Piboyeux</h4>
                <p>
                  Ethan est un jeune vidéaste, graphiste et photographe basé sur Bordeaux. 
                  Il est spécialisé dans la direction artistique et la réalisation. 
                  Sa vision artistique est influencé par le monde urbain et le monde du luxe.
                </p>
              </div>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>2. Associations</h4>
                <ul>
                  <li><a href="http://www.faismoisigne.org/" target="_blank">Fais-Moi Signe</a> - Communication, Graphisme</li>
                  <li><a href="https://kleidi.org/" target="_blank">Kleidi</a> - Chef de projet</li>
                  <li><a href="https://www.instagram.com/c.production_/" target="_blank">C-Production</a> - Graphiste & Vidéaste</li>
                  <li><a href="https://etapecoworking.fr/mediation-numerique" target="_blank">ETAPE Coworking</a> - Médiateur Numérique</li>
                </ul>
              </div>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>3. Presse</h4>
                <a href="../pdf/article-courrier-gironde-ethan-piboyeux-08-01-21.pdf" target="_blank">Courrier de Gironde 08.01.21</a>
              </div>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>4. Réseaux</h4>
                <ul>
                  <li><a href="https://www.instagram.com/piboyeux.design/" target="_blank">Instagram</a></li>
                  <li><a href="https://www.pinterest.fr/EthanPiboyeux/" target="_blank">Pinterest</a></li>
                </ul>
              </div>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>5. CV</h4>
                <a href="../pdf/cv-ethan-piboyeux.pdf" target="_blank">cv-piboyeux.pdf</a>
              </div>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>6. Crédits</h4>
                <div className={styles.credit}>
                  <h5>Code & Love</h5>
                  <a href="https://www.samilafrance.com/" target="_blank">Sami Lafrance</a>
                </div>
                <div className={styles.credit}>
                  <h5>Typographies</h5>
                  <ul>
                    <li>Agenda</li>
                    <li>TheNightWatch</li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.item} ${styles.animation__transform_top}`}>
                <h4>7. Légales</h4>
                <NavLink to='/legal-notices'>mentions-legales.html</NavLink>
              </div>
            </Parallax>
          </div>
        <Footer allProjectsDisplay={false}/>
      </Layout>
    </ParallaxProvider>
  )
}

export default About
