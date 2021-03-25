// Importation des fichiers
import React from "react"
import styles from './Footer.module.sass'
import PropTypes from 'prop-types'
import Instagram from 'icons/Instagram'
import Mail from 'icons/Mail'
import ArrowMenu from 'icons/ArrowMenu'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
  // Props pour changer le texte, le lien et l'afficher ou non en fonction des pages --> voir maquette
  const { allProjectsDisplay, allProjectsAreShow } = props
  let allProjectsText
  let allProjectsLink

  // On change le texte et le lien en fonction de si on est sur la page des projets ou pas
  if(allProjectsAreShow) {
    allProjectsText = 'Fermer'
    allProjectsLink = '/'
  } else {
    allProjectsText = 'mes-projets'
    allProjectsLink = 'all-projects'
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
      {!allProjectsDisplay && (
        <div></div>
      )}
      <div className={styles.contact__logo}>
        <a href="https://www.instagram.com/piboyeux.design/" target="_blank">
          <Instagram/>
        </a>
        <NavLink to='/contact'>
          <Mail/>
        </NavLink>
      </div>
    </footer>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props et on mets des props par défaut si rien n'est écris
Footer.propTypes = {
  allProjectsDisplay: PropTypes.bool,
  allProjectsAreShow: PropTypes.bool
}

Footer.defaultProps = {
  allProjectsDisplay: true,
  allProjectsAreShow: false
}

export default Footer
