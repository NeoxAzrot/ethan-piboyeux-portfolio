import styles from './Credits.module.sass';

type PropsType = {
  credits: CreditsType[];
};

const Credits = (props: PropsType): JSX.Element => {
  const { credits } = props;

  return (
    <div className={styles.container}>
      <h2 className={styles.animation__transform_top}>Crédits</h2>
      <div className={styles.credits__container}>
        {/* On fait une boucle sur tous les crédits */}
        {credits.map((credit, index) => {
          return (
            <div key={index} className={`${styles.credit} ${styles.animation__transform_top}`}>
              <p className={styles.name}>{credit.name}</p>
              <p className={styles.role}>{credit.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Credits;
