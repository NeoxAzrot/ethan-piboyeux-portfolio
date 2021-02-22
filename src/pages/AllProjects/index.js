import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import styles from './AllProjects.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'
import AllProjectsFilter from 'components/AllProjectsFilter'

const AllProjects = () => {
  const [filter, setFilter] = useState('all-projects')

  const handleClick = (x) => {
    const newFilter = x.target.innerText.toLowerCase().replace(' ', '-')
    setFilter(newFilter)
  }

  return (
    <Layout>
      <Header url='/all-projects'/>
      <div className={styles.container}>
        <div className={styles.container__filter}>
          <ul>
            <li className={`${filter == 'all-projects' ? styles.active : ''}`} onClick={handleClick}>all projects</li>
            <li className={`${filter == 'graphisme' ? styles.active : ''}`} onClick={handleClick}>Graphisme</li>
            <li className={`${filter == 'video' ? styles.active : ''}`} onClick={handleClick}>Video</li>
            <li className={`${filter == 'photographie' ? styles.active : ''}`} onClick={handleClick}>Photographie</li>
          </ul>
        </div>
        <AllProjectsFilter 
          filter={filter}
          projects={
            [
              {
                year: '2018',
                services: 'Graphisme',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.cover,
                filter: 'graphisme'
              },
              {
                year: '2020',
                services: 'Video',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.video,
                filter: 'video'
              },
              {
                year: '2018',
                services: 'Photographie',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.poster,
                filter: 'photographie'
              },
              {
                year: '2016',
                services: 'Photographie',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.poster,
                filter: 'photographie'
              },
              {
                year: '2020',
                services: 'Video',
                link: 'https://www.samilafrance.com',
                image: 'https://picsum.photos/800',
                class: styles.video,
                filter: 'video'
              },
            ]
          }
        />
      </div>
      <Footer allProjectsAreShow={true}/>
    </Layout>
  )
}

export default AllProjects
