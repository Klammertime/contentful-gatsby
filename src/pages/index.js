import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import PortfolioPreview from '../components/portfolio-preview'

class RootIndex extends React.Component {
  render() {
    const portfolioPosts = get(
      this,
      'props.data.allContentfulPortfolioPost.nodes'
    )

    return (
      <Layout location={this.props.location}>
        <PortfolioPreview posts={portfolioPosts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
      hero {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 80
          placeholder: DOMINANT_COLOR
        )
      }
    }
    contentfulAboutPage {
      profilePic {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    allContentfulPortfolioPost {
      nodes {
        title
        slug
        tags
        heroImage {
          gatsbyImage(
            layout: CONSTRAINED
            width: 370
            height: 277
            quality: 80
            placeholder: DOMINANT_COLOR
          )
        }
        body {
          raw
        }
      }
    }
  }
`
