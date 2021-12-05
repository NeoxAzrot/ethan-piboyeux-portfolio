import styles from './HeaderProject.module.sass';
import ArrowProjectLink from 'icons/ArrowProjectLink';

type PropsType = {
  title: string;
  index: number;
  titleLink: string;
  link: string;
  year: number;
  services: string[];
};

const HeaderProject = (props: PropsType): JSX.Element => {
  // Props pour changer le header des projets en fonction de la page
  const { title, index, titleLink, link, year, services } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={`${styles.number_of_projects} ${styles.animation__transform_left_rotate}`}>
          <p className={styles.animation__transform_left}>{index}</p>
          <span></span>
          <p className={styles.animation__transform_right}>5</p>
        </div>
        <h1 className={styles.animation__background}>{title}</h1>
      </div>
      <div className={styles.about}>
        <a href={link} target="_blank" className={`${styles.link} ${styles.animation__background}`}>
          {titleLink} <ArrowProjectLink />
        </a>
        <div className={styles.container__services}>
          <ul>
            {services.map((service, i) => {
              return (
                <li className={styles.animation__background} key={i}>
                  {service}
                </li>
              );
            })}
          </ul>
          <p className={`${styles.year} ${styles.animation__background}`}>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderProject;
