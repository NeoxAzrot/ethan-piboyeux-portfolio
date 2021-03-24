// Importation des fichiers
import React from 'react'
import styles from './Layout.module.sass'

const Layout = (props) => {
  // Props pour afficher les pages
  const { children } = props

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Layout
