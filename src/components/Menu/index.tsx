import { useState } from 'react';
import styles from './Menu.module.sass';
import { NavLink } from 'react-router-dom';

const Menu = (): JSX.Element => {
  // Pour afficher le menu quand on clique
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  return (
    <nav className={styles.container}>
      {/* Le menu pour desktop */}
      <div
        className={`${styles.menu__container} ${styles.desktop} ${
          menuIsActive ? styles.active : ''
        }`}
      >
        <ul>
          {/* <li>
            <NavLink to="/all-projects" className={styles.menu__link}>
              mes projets
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/services" className={styles.menu__link}>
              mes services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.menu__link}>
              à propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.menu__link}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Le menu pour mobile */}
      <div
        className={`${styles.menu__container} ${styles.mobile} ${
          menuIsActive ? styles.active : ''
        }`}
      >
        <ul>
          {/* <li>
            <NavLink to="/all-projects" className={styles.menu__link}>
              mes projets
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/services" className={styles.menu__link}>
              mes services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.menu__link}>
              à propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.menu__link}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* L'icone du burger et de la croix */}
      <div className={styles.icon__container} onClick={toggleMenu}>
        <div className={`${styles.icon} ${menuIsActive ? styles.active : ''}`}>
          <div className={styles.burger__crose}></div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
