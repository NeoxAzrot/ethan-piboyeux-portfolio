import React from "react"
import styles from './Service.module.sass'
import ArrowLink from 'icons/ArrowLink'
import { NavLink } from 'react-router-dom'
import Menu from 'components/Menu'

const Service = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skill__container}>
        <p className={styles.number}>/01</p>
        <h2>PRODUCTION VIDEO</h2>
        <div className={styles.text__container}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          x ea commodo consequat. Duis aute irure dolor in</p>
          <div className={styles.button}>
            <NavLink to="/project-1"className={styles.read__more}>
            Voir les projets <ArrowLink></ArrowLink>
            </NavLink>
          </div>
        </div>
      </div>
        <hr></hr>
    </div> 
  )
}

export default Service
