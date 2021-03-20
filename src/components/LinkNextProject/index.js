import React from "react"
import styles from './LinkNextProject.module.sass'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import ArrowLink from 'icons/ArrowLink'

const LinkNextProject = (props) => {
  const { text, link } = props

  return (
    <div className={styles.container}>
      <NavLink to={link} className={styles.link}>
        {text}
        <ArrowLink className={styles.logo}/>
      </NavLink>
    </div>
  )
}

LinkNextProject.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}

LinkNextProject.defaultProps = {
  text: 'Projet suivant',
  link: '/'
}

export default LinkNextProject
