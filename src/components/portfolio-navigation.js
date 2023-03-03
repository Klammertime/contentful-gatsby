import React from 'react'
import Section from './section'
import * as styles from './portfolio-navigation.module.css'
import { Link } from 'gatsby'
const PortfolioNavigation = ({ previous, next }) => {
  return (
    <Section noPaddingTop>
      <div className={styles.workNav}>
        {previous && (
          <Link
            to={`/portfolio/${previous.slug}`}
            className={styles.workNavLink}
          >
            <div className={styles.workNavPreview}></div>
            <div className={styles.workNavInfo}>
              <div className={styles.workNavText}>Previous</div>
              <h3 className={styles.workNavName}>{previous.title}</h3>
            </div>
          </Link>
        )}
        <a href="/" className={styles.workNavButton}>
          <div className={styles.circle}></div>
          <div className={styles.circleWave1}></div>
          <div className={styles.circleWave2}></div>
        </a>
        {next && (
          <Link
            to={`/portfolio/${next.slug}`}
            className={styles.workNavLinkRight}
          >
            <div className={styles.workNavInfo}>
              <div className={styles.workNavText}>Next</div>
              <h3 className={styles.workNavName}>{next.title}</h3>
            </div>
            <div className={styles.workNavPreview}></div>
          </Link>
        )}
      </div>
    </Section>
  )
}

export default PortfolioNavigation
