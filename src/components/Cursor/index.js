import React, { useState, useEffect } from "react"
import styles from './Cursor.module.sass'

const Cursor = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  const [size, setSize] = useState(50)
  
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - size / 2
      const y = e.clientY - size / 2
      setCursorXY({ x, y })
    }
    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div className={styles.container} style={{transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`, width: size, height: size}}></div>
  )
}

export default Cursor
