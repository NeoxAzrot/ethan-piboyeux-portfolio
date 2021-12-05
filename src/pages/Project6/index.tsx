import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Project6.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import Credits from 'components/Credits';
import ModalImage from 'components/ModalImage';

const Project6 = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Les variables pour le modal des images
  const [imageModal, setImageModal] = useState<string>('');
  const [altModal, setAltModal] = useState<string>('');
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  // Fonction pour changer l'image en fonction de l'image sur laquelle on clique
  const handleImage = (x: Event) => {
    // On affiche le modal uniquement si l'écran est supérieur à 900px --> quand on est en row
    if (window.innerWidth > 900) {
      setImageModal((x.target as HTMLImageElement).src);
      setAltModal((x.target as HTMLImageElement).alt);
      setDisplayModal(true);
    }
  };

  // Fonction pour cacher l'image au clique ou au scroll
  useEffect(() => {
    // On désactive l'image si et seulement si l'image est déjà activé
    const clickOrScrollHandler = () => {
      if (displayModal) {
        setDisplayModal(false);
      }
    };

    // On utilie un listener pour chaque clique
    window.addEventListener('click', clickOrScrollHandler, false);

    // On utilie un listener en fonction du navigateur
    // IE9, Chrome, Safari, Opera
    window.addEventListener('mousewheel', clickOrScrollHandler, false);
    // Firefox
    window.addEventListener('DOMMouseScroll', clickOrScrollHandler, false);
    // Mobile
    window.addEventListener('touchmove', clickOrScrollHandler, false);

    return () => {
      window.removeEventListener('click', clickOrScrollHandler, false);

      // On utilie un listener en fonction du navigateur
      // IE9, Chrome, Safari, Opera
      window.removeEventListener('mousewheel', clickOrScrollHandler, false);
      // Firefox
      window.removeEventListener('DOMMouseScroll', clickOrScrollHandler, false);
      // Mobile
      window.removeEventListener('touchmove', clickOrScrollHandler, false);
    };
  });

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | 9 MILLI</title>
        <meta
          name="description"
          content="Réalisation du film (music video) de Galaburdy pour le single 9 MILLI."
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/9-milli" />
      <div className={styles.container}>
        <HeaderProject
          title="9 MILLI"
          index={1}
          titleLink="Voir la vidéo"
          link="https://www.youtube.com/watch?v=o93or-wdENU"
          year={2021}
          services={['Réalisation vidéo', 'Direction artistique', 'Montage vidéo']}
        />

        <div className={styles.images__container}>
          <video
            className={styles.animation__transform_top}
            controls
            controlsList="nodownload"
            poster="images/9-milli/9-milli-ethan-piboyeux-miniature.jpg"
          >
            <source src="images/9-milli/galaburdy-9mm.mp4" type="video/mp4" />
          </video>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/9-milli/9-milli-ethan-piboyeux-2.jpg"
              alt=" Réalisation du film (music video) de Galaburdy pour le single 9 MILLI."
              onClick={() => handleImage}
            />
            <img
              src="images/9-milli/9-milli-ethan-piboyeux-3.jpg"
              alt=" Réalisation du film (music video) de Galaburdy pour le single 9 MILLI."
              onClick={() => handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/9-milli/9-milli-ethan-piboyeux-4.jpg"
              alt=" Réalisation du film (music video) de Galaburdy pour le single 9 MILLI."
              onClick={() => handleImage}
            />
            <img
              src="images/9-milli/9-milli-ethan-piboyeux-5.jpg"
              alt=" Réalisation du film (music video) de Galaburdy pour le single 9 MILLI."
              onClick={() => handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <Credits
            credits={[
              {
                name: 'Ethan Piboyeux',
                role: 'Réalisateur, Scénario, Montage, VFX, GFX',
              },
              {
                name: 'Maël Aurensan',
                role: 'Scénario',
              },
              {
                name: 'C Production',
                role: 'Production',
              },
              {
                name: 'Victor Hernandez',
                role: 'Producteur exe, Drone, SFX',
              },
              {
                name: 'Marc Lacault',
                role: 'Making of',
              },
              {
                name: 'Théo Tessonneaud',
                role: 'Chef opérateur, Cadreur, Drone',
              },
              {
                name: 'Alexis Sablayrolles',
                role: 'Styliste',
              },
              {
                name: 'Christopher Chabannes',
                role: 'Photograohe de plateau',
              },
              {
                name: 'Ortolé Design',
                role: 'Partenaire',
              },
              {
                name: 'Julie Bordas',
                role: 'Cheval',
              },
              {
                name: 'Domaine du Plantey',
                role: 'Centre equestre',
              },
              {
                name: '6 Block',
                role: 'Voiture',
              },
            ]}
          />
          <div className={styles.animation__background}>
            <LinkNextProject text="Louis Pion" link="/louis-pion" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project6;
