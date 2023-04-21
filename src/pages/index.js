import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import PortfolioCard from '../components/portfolio/portfolio-card'
import Quote from '../components/quote'
import Section from '../components/ui/section'
import Text from '../components/ui/text'

const WorkGrid1 = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 112px;
  grid-column-gap: 0;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  max-width: 570px;
  @media screen and (max-width: 991px) {
    grid-row-gap: 64px;
  }

  @media screen and (max-width: 767px) {
    grid-row-gap: 48px;
    max-width: none;
    margin-bottom: 48px;
  }
`

const WorkGrid2 = styled.div`
  display: grid;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  grid-auto-columns: 1fr;
  grid-row-gap: 112px;
  grid-column-gap: 0;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  margin-left: 11%;
  padding-top: 8px;

  @media screen and (max-width: 991px) {
    grid-row-gap: 64px;
    margin-left: 64px;
  }

  @media screen and (max-width: 767px) {
    grid-row-gap: 48px;
    margin-left: 0;
  }
`
const DynamicWorks = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: -8px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-right: 25%;
  }

  @media screen and (max-width: 479px) {
    padding-right: 0;
  }
`

const DynamicWorksIntro = styled.div`
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: left;
`

const SideLink = styled(Link)`
  padding: 7px 16px 8px;
  border-left: 1px solid var(--border);
`

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.contentfulHomepage.workCards')
    if (!posts) return null
    if (!Array.isArray(posts)) return null
    const [card1, card2, card3] = posts
    return (
      <Layout location={this.props.location}>
        <Section color="white">
          <DynamicWorks>
            <WorkGrid1>
              <DynamicWorksIntro>
                <Text margin="0 24px 0 0" asType="h2" variant="xl">
                  Recent Works
                </Text>
                <SideLink to="/portfolio">
                  <Text asType="span" variant="smallLink">
                    Show All
                  </Text>
                </SideLink>
              </DynamicWorksIntro>
              <PortfolioCard card1={card1} />
              <Quote />
            </WorkGrid1>

            <WorkGrid2>
              <PortfolioCard card1={card2} />
              <PortfolioCard card1={card3} />
            </WorkGrid2>
          </DynamicWorks>
        </Section>
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
        workCardDescription {
          workCardDescription
        }
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
