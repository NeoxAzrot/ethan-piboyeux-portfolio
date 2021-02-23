import React from 'react'
import styles from './AllProjectsFilter.module.sass'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const AllProjectsFilter = (props) => {
  const { projects, filter } = props
  
  return (
    <div className={styles.container}>
      {projects.map((project, index) => {
        return (
          // style={{backgroundImage: `url(${project.image})`}}
          <div key={index} className={`${styles.project__item} ${project.filter == filter ? styles.active : ''} ${filter == 'all-projects' ? styles.active : ''}`}>
            <img src={project.image} className={styles.project__image}/>
            {/* <p className={styles.project__services}>{project.services}</p>
            <p className={styles.project__year}>{project.year}</p> */}
          </div>
        )
      })}
    </div>
  )
}

AllProjectsFilter.propTypes = {
  projects: PropTypes.array,
  filter: PropTypes.string
}

AllProjectsFilter.defaultProps = {
  filter: 'all-projects'
}

export default AllProjectsFilter
