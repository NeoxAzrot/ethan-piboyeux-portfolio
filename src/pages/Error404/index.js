import React from 'react'
import { Helmet } from "react-helmet"
import Layout from 'components/Layout'
import styles from './Error404.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Error404 = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ethan Piboyeux | Error 404</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Header url='/404'/>
      <div className={styles.container}>

      </div>
      <Footer allProjectsDisplay={false}/>
    </Layout>
  )
}

export default Error404
