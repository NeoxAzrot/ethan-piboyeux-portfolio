import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Project3.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import Credits from 'components/Credits';
import ModalImage from 'components/ModalImage';

const Project3 = (): JSX.Element => {
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
        <title>Ethan Piboyeux | Youv Dee</title>
        <meta
          name="description"
          content="Re-Design Graphique de la pochette d'album (cover) « La Vie De Luxe » de l'artiste Youv Dee, réalisé par Ethan Piboyeux."
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/youv-dee" />
      <div className={styles.container}>
        <HeaderProject
          title="Youv Dee"
          index={3}
          titleLink="Écouter l'album"
          link="https://open.spotify.com/playlist/3t4yLWMNFch9wLMoTRRt1S?si=50838cba63824015"
          year={2021}
          services={['Direction artistique', 'Design graphique']}
        />

        <div className={styles.images__container}>
          <img
            className={styles.animation__transform_top}
            src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-1.jpg"
            alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux."
            onClick={() => handleImage}
          />
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-2.jpg"
              alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux."
              onClick={() => handleImage}
            />
            <img
              src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-3.jpg"
              alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux."
              onClick={() => handleImage}
            />
          </div>
          <img
            className={styles.animation__transform_top}
            src="images/youv-dee/you-dee-la-vie-de-luxe-ethan-piboyeux-4.jpg"
            alt="Re-Design Graphique de la pochette d'album (cover) 'La Vie De Luxe' de l'artiste Youv Dee, réalisé par Ethan Piboyeux."
            onClick={() => handleImage}
          />
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits
              credits={[
                {
                  name: 'Ashwin Cazal',
                  role: 'Images',
                },
                {
                  name: 'Youv Dee',
                  role: 'Artiste',
                },
              ]}
            />

            <div className={styles.animation__background}>
              <LinkNextProject text="Trieste" link="/trieste" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project3;
