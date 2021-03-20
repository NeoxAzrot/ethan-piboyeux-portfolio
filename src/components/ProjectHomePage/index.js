import React, { useState, useEffect } from 'react'
import styles from './ProjectHomePage.module.sass'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectHomePage = (props) => {
  const { projects } = props
  const [actualProject, setActualProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const nextProject = () => {
    if(actualProject < projects.length - 1) {
      handleScroll()
      setActualProject(actualProject + 1)
    }
  }

  const previousProject = () => {
    if(actualProject > 0) {
      handleScroll()
      setActualProject(actualProject - 1)
    }
  }

  const handleScroll = () => {
    setIsScrolling(true)

    setTimeout(() => {
      return setIsScrolling(false)
    }, 1500)
  }

  useEffect(() => {
    const mouseWheelHandler = (e) => {
      if(!isScrolling) {
        e = window.event || e
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
    
        if(delta === 1) previousProject()
        if(delta === -1) nextProject()
      }
    }
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
      {projects.map((project, index) => {
        return (
          <div key={index} className={`${styles.project__item} ${actualProject == index ? styles.active : ''}`}>
            <div className={styles.project__title}>
              <NavLink to={project.link} className={styles.project__link}>
                <h2>{project.name}</h2>
              </NavLink>
              <p className={styles.index__project}><span></span>{'0' + parseInt(index + 1)}</p>
            </div>
            <div className={styles.item__container}>
              <div className={styles.left__container}>
                <div className={styles.services__container}>
                  <p className={styles.project__services}>{project.services}</p>
                  <p className={styles.project__year}>{project.year}</p>
                </div>
                <img src={project.image} alt='Photo du projet'/>
              </div>
              <div className={styles.right__container}>
                <div className={styles.container__number_of_projects}>
                  <p>{index + 1}</p>
                  <span></span>
                  <p>{projects.length}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ProjectHomePage.propTypes = {
  projects: PropTypes.array
}

export default ProjectHomePage
