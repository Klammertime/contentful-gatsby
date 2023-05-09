import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import PortfolioCard from '../components/portfolio/portfolio-card'
import Quote from '../components/quote'
import Section from '../components/ui/section'
import Text from '../components/ui/text'
import Skills from '../components/skills'
import Link from '../components/ui/link'

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
  min-width: 41%;
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
  @media screen and (max-width: 479px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

const SideLink = styled(Link)`
  position: relative;
  padding: 7px 16px 8px;
  overflow: hidden;
  color: #151515;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  border-left: 1px solid #e4e8ed;
  -webkit-transition: color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  span {
    @media screen and (max-width: 479px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
`

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.contentfulHomepage.workCards')
    if (!posts) return null
    if (!Array.isArray(posts)) return null
    const [card1, card2, card3] = posts
    const quotePosts = get(
      this,
      'props.data.contentfulHomepage.shortQuoteByCards'
    )
    return (
      <Layout location={this.props.location}>
        <Section color="white">
          <DynamicWorks>
            <WorkGrid1>
              <DynamicWorksIntro>
                <Text margin="0 24px 16px 0" asType="h2" variant="large">
                  Recent Works
                </Text>
                <SideLink to="/portfolio">
                  <Text asType="span" variant="smallLink">
                    Show All
                  </Text>
                </SideLink>
              </DynamicWorksIntro>
              <PortfolioCard cardInfo={card1} />
              <Quote testimonialQuote={quotePosts} />
            </WorkGrid1>
            <WorkGrid2>
              <PortfolioCard small cardInfo={card2} />
              <PortfolioCard small cardInfo={card3} />
            </WorkGrid2>
          </DynamicWorks>
        </Section>
        <Skills />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulHomepage {
      shortQuoteByCards {
        highlightedQuote {
          raw
        }
        image {
          gatsbyImageData
        }
        company
        name
        title
      }
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
