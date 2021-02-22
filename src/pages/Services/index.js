import React from 'react'
import Layout from 'components/Layout'
import styles from './Services.module.sass'
import Header from 'components/Header'

const Services = () => {
  return (
    <Layout>
      <Header url='/services'/>
      <div className={styles.container}>

      </div>
    </Layout>
  )
}

export default Services
