import React, { useState } from "react"
import styles from './Menu.module.sass'
import { NavLink } from 'react-router-dom'
import Burger from 'icons/Burger'
import Crose from 'icons/Crose'

const Menu = () => {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive)
  }
  
  return (
    <nav className={styles.container}>
      <div className={`${styles.menu__container} ${menuIsActive ? styles.active : ''}`}>
        <ul>
          <li>
            <NavLink to="/all-projects" className={styles.menu__link}>
              all projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={styles.menu__link}>
              services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.menu__link}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.menu__link}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.burger__icon} onClick={toggleMenu}>
        {menuIsActive ? <Crose/> : <Burger/>}
      </div>
    </nav>
  )
}

export default Menu
