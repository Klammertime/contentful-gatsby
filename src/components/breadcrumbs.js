import React from 'react'
import * as styles from './breadcrumbs.module.css'
import Section from './section'

const Breadcrumbs = ({ crumb, slug }) => {
  return (
    <Section color="white" noPadding>
      <div className={styles.panel}>
        <div className={styles.breadcrumbs}>
          <a href="/" className={styles.breadcrumbsLink}>
            <div>Home</div>
            <div className={styles.hoverLine}></div>
          </a>
          <div className={styles.breadcrumbDivider}></div>
          <div className={styles.breadcrumbLinkCurrentPage}>
            <div>{crumb}</div>
          </div>
          {slug && (
            <>
              <div className={styles.breadcrumbDivider}></div>
              <div className={styles.breadcrumbLinkCurrentPage}>
                <div>{slug}</div>
              </div>
            </>
          )}
        </div>
        <div className={styles.panelRight}>
          <div className={styles.panelSocialLinks}>
            <a href="" target="_blank" className={styles.panelSocialLink}>
              <div>FB</div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Breadcrumbs
