'use client'
import React from 'react'
import styles from './notfound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>

      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className={styles.card}>

        <h1 className={styles.code}>💔</h1>

        <h2 className={styles.title}>
          404 Page Not Found 
        </h2>

        <p className={styles.description}>
          The page you are looking for does not exist Bangaaram.
        </p>

        <button
          className={styles.button}
          onClick={() => window.location.href = "/"}
        >
          Go Back Home ❤️
        </button>

      </div>

    </div>
  )
}

export default NotFound