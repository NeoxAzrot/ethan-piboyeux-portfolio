import React from 'react'
import Layout from 'components/Layout'
import styles from './About.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const About = () => {
  return (
    <Layout>
      <Header url='/about'/>
      <div className={styles.container}>

      </div>
      <Footer allProjectsDisplay={false}/>
    </Layout>
  )
}

export default About
