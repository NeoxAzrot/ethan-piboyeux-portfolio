// Importation des fichiers
import React from "react"
import styles from './Header.module.sass'
import { NavLink } from 'react-router-dom'
import Menu from 'components/Menu'
import PropTypes from 'prop-types'

const Header = (props) => {
  // On change le fil d'ariane en fonction de la page
  const { url } = props

  return (
    <header className={styles.container}>
      <div className={styles.logo__container}>
        <NavLink to="/" className={styles.logo}>
          ethanpiboyeux
        </NavLink>
        <p className={styles.logo__url}>{url}</p>
      </div>
      <Menu/>
    </header>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props et on mets des props par défaut si rien n'est écris
Header.propTypes = {
  url: PropTypes.string
}

Header.defaultProps = {
  url: '.'
}

export default Header
