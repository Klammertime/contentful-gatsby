import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Card from '../components/card'
import Section from '../components/section'
import styled from 'styled-components'
import LazyAnimation from '../components/animation-test'

const CardGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  gap: 80px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`

class PortfolioIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')

    return (
      <Layout header="Portfolio" location={this.props.location}>
        <Seo title="Portfolio" />

        <Section>
          <CardGrid>
            {posts.map((val) => (
              <Card card1={val} />
            ))}
          </CardGrid>

          <LazyAnimation />
        </Section>
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
        workCardDescription {
          workCardDescription
        }
        heroImage {
          gatsbyImage(placeholder: BLURRED, width: 545, height: 545)
        }
      }
    }
  }
`
