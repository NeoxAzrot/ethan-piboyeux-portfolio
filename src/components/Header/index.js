import React from "react"
import styles from './Header.module.sass'
import { NavLink } from 'react-router-dom'
import Menu from 'components/Menu'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { url } = props

  return (
    <header className={styles.container}>
      <div className={styles.logo__container}>
        <NavLink to="/" className={styles.logo}>
          ethanpiboyeux
        </NavLink>
        <p className={styles.logo__url}>{url}</p>
      </div>
      <Menu/>
    </header>
  )
}

Header.propTypes = {
  url: PropTypes.string
}

Header.defaultProps = {
  url: '.'
}

export default Header
