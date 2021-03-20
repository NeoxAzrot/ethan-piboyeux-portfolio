import React from "react"
import styles from './Footer.module.sass'
import PropTypes from 'prop-types'
import Instagram from 'icons/Instagram'
import Mail from 'icons/Mail'
import ArrowMenu from 'icons/ArrowMenu'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
  const { allProjectsDisplay, allProjectsAreShow } = props
  let allProjectsText
  let allProjectsLink

  if(allProjectsAreShow) {
    allProjectsText = 'Fermer'
    allProjectsLink = '/'
  } else {
    allProjectsText = 'mes-projets'
    allProjectsLink = 'all-projects'
  }

  return (
    <footer className={styles.container}>
      {allProjectsDisplay && (
        <NavLink to={allProjectsLink} className={styles.all_projects__link}>
          <ArrowMenu/>
          {allProjectsText}
        </NavLink>
      )}
      {/* Pour garder les contacts à droite */}
      {!allProjectsDisplay && (
        <div></div>
      )}
      <div className={styles.contact__logo}>
        <a href="https://www.instagram.com/piboyeux.design">
          <Instagram/>
        </a>
        <a href="mailto:contact@ethanpiboyeux.fr">
          <Mail/>
        </a>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  allProjectsDisplay: PropTypes.bool,
  allProjectsAreShow: PropTypes.bool
}

Footer.defaultProps = {
  allProjectsDisplay: true,
  allProjectsAreShow: false
}

export default Footer
