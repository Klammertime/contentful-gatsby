import Filter from '../components/portfolio/filter'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Section from '../components/ui/section'

class PortfolioIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')

    return (
      <Layout header="Portfolio" location={this.props.location}>
        <Seo title="Portfolio" />
        <Section>
          <Filter posts={posts} />
        </Section>
      </Layout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query PortfolioIndexQuery {
    allContentfulPortfolioPost(sort: { order: ASC }) {
      nodes {
        id
        workCardDescription {
          workCardDescription
        }
        singleCategory
        title
        slug
        heroImage {
          description
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            aspectRatio: 1
            cropFocus: CENTER
          )
        }
      }
    }
  }
`
