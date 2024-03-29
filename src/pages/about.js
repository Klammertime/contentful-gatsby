import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Career from '../components/career'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Skills from '../components/skills'
import GenericRichText from '../components/ui/generic-rich-text'
import GridSection from '../components/ui/grid-section'
import Section from '../components/ui/section'
import Text from '../components/ui/text'
import { useAboutData } from '../hooks/use-about-data'

const AboutImgWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 1/6;

  @media (max-width: 991px) {
    grid-row: 1/2;
    grid-column: 2 / span 6;
  }
  @media screen and (max-width: 479px) {
    grid-row: 1/2;
    grid-column: 2/12;
  }
`
const AboutTextWrapper = styled.div`
  display: grid;
  grid: auto-flow auto / 1fr;
  grid-row: 1/2;
  grid-row-gap: 12px;
  grid-column: 7/12;
  align-self: center;
  justify-self: start;

  @media screen and (max-width: 991px) {
    grid-row: 2/3;
    grid-column: 2 / span 6;
  }
  @media screen and (max-width: 479px) {
    grid-row: 2/3;
    grid-column: 2/12;
  }
`

const AboutPage = ({ location }) => {
  const {
    pageHeader,
    bioText,
    title,
    bioHeader,
    writerQuote,
    subhead,
    profilePic,
  } = useAboutData()

  return (
    <Layout header={title} location={location} pageDescription={pageHeader}>
      <Seo title={title} />
      <Section>
        <GridSection>
          <AboutImgWrapper>
            <GatsbyImage
              image={profilePic?.gatsbyImageData}
              alt={profilePic.description || 'Image of Audrey Klammer'}
            />
          </AboutImgWrapper>
          <AboutTextWrapper>
            <Text asType="h3" variant="label" color="primary">
              {subhead}
            </Text>
            <Text asType="h2" variant="large" margin="0 0 6px 0">
              {bioHeader.bioHeader}
            </Text>
            <Text variant="textGrey" asType="p" color="grey">
              {bioText.bioText}
            </Text>
            <GenericRichText data1={writerQuote} />
          </AboutTextWrapper>
        </GridSection>
      </Section>
      <Skills />
      <Career />
    </Layout>
  )
}

export default AboutPage
