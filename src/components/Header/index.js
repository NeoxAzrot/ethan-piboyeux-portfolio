import React from "react"
import styles from './Header.module.sass'
import { NavLink } from 'react-router-dom'
import Menu from 'components/Menu'

const Header = () => {
  return (
    <header className={styles.container}>
      <NavLink to="/" className={styles.logo}>
        ethanpiboyeux.
      </NavLink>
      <Menu/>
    </header>
  )
}

export default Header
