import React from 'react'
import styles from './Burger.module.sass'
import PropTypes from 'prop-types'

const Burger = (props) => {
  const { isShow } = props

  // let className = styles.accordion
  // if(showInfoIsVisible) {
  //   className += ` ${styles.active}`
  // } 

  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 33" className={`${styles.burger__icon}`}>
      <g id="burger" transform="translate(-1812.5 -41)">
        <line id="line1" x2="41" transform="translate(1816.5 42.5)" fill="none" stroke="#fff" strokeWidth="3"/>
        <line id="line2" x2="49" transform="translate(1812.5 57.5)" fill="none" stroke="#fff" strokeWidth="3"/>
        <line id="line3" x2="41" transform="translate(1816.5 72.5)" fill="none" stroke="#fff" strokeWidth="3"/>
      </g>
    </svg>
  )
}

Burger.propTypes = {
  isShow: PropTypes.bool
}

Burger.defaultProps = {
  isShow: false
}

export default Burger