import { useState, useEffect } from 'react';
import styles from './ProjectHomePage.module.sass';
import { NavLink } from 'react-router-dom';

type PropsType = {
  projects: ProjectType[];
};

const ProjectHomePage = (props: PropsType): JSX.Element => {
  // Props pour avoir tous les projets
  const { projects } = props;
  const [actualProject, setActualProject] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // Fonction pour empêcher le scroll pendant l'affichage d'un projet
  const handleScroll = (timeout: number) => {
    setIsScrolling(true);

    setTimeout(() => {
      return setIsScrolling(false);
    }, timeout); // Temps avant de pouvoir scroll un autre projet --> Temps des animations environ
  };

  // Fonction pour afficher le projet suivant
  const nextProject = (timeout = 2500) => {
    if (actualProject < projects.length - 1) {
      handleScroll(timeout);
      setActualProject(actualProject + 1);
    }
  };

  // Fonction pour afficher le projet précédent
  const previousProject = (timeout = 2500) => {
    if (actualProject > 0) {
      handleScroll(timeout);
      setActualProject(actualProject - 1);
    }
  };

  // Listener à chaque scroll pour afficher le projet suivant ou précédent
  useEffect(() => {
    // Fonction qui retourne 1 si on scroll en haut et -1 si on scroll en bas
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mouseWheelHandler = (e: any) => {
      // On exécute la fonction que si on n'est pas en train d'afficher un projet
      if (!isScrolling) {
        e = window.event || e;
        const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

        if (delta === 1) previousProject(2500); // On change le temps avant de pouvoir rescroll en fonction de l'animation
        if (delta === -1) nextProject(2500); // On change le temps avant de pouvoir rescroll en fonction de l'animation
      }
    };

    // Fonction pour le scroll sur mobile
    // Tableau pour comparer les 2 derniers scroll et retourner true ou false en fonction de si on scroll en haut ou en bas
    let scrollYTouchMove: number[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const touchMoveHandler = (e: any) => {
      if (!isScrolling) {
        e = window.event || e;
        scrollYTouchMove.push(e.touches[0].screenY);
        // On le met à 10 pour être sur que c'est bien un touchmove voulu et pas accidentel
        if (scrollYTouchMove.length >= 10) {
          if (scrollYTouchMove[0] > scrollYTouchMove[scrollYTouchMove.length - 1]) {
            nextProject(1500); // On change le temps avant de pouvoir rescroll en fonction de l'animation
          } else {
            previousProject(1500); // On change le temps avant de pouvoir rescroll en fonction de l'animation
          }

          scrollYTouchMove = [];
        }
      }
    };
    // On utilie un listener en fonction du navigateur
    // IE9, Chrome, Safari, Opera
    window.addEventListener('mousewheel', mouseWheelHandler, false);
    // Firefox
    window.addEventListener('DOMMouseScroll', mouseWheelHandler, false);
    // Mobile
    window.addEventListener('touchmove', touchMoveHandler, false);

    return () => {
      // IE9, Chrome, Safari, Opera
      window.removeEventListener('mousewheel', mouseWheelHandler, false);
      // Firefox
      window.removeEventListener('DOMMouseScroll', mouseWheelHandler, false);
      // Mobile
      window.removeEventListener('touchmove', touchMoveHandler, false);
    };
  });

  return (
    <div className={styles.container}>
      {/* On fait une boucle sur tous les projets */}
      {projects.map((project, index) => {
        return (
          // On met la classe active au projet qui est en train d'être affiché et on l'enlève sinon
          <div
            key={index}
            className={`${styles.container__project__item} ${
              actualProject == index ? styles.active : ''
            }`}
          >
            <div className={styles.project__item}>
              <div className={styles.project__title}>
                <NavLink to={project.link} className={styles.project__link}>
                  <h2 className={styles.animation__background}>{project.name}</h2>
                </NavLink>
                <div className={styles.index__project}>
                  <span>
                    <div className={styles.animation__width}></div>
                  </span>
                  <p className={styles.animation__transform_top_small}>{'0' + index + 1}</p>
                </div>
              </div>
              <div className={styles.item__container}>
                <div className={styles.left__container}>
                  <div className={styles.services__container}>
                    <p
                      className={`${styles.project__services} ${styles.animation__transform_top_small}`}
                    >
                      {project.services}
                    </p>
                    <p
                      className={`${styles.project__year} ${styles.animation__transform_top_small}`}
                    >
                      {project.year}
                    </p>
                  </div>
                  <span className={styles.container__image}>
                    <img
                      className={styles.animation__width}
                      src={project.image}
                      alt={project.alt}
                    />
                  </span>
                </div>
                <div className={styles.right__container}>
                  <div
                    className={`${styles.container__number_of_projects} ${styles.animation__transform_left_rotate}`}
                  >
                    <p className={styles.animation__transform_left}>{index + 1}</p>
                    <span></span>
                    <p className={styles.animation__transform_right}>{projects.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectHomePage;
