import styles from './Footer.module.sass';
import Instagram from 'icons/Instagram';
import Mail from 'icons/Mail';
// import ArrowMenu from 'icons/ArrowMenu';
import { NavLink } from 'react-router-dom';

type PropsType = {
  allProjectsDisplay?: boolean;
  allProjectsAreShow?: boolean;
};

const Footer = (props: PropsType): JSX.Element => {
  // Props pour changer le texte, le lien et l'afficher ou non en fonction des pages --> voir maquette
  const { allProjectsDisplay = true, allProjectsAreShow = false } = props;
  let allProjectsText;
  let allProjectsLink;

  // On change le texte et le lien en fonction de si on est sur la page des projets ou pas
  if (allProjectsAreShow) {
    allProjectsText = 'Fermer';
    allProjectsLink = '/';
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    allProjectsText = 'mes-projets';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    allProjectsLink = 'all-projects';
  }

  return (
    <footer className={styles.container}>
      {/* On affiche le lien si que si la page doit avoir le lien */}
      {allProjectsDisplay && (
        // <NavLink to={allProjectsLink} className={styles.all_projects__link}>
        //   <ArrowMenu/>
        //   {allProjectsText}
        // </NavLink>

        // Pour garder les contacts à droite
        <div></div>
      )}
      {/* Pour garder les contacts à droite */}
      {!allProjectsDisplay && <div></div>}
      <div className={styles.contact__logo}>
        <a href="https://www.instagram.com/piboyeux.design/" target="_blank">
          <Instagram />
        </a>
        <NavLink to="/contact">
          <Mail />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
