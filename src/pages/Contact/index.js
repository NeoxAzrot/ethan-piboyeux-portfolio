import React from 'react'
import Layout from 'components/Layout'
import styles from './Contact.module.sass'

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <a href="mailto:contact (@) ethanpiboyeux.fr">contact (@) ethanpiboyeux.fr</a>
      </div>
    </Layout>
  )
}

export default Contact
