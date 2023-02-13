import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './portfolio-post.module.css'

class PortfolioPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulPortfolioPost')

        const options = {
            renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const { gatsbyImage } = node.data.target
                    return (
                        <GatsbyImage
                            image={getImage(gatsbyImage)}
                        />
                    )
                },
            },
        };

        return (
            <Layout location={this.props.location}>
                <Seo
                    title={post.title}
                    image={`http:${post.heroImage.resize.src}`}
                />
                <Hero
                    image={post.heroImage?.gatsbyImage}
                    title={post.title}
                />
                <div className={styles.container}>
                    <div className={styles.article}>
                        <Tags tags={post.tags} />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug(
    $slug: String!
  ) {
    contentfulPortfolioPost(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      tags
    }
  }
`
