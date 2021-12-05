import { ReactChild } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Button.module.sass';

type PropsType = {
  children: ReactChild;
  url?: string;
};

const Button = (props: PropsType): JSX.Element => {
  const { children, url } = props;

  return (
    <>
      {url ? (
        <NavLink to={url} className={styles.container}>
          {children}
        </NavLink>
      ) : (
        <button className={styles.container}>{children}</button>
      )}
    </>
  );
};

export default Button;
