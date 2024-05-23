import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import Layout from 'components/Layout';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Project1.module.sass';

const Project1 = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Les variables pour le modal des images
  const [imageModal, setImageModal] = useState<string>('');
  const [altModal, setAltModal] = useState<string>('');
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  // Fonction pour changer l'image en fonction de l'image sur laquelle on clique
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImage = (e: any) => {
    // On affiche le modal uniquement si l'écran est supérieur à 900px --> quand on est en row
    if (window.innerWidth > 900) {
      setImageModal((e.target as HTMLImageElement).src);
      setAltModal((e.target as HTMLImageElement).alt);
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
        <title>Ethan Piboyeux | The Punisher (Generique)</title>
        <meta
          name="description"
          content="Remake du générique de la série Marvel « The Punisher », réalisé par Ethan Piboyeux."
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/the-punisher" />
      <div className={styles.container}>
        <HeaderProject
          title="The Punisher"
          index={1}
          titleLink="Découvrir la série"
          link="https://fr.wikipedia.org/wiki/The_Punisher_(s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e)"
          year={2022}
          services={['Réalisation Vidéo', 'Direction artistique', 'Montage Vidéo']}
        />

        <div className={styles.images__container}>
          <video
            className={styles.animation__transform_top}
            controls
            controlsList="nodownload"
            poster="images/the-punisher/the-punisher-ethan-piboyeux-miniature.jpg"
          >
            <source src="images/the-punisher/the-punisher-ethan-piboyeux.mp4" type="video/mp4" />
          </video>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/the-punisher/the-punisher-ethan-piboyeux-2.jpg"
              alt="Remake du générique de la série Marvel « The Punisher », réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
            <img
              src="images/the-punisher/the-punisher-ethan-piboyeux-3.jpg"
              alt="Remake du générique de la série Marvel « The Punisher », réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/the-punisher/the-punisher-ethan-piboyeux-4.jpg"
              alt="Remake du générique de la série Marvel « The Punisher », réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
            <img
              src="images/the-punisher/the-punisher-ethan-piboyeux-5.jpg"
              alt="Remake du générique de la série Marvel « The Punisher », réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Ortole" link="/ortole-designer-packshot" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project1;
