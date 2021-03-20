import React from "react"
import styles from './Credits.module.sass'
import PropTypes from 'prop-types'

const Credits = (props) => {
  const { credits } = props

  return (
    <div className={styles.container}>
      <h2>Crédits</h2>
      <div className={styles.credits__container}>
        <div className={styles.credit__name}>
          {credits.map((credit, index) => {
            return(
              <p key={index}>{credit.name}</p>
            )
          })}
        </div>
        <div className={styles.credit__role}>
          {credits.map((credit, index) => {
            return(
              <p key={index}>{credit.role}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Credits.propTypes = {
  credits: PropTypes.array
}

export default Credits
