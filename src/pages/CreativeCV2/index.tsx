import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './CreativeCV2.module.sass';
import Header from 'components/Header';
import Button from 'components/Button';

const CreativeCV2 = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fontion pour télécharger le fichier illustrator
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = 'downloads/cv-creative.ai';
    link.download = 'cv-creative-ethan-piboyeux.ai';
    link.click();
  };

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Ethan Piboyeux | CV créatif</title>
        <meta name="description" content="CV créatif d'Ethan Piboyeux." />
      </Helmet>

      <Header url="/cv-créatif-2" />
      <div className={styles.container}>
        <p className={styles.mention}>
          Code & Love -{' '}
          <a href="https://www.samilafrance.com/" target="_blank">
            Sami Lafrance
          </a>
        </p>
        <img src="images/stickers/stickers-illustration.svg" className={styles.poster} />
        <div className={styles.footer}>
          <Button url="/creative-cv">Page 1</Button>
          <div className={styles.desktop_only} onClick={downloadFile}>
            <Button>Ai file</Button>
          </div>
          <Button url="/">Home</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreativeCV2;
