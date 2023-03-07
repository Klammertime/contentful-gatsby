import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import PortfolioPreview from '../components/portfolio-preview'

class RootIndex extends React.Component {
  render() {
    const portfolioPosts = get(this, 'props.data.contentfulHomepage.workCards')

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
      workCards {
        title
        slug
        tags
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            height: 1280
            width: 1280
            quality: 80
            placeholder: DOMINANT_COLOR
          )
          description
        }
        body {
          raw
        }
      }
    }
  }
`
