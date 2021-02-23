import React from 'react'
import Layout from 'components/Layout'
import styles from './Home.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProjectHomePage from 'components/ProjectHomePage'

const Home = () => {
  return (
    <Layout>
      <Header url='.'/>
      <div className={styles.container}>
        <ProjectHomePage projects={
          [
            {
              name: 'Project1',
              year: '2018',
              services: 'Design',
              link: 'project-1',
              image: 'https://picsum.photos/800'
            },
            {
              name: 'Project2',
              year: '2020',
              services: 'Video',
              link: 'project-2',
              image: 'https://picsum.photos/800'
            },
            {
              name: 'Project3',
              year: '2018',
              services: 'Song',
              link: 'project-3',
              image: 'https://picsum.photos/800'
            },
            {
              name: 'Project4',
              year: '2016',
              services: 'Design',
              link: 'project-4',
              image: 'https://picsum.photos/800'
            },
            {
              name: 'Project5',
              year: '2020',
              services: 'Cover',
              link: 'project-5',
              image: 'https://picsum.photos/800'
            },
          ]
        }/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
