import Credits from 'components/Credits';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import Layout from 'components/Layout';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Project8.module.sass';

const Project8 = (): JSX.Element => {
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
        <title>Ethan Piboyeux | Trieste</title>
        <meta
          name="description"
          content="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/trieste" />
      <div className={styles.container}>
        <HeaderProject
          title="Trieste"
          index={8}
          titleLink="Essayer le jeu"
          link="https://trieste.netlify.app/"
          year={2021}
          services={['Direction artistique', 'Design graphique', 'Écriture de scénario']}
        />

        <p className={`${styles.text__introduction} ${styles.animation__transform_top}`}>
          Trieste est un projet de site interactif et artistique en collaboration avec le musée des
          Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek.
        </p>

        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/trieste/trieste-ethan-piboyeux-4.jpg"
              alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
              onClick={handleImage}
            />
            <img
              src="images/trieste/trieste-ethan-piboyeux-7.jpg"
              alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/trieste/trieste-ethan-piboyeux-6.jpg"
              alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
              onClick={handleImage}
            />
            <img
              src="images/trieste/trieste-ethan-piboyeux-5.jpg"
              alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/trieste/trieste-ethan-piboyeux-2.jpg"
              alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
              onClick={handleImage}
            />
            <img
              src="images/trieste/trieste-ethan-piboyeux-3.jpg"
              alt="Trieste est un projet de site interactif et artistique en collaboration avec le musée des Beaux-Arts de Bordeaux dans le cadre de la Bacchaweek."
              onClick={handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div>
            <Credits
              credits={[
                {
                  name: 'Enzo Arnaudet',
                  role: 'Motion design, Écriture',
                },
                {
                  name: 'Mathieu Delepine',
                  role: 'Écriture, Motion design',
                },
                {
                  name: 'Tristan Guillemot',
                  role: 'Écriture, Motion design',
                },
                {
                  name: 'Sami Lafrance',
                  role: 'Développeur interactif',
                },
                {
                  name: 'Marc Lacault',
                  role: 'Sound design, Musiques',
                },
                {
                  name: 'Beaux-Arts, Bordeaux',
                  role: 'Collaborateur',
                },
              ]}
            />

            <div className={styles.animation__background}>
              <LinkNextProject text="Kleidi" link="/kleidi" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project8;
