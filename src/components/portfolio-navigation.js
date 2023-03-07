import React from 'react'
import Section from './section'
import * as styles from './portfolio-navigation.module.css'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const PortfolioNavigation = ({ previous, next, nextImg, prevImg }) => {
  return (
    <Section color="white" noPaddingTop>
      {(previous || next) && (
        <nav className={styles.workNav}>
          {previous ? (
            <Link
              to={`/portfolio/${previous.slug}`}
              className={styles.workNavLink}
              rel="prev"
            >
              <div className={styles.workNavPreview}>
                <GatsbyImage image={prevImg} alt="get correct one" />
              </div>
              <div className={styles.workNavInfo}>
                <div className={styles.workNavText}>Previous</div>
                <h3 className={styles.workNavName}>{previous.title}</h3>
              </div>
            </Link>
          ) : (
            <div className={styles.workNavLink}></div>
          )}
          <Link to="/portfolio" className={styles.workNavButton}>
            <div className={styles.circle}></div>
            <div className={styles.circleWave1}></div>
            <div className={styles.circleWave2}></div>
          </Link>
          {next && (
            <Link
              to={`/portfolio/${next.slug}`}
              className={styles.workNavLinkRight}
              rel="next"
            >
              <div className={styles.workNavInfo}>
                <div className={styles.workNavText}>Next</div>
                <h3 className={styles.workNavName}>{next.title}</h3>
              </div>
              <div className={styles.workNavPreview}>
                <GatsbyImage image={nextImg} alt="get correct one" />
              </div>
            </Link>
          )}
        </nav>
      )}
      {/*</div>*/}
    </Section>
  )
}

export default PortfolioNavigation
