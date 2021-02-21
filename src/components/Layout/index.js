import React from "react"
import styles from './Layout.module.sass'
import Header from 'components/Header'

const Layout = (props) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <Header/>
      {children}
    </div>
  )
}

export default Layout
