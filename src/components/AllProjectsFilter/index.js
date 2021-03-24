// Importation des fichiers
import React from 'react'
import styles from './AllProjectsFilter.module.sass'
import PropTypes from 'prop-types'

const AllProjectsFilter = (props) => {
  // Props avec tous les projets et le filtre
  const { projects, filter } = props
  
  return (
    <div className={styles.container}>
      {/* On fait une boucle sur tous les projets */}
      {projects.map((project, index) => {
        return (
          // style={{backgroundImage: `url(${project.image})`}}
          // On met la classe indiqué dans la props et on met la classe active que si le filtre considère ce projet ou si on ne filtre pas --> tous les projets
          <div key={index} className={`${project.class} ${styles.project__item} ${project.filter == filter ? styles.active : ''} ${filter == 'all-projects' ? styles.active : ''}`}>
            <img src={project.image} className={styles.project__image}/>
            {/* <p className={styles.project__services}>{project.services}</p>
            <p className={styles.project__year}>{project.year}</p> */}
          </div>
        )
      })}
    </div>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props et on mets des props par défaut si rien n'est écris
AllProjectsFilter.propTypes = {
  projects: PropTypes.array,
  filter: PropTypes.string
}

AllProjectsFilter.defaultProps = {
  filter: 'all-projects'
}

export default AllProjectsFilter
