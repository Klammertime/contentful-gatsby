import React from 'react'
import * as styles from './navbar.module.css'

const Navbar = ({}) => (
  <div className={styles.navigation}>
    <div className={styles.navLeft}>
      <a href={} aria-current='page' className={styles.brand}>
        <img src={} alt='' className={styles.logo} />
        <div className={styles.logoText}>casper</div>
      </a>
    </div>
    <nav role='navigation' className={styles.navMenu}>
       <a href={} aria-current='page' className={styles.navLink}>
        <div>Home</div>
        <div className={styles.hoverLine}></div>
      </a>
    </nav>
  </div>
)

export default Navbar


