import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import Layout from 'components/Layout';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Project5.module.sass';

const Project5 = (): JSX.Element => {
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
        <title>Ethan Piboyeux | Une Vie</title>
        <meta
          name="description"
          content="Design Graphique de la pochette (cover) de l'album « Une Vie » de l'artiste Eta, réalisé par Ethan Piboyeux."
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/une-vie" />
      <div className={styles.container}>
        <HeaderProject
          title="Une Vie"
          index={5}
          titleLink="Écouter l'album"
          link="https://open.spotify.com/artist/4hLEWmW8SCJYxZkWfSJakZ"
          year={2021}
          services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/une-vie/une-vie-eta-ethan-piboyeux-2.jpg"
              alt="Design Graphique de la pochette (cover) de l'album « Une Vie » de l'artiste Eta, réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
            <img
              src="images/une-vie/une-vie-eta-ethan-piboyeux-3.jpg"
              alt="Design Graphique de la pochette (cover) de l'album « Une Vie » de l'artiste Eta, réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/une-vie/une-vie-eta-ethan-piboyeux-4.jpg"
              alt="Design Graphique de la pochette (cover) de l'album « Une Vie » de l'artiste Eta, réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
            <img
              src="images/une-vie/une-vie-eta-ethan-piboyeux-5.jpg"
              alt="Design Graphique de la pochette (cover) de l'album « Une Vie » de l'artiste Eta, réalisé par Ethan Piboyeux."
              onClick={handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Mode" link="/mode" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project5;
