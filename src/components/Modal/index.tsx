import ArrowSeizo from 'icons/ArrowSeizo';
import At from 'icons/At';
import Line from 'icons/Line';
import { useState } from 'react';
import styles from './Modal.module.sass';

// TODO: Review class name
const Modal = (): JSX.Element => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {showAlert ? (
          <div className={styles.alert__container}>
            <div className={styles.alert__wrapper}>
              <p className={styles.alert}>Email copié</p>
            </div>
          </div>
        ) : null}

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
              Si tu veux suivre/découvrir mon travail, je t’invite à aller faire un tour sur le site
              web de mon agence ;)
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
  );
};

export default Modal;
