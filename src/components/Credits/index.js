// Importation des fichiers
import React from "react"
import styles from './Credits.module.sass'
import PropTypes from 'prop-types'

const Credits = (props) => {
  const { credits } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.animation__transform_top}>Crédits</h2>
      <div className={styles.credits__container}>
        {/* On fait une boucle sur tous les crédits */}
        {credits.map((credit, index) => {
          return(
            <div key={index} className={`${styles.credit} ${styles.animation__transform_top}`}>
              <p className={styles.name}>{credit.name}</p>
              <p className={styles.role}>{credit.role}</p>
            </div>
          )
          })}
      </div>
    </div>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props
Credits.propTypes = {
  credits: PropTypes.array
}

export default Credits
