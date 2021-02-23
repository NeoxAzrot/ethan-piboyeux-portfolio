import React from 'react'
import Layout from 'components/Layout'
import styles from './Project1.module.sass'
import Header from 'components/Header'

const Project1 = () => {
  return (
    <Layout>
      <Header url='/project1'/>
      <div className={styles.container}>

      </div>
    </Layout>
  )
}

export default Project1
