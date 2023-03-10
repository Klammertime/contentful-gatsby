import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Card from '../components/card'
import Section from '../components/section'

const CardGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media screen and (max-width: 991px) {
    grid-row-gap: 60px;
    grid-column-gap: 32px;
  }

  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`

class PortfolioIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')

    return (
      <Layout header="Portfolio" location={this.props.location}>
        <Seo title="Portfolio" />

        <Section color="white">
          <CardGrid>
            {posts.map((val, index) => (
              <Card
                key={`${val.workCardDescription.workCardDescription}-${index}`}
                workCardDescription={
                  val.workCardDescription.workCardDescription
                }
                card1={val}
              />
            ))}
          </CardGrid>
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
        workCardDescription {
          workCardDescription
        }
        title
        slug
        tags
        heroImage {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            height: 1280
            width: 1280
            cropFocus: CENTER
          )
        }
      }
    }
  }
`
