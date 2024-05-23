import Header from 'components/Header';
import Layout from 'components/Layout';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ArrowSeizo from 'icons/ArrowSeizo';
import At from 'icons/At';
import Line from 'icons/Line';
import styles from './Home.module.sass';

const Home = (): JSX.Element => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = () => {
    const email = 'ethan@seizo.paris';

    navigator.clipboard.writeText(email).then(() => {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    });
  };

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
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src="images/seizo/ethan.jpeg" alt="Ethan Piboyeux" className={styles.image} />

          <div
            className={styles.content__wrapper}
            style={{
              backgroundImage: 'url(images/seizo/background.jpeg)',
            }}
          >
            <div className={styles.header__wrapper}>
              <div className={styles.header}>
                <div className={styles.email__container} onClick={copyToClipboard}>
                  {showAlert ? (
                    <div className={styles.alert__container}>
                      <div className={styles.alert__wrapper}>
                        <p className={styles.alert}>Email copié</p>
                      </div>
                    </div>
                  ) : null}

                  <div className={styles.email__wrapper}>
                    <p className={styles.email__name}>ethan</p>

                    <div className={styles.email__at}>
                      <At color="#f5fff7" />

                      <span className={styles.email__at__hover}>
                        <At />
                      </span>
                    </div>

                    <p className={styles.email__domain}>seizo.paris</p>
                  </div>

                  <span className={styles.line__wrapper}>
                    <Line />
                  </span>
                </div>

                <a
                  href="https://www.seizo.paris"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.logo}
                >
                  <img src="images/seizo/logo.png" alt="Logo" />
                </a>
              </div>
            </div>

            <div className={styles.content}>
              <h1>Hello!</h1>

              <p>J’ai monté ma boite : Seizo Paris</p>
              <p>
                Si tu veux suivre/découvrir mon travail, je t’invite à aller faire un tour sur le
                site web de mon agence ;)
              </p>

              <a
                href="https://www.seizo.paris"
                target="_blank"
                rel="noreferrer"
                className={styles.link__wrapper}
              >
                <span className={styles.arrow__wrapper}>
                  <ArrowSeizo />
                </span>

                <div className={styles.link__container}>
                  <span className={styles.link}>www.seizo.paris</span>

                  <span className={styles.line__wrapper}>
                    <Line />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <img src="images/seizo/kanji.png" alt="Kanji" className={styles.kanji} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
