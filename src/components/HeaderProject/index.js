// Importation des fichiers
import React from "react"
import styles from './HeaderProject.module.sass'
import PropTypes from 'prop-types'
import ArrowProjectLink from 'icons/ArrowProjectLink'

const HeaderProject = (props) => {
  // Props pour changer le header des projets en fonction de la page
  const { title, index, titleLink, link, year, services } = props

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
        <a href={link} target="_blank" className={`${styles.link} ${styles.animation__background}`}>{titleLink} <ArrowProjectLink className={styles.logo}/></a>
        <div className={styles.container__services}>
          <ul>
            {services.map((service, index) => {
              return(
                <li className={styles.animation__background} key={index}>{service}</li>
              )
            })}
          </ul>
          <p className={`${styles.year} ${styles.animation__background}`}>{year}</p>
        </div>
      </div>
    </div>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props et on mets des props par défaut si rien n'est écris
HeaderProject.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  titleLink: PropTypes.string,
  link: PropTypes.string,
  year: PropTypes.number,
  services: PropTypes.array
}

HeaderProject.defaultProps = {
  title: 'Projet',
  index: 1,
  titleLink: 'Voir le projet',
  link: '#',
  year: new Date().getFullYear,
  services: ['Service 1']
}

export default HeaderProject
