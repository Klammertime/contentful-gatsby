import React from 'react'
import * as styles from './home-hero.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomepage {
        title
        pageHeader {
          pageHeader
        }
        description {
          description
        }
        header {
          raw
        }
      }
      contentfulAboutPage {
        profilePic {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <div className={styles.heroV1Section}>
      <div className={styles.wrapper}>
        <div className={styles.heroV1}>
          <GatsbyImage
            image={data.contentfulAboutPage.profilePic?.gatsbyImageData}
            alt="hi"
            className={styles.heroV1Photo}
          />
          {/*<img src="images/oswaldo-ibanez-avatar.jpg" sizes="(max-width: 479px) 40vw, 24vw"*/}
          {/*                          srcSet="images/oswaldo-ibanez-avatar-p-500.jpeg 500w, images/oswaldo-ibanez-avatar.jpg 1000w"*/}
          {/*                          alt="" className={styles.heroV1Photo}/>*/}
          <div className={styles.heroV1Info}>
            <div className={styles.heroV1Text}>
              My name is Casper. I'm a self-taught designer who loves to create
            </div>
            <div className={styles.dynamicTextWrapper}>
              <div className={styles.dinamicTextLine}>beautiful websites</div>
              <div className={styles.dinamicTextLine}>mobile apps</div>
              <div className={styles.dinamicTextLine}>
                icons and illustrations
              </div>
              <div className={styles.dinamicTextLine}>beautiful websites</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroV1Angle}></div>
    </div>
  )
}

export default HeroSection
