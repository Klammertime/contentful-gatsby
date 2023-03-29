import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import PortfolioCard from '../components/portfolio/portfolio-card'
import Seo from '../components/seo'
import Section from '../components/ui/section'

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

        <Section>
          <CardGrid>
            {posts.map((val, index) => (
              <PortfolioCard
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
            layout: CONSTRAINED
            height: 1280
            width: 1280
            cropFocus: CENTER
          )
        }
      }
    }
  }
`
