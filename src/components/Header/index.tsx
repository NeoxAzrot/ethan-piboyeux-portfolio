import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom';
import Menu from 'components/Menu';

type PropsType = {
  url: string;
};

const Header = (props: PropsType): JSX.Element => {
  // On change le fil d'ariane en fonction de la page
  const { url } = props;

  return (
    <header className={styles.container}>
      <div className={styles.logo__container}>
        <NavLink to="/" className={styles.logo}>
          ethanpiboyeux
        </NavLink>
        <p className={styles.logo__url}>{url}</p>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
