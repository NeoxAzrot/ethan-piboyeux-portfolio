// Importation des fichiers
import React, { useState, useEffect } from 'react'
import styles from './ProjectHomePage.module.sass'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectHomePage = (props) => {
  // Props pour avoir tous les projets
  const { projects } = props
  const [actualProject, setActualProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Fonction pour afficher le projet suivant
  const nextProject = () => {
    if(actualProject < projects.length - 1) {
      handleScroll()
      setActualProject(actualProject + 1)
    }
  }

  // Fonction pour afficher le projet précédent
  const previousProject = () => {
    if(actualProject > 0) {
      handleScroll()
      setActualProject(actualProject - 1)
    }
  }

  // Fonction pour empêcher le scroll pendant l'affichage d'un projet
  const handleScroll = () => {
    setIsScrolling(true)

    setTimeout(() => {
      return setIsScrolling(false)
    }, 2500) // Temps avant de pouvoir scroll un autre projet --> Temps des animations environ
  }

  // Listener à chaque scroll pour afficher le projet suivant ou précédent
  useEffect(() => {
    // Fonction qui retourne 1 si on scroll en haut et -1 si on scroll en bas
    const mouseWheelHandler = (e) => {
      // On exécute la fonction que si on n'est pas en train d'afficher un projet
      if(!isScrolling) {
        e = window.event || e
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
    
        if(delta === 1) previousProject()
        if(delta === -1) nextProject()
      }
    }
    // On utilie un listener en fonction du navigateur
    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", mouseWheelHandler, false)
      // Firefox
      window.addEventListener("DOMMouseScroll", mouseWheelHandler, false)
      // IE 6~8
    } else window.attachEvent("onmousewheel", mouseWheelHandler)


    return () => {
      if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.removeEventListener("mousewheel", mouseWheelHandler, false)
        // Firefox
        window.removeEventListener("DOMMouseScroll", mouseWheelHandler, false)
        // IE 6~8
      } else window.detachEvent("onmousewheel", mouseWheelHandler)
    }
  })

  return (
    <div className={styles.container}>
      {/* On fait une boucle sur tous les projets */}
      {projects.map((project, index) => {
        return (
          // On met la classe active au projet qui est en train d'être affiché et on l'enlève sinon
          <div key={index} className={`${styles.container__project__item} ${actualProject == index ? styles.active : ''}`}>
            <div className={styles.project__item}>
              <div className={styles.project__title}>
                <NavLink to={project.link} className={styles.project__link}>
                  <h2 className={styles.animation__background}>{project.name}</h2>
                </NavLink>
                <div className={styles.index__project}>
                  <span>
                    <div className={styles.animation__width}></div>
                  </span>
                  <p className={styles.animation__transform_top_small}>{'0' + parseInt(index + 1)}</p>
                </div>
              </div>
              <div className={styles.item__container}>
                <div className={styles.left__container}>
                  <div className={styles.services__container}>
                    <p className={`${styles.project__services} ${styles.animation__transform_top_small}`}>{project.services}</p>
                    <p className={`${styles.project__year} ${styles.animation__transform_top_small}`}>{project.year}</p>
                  </div>
                  <span className={styles.container__image}>
                    <img className={styles.animation__width} src={project.image} alt='Image du projet'/>
                  </span>
                </div>
                <div className={styles.right__container}>
                  <div className={`${styles.container__number_of_projects} ${styles.animation__transform_left_rotate}`}>
                    <p className={styles.animation__transform_left}>{index + 1}</p>
                    <span></span>
                    <p className={styles.animation__transform_right}>{projects.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Proptypes pour s'assurer qu'il n'y a pas d'erreur dans le props
ProjectHomePage.propTypes = {
  projects: PropTypes.array
}

export default ProjectHomePage
