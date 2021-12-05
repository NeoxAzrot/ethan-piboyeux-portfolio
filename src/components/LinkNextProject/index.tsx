import styles from './LinkNextProject.module.sass';
import { NavLink } from 'react-router-dom';
import ArrowLink from 'icons/ArrowLink';

type PropsType = {
  text: string;
  link: string;
};

const LinkNextProject = (props: PropsType): JSX.Element => {
  // Props pour changer le texte et le lien
  const { text, link } = props;

  return (
    <div className={styles.container}>
      <NavLink to={link} className={styles.link}>
        {text}
        <ArrowLink />
      </NavLink>
    </div>
  );
};

export default LinkNextProject;
