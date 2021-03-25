// Importation des fichiers
import React from "react"
import styles from './ModalImage.module.sass'
import PropTypes from 'prop-types'

const ModalImage = (props) => {
  // Props pour changer l'image en fonction
  const { image, alt, display } = props
  
  return (
    <div className={`${styles.container} ${styles.animation__opacity} ${display ? styles.active : ''}`}>
      <img src={image} alt={alt}/>
    </div>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props et on mets des props par défaut si rien n'est écris
ModalImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  display: PropTypes.bool
}

ModalImage.defaultProps = {
  alt: 'Image du projet',
  display: false
}

export default ModalImage
