import React from 'react'
import { Link } from 'gatsby'
import * as styles from './portfolio-preview.module.css'
import Section from './section'
import Card from './card'

const PortfolioPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  const [card1, card2, card3] = posts

  return (
    <Section color="white">
      <div className={styles.dynamicWorks}>
        <div className={styles.workGrid1}>
          <div className={styles.dynamicWorksIntro}>
            <h2 className={styles.dynamicWorksText}>Recent Works</h2>
            <Link to="/portfolio" className={styles.sideLink}>
              Show All
            </Link>
          </div>
          <Card card1={card1} />
        </div>

        <div className={styles.workGrid2}>
          <Card card1={card2} />
          <Card card1={card3} />
        </div>
      </div>
    </Section>
  )
}

export default PortfolioPreview
