import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Home.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProjectHomePage from 'components/ProjectHomePage';

const Home = (): JSX.Element => {
  const [displayMouse, setDisplayMouse] = useState(true);

  // Fonction pour enlever l'animation de la souris après un certain temps
  setTimeout(() => {
    setDisplayMouse(false);
  }, 3000 + 6000); // 3000 c'est le temps avant l'apparition, puis on ajoute le temps qu'il faut avant de le faire disparaître

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Portfolio</title>
        <meta
          name="description"
          content="Ethan est un jeune vidéaste, graphiste et photographe basé sur Bordeaux. Il est spécialisé dans la direction artistique et la réalisation. Sa vision artistique est influencé par le monde urbain et le monde du luxe."
        />
      </Helmet>

      <Header url="." />
      <div className={styles.container}>
        <ProjectHomePage
          projects={[
            {
              name: 'ORTOLE',
              year: 2021,
              services: 'Shooting Photo & Vidéo',
              link: 'ortole-designer-packshot',
              image: 'images/ortole-packshot/ortole-packshot-ethan-piboyeux.jpg',
              alt: 'Direction artistique, shooting packshot photo et vidéo pour la mise en avant de collection de lunettes pour Ortolé Designer (Tropical Optic Shop), réalisé par Ethan Piboyeux.',
            },
            {
              name: '9 MILLI',
              year: 2021,
              services: 'Réalisation vidéo',
              link: '9-milli',
              image: 'images/9-milli/9-milli-ethan-piboyeux.jpg',
              alt: 'Réalisation du film (music video) de Galaburdy pour le single 9 MILLI.',
            },
            {
              name: 'Louis Pion',
              year: 2020,
              services: 'Production vidéo',
              link: 'louis-pion',
              image: 'images/louis-pion/louis-pion-ethan-piboyeux.jpg',
              alt: 'Vidéo de présentation de produit de la Montre ACHILLE XK1491IN2-15 de louis pion, réalisé par Ethan Piboyeux.',
            },
            {
              name: 'Une Vie',
              year: 2021,
              services: 'D.A, Design Graphique',
              link: 'une-vie',
              image: 'images/une-vie/une-vie-eta-ethan-piboyeux.jpg',
              alt: "Design Graphique de la pochette (cover) de l'album « Une Vie » de l'artiste Eta, réalisé par Ethan Piboyeux.",
            },
            {
              name: 'Mode',
              year: 2021,
              services: 'D.A, Design Graphique',
              link: 'mode',
              image: 'images/mode/lycan-mode-ethan-piboyeux.jpg',
              alt: 'Design Graphique de la pochette (cover) du single "Mode" de l\'artiste Lycan, réalisé par Ethan Piboyeux.',
            },
            {
              name: 'Youv Dee',
              year: 2021,
              services: 'D.A, Design Graphique',
              link: 'youv-dee',
              image: 'images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg',
              alt: "Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux.",
            },
            {
              name: 'Trieste',
              year: 2021,
              services: 'D.A, Design Graphique',
              link: 'trieste',
              image: 'images/trieste/trieste-ethan-piboyeux.jpg',
              alt: 'Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek.',
            },
            {
              name: 'Kleidi',
              year: 2021,
              services: 'Chef de projet',
              link: 'kleidi',
              image: 'images/kleidi/kleidi-ethan-piboyeux.jpg',
              alt: "Kleidi est un dispositif visant à rendre accessible l'art aux personnes en situation de handicap visuel à travers une expérience innovante, sensorielle et auditive via le biais d'impressions de plaques tactiles et d'audioguides.",
            },
          ]}
        />

        <div className={`${styles.mouse__container} ${styles.animation__opacity}`}>
          <div className={`${styles.mouse} ${displayMouse ? '' : styles.hidden}`}></div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
