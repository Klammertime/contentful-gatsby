import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import PortfolioPreview from '../components/portfolio-preview'
import PageHeader from '../components/page-header'

class PortfolioIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Portfolio" />
        <PageHeader
          header="Portfolio"
          pageDescription="pageDescription"
        />
        <PortfolioPreview posts={posts} />
      </Layout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query PortfolioIndexQuery {
    allContentfulPortfolioPost {
      nodes {
        title
        slug
        tags
        heroImage {
          gatsbyImage(
            placeholder: BLURRED
            width: 528
            height: 389
          )
        }
      }
    }
  }
`
