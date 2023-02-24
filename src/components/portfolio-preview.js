import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Tags from './tags'
import * as styles from './portfolio-preview.module.css'
import Section from './section'

const PortfolioPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Section>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/portfolio/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div className={styles.meta}>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default PortfolioPreview

// To run Prettier automatically against specific files, open the Settings dialog (⌘ ,),
// go to Languages & Frameworks | JavaScript | Prettier, and use the On code reformatting and
// On save checkboxes to specify the actions that will trigger Prettier.
