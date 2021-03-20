import React from "react"
import styles from './HeaderProject.module.sass'
import PropTypes from 'prop-types'
import ArrowProjectLink from 'icons/ArrowProjectLink'

const HeaderProject = (props) => {
  const { title, index, titleLink, link, year, services } = props

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.number_of_projects}>
          <p>{index}</p>
          <span></span>
          <p>5</p>
        </div>
        <h1>{title}</h1>
      </div>
      <div className={styles.about}>
        <a href={link} className={styles.link}>{titleLink} <ArrowProjectLink className={styles.logo}/></a>
        <div className={styles.container__services}>
          <ul>
            {services.map((service, index) => {
              return(
                <li key={index}>{service}</li>
              )
            })}
          </ul>
          <p className={styles.year}>{year}</p>
        </div>
      </div>
    </div>
  )
}

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
