import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './MentionsLegales.module.sass';
import Header from 'components/Header';

const MentionsLegales = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | Mentions légales</title>
        <meta name="description" content="Mentions légales de Ethan Piboyeux." />
      </Helmet>

      <Header url="/légales" />
      <div className={styles.container}>
        <div className={styles.item}>
          <h2 className={styles.animation__background}>Identification</h2>
          <div className={styles.animation__transform_top}>
            <p>Ethan Piboyeux</p>
            <p>7 chemin de Carros, lieu-dit jeansotte 33650 St Selve</p>
            <p>07 81 18 48 22 / contact@ethanpiboyeux.fr</p>
            <p>Directeur de la publication et responsable de la rédaction : Ethan Piboyeux</p>
            <p>Hébergeur du site : Ethan Piboyeux</p>
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={styles.animation__background}>Activité</h2>
          <div className={styles.animation__transform_top}>
            <p>Numéro de Siret : 87853240 00015</p>
            <p>Numéro de Siren : 87853240</p>
            <p>Code APE : 6201 Z Programmation informatique</p>
            <p>Micro-entrepreneur</p>
            <p>Date de création : 01/01/2020</p>
            <p>Forme juridique : Profession libérale</p>
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={styles.animation__background}>Droit d'auteur - copyright</h2>
          <div className={styles.animation__transform_top}>
            <p>
              L’ensemble de ce site relève de la législation française et internationale sur le
              droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont
              réservés, y compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques. Toute extraction et/ou reproduction d’une partie
              substantielle des informations diffusées sur le site est interdite sans l’autorisation
              expresse et préalable de son auteur.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
