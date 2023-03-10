import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Reviews from '../components/reviews'
import GridSection from '../components/grid-section'
import Career from '../components/career'
import Section from '../components/section'

const AboutImgWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 1/6;
  @media screen and (max-width: 479px) {
    grid-row: 1/2;
    grid-column: 2/12;
  }
  @media (max-width: 991px) {
    grid-row: 1/2;
    grid-column: 3/11;
  }
`
const AboutTextWrapper = styled.div`
  display: grid;
  grid: auto-flow auto / 1fr;
  grid-row: 1/2;
  grid-row-gap: 18px;
  grid-column: 7/12;
  align-self: center;
  justify-self: start;
  @media screen and (max-width: 479px) {
    grid-row: 2/3;
    grid-column: 2/12;
  }
  @media screen and (max-width: 991px) {
    grid-row: 2/3;
    grid-column: 3/11;
  }
`

const StyledBlockquote = styled.blockquote`
  margin: 24px 0;
  padding: 8px 30px;
  font-size: 17px;
  line-height: 24px;
  text-align: left;
  border-left: 2px solid #f96a4c;
`

const SkillText = styled.div`
  margin-top: 8px;
  font: normal 600 11px/14px Inter, sans-serif;
`

const SkillCircle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin: 10px;
  text-align: center;
  background-color: #f2f3f5;
  border-radius: 50%;
  cursor: pointer;
`

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-row: 3/4;
  grid-column-start: span 12;
  align-items: center;
  justify-content: center;
  margin: -10px auto 0 auto;
`
const AboutPage = ({ location, data }) => {
  const { pageHeader, bioText, bioHeader, quote } = data.contentfulAboutPage

  return (
    <Layout
      header="About"
      location={location}
      pageDescription={pageHeader.pageHeader}
    >
      <Seo title="about" />
      <Section color="white">
        <GridSection>
          <AboutImgWrapper>
            <GatsbyImage
              image={data.contentfulAboutPage.profilePic?.gatsbyImageData}
              alt="Audrey Klammer about me pic"
            />
          </AboutImgWrapper>
          <AboutTextWrapper>
            <h2>{bioHeader.bioHeader}</h2>
            <p>{bioText.bioText}</p>
            <StyledBlockquote>{quote.quote}</StyledBlockquote>
            {/*- {author}*/}
          </AboutTextWrapper>
        </GridSection>
      </Section>
      <GridSection
        sectionLabel="PROFESSIONAL"
        sectionHeader="My Current Skill Set"
      >
        <SkillsRow>
          {data.contentfulAboutPage.skillLogos.map((val) => (
            <SkillCircle key={val.title}>
              <GatsbyImage
                image={val.gatsbyImageData}
                imgStyle={{
                  width: '44px',
                }}
                alt={val.description}
              />
              <SkillText>{val.title}</SkillText>
            </SkillCircle>
          ))}
        </SkillsRow>
      </GridSection>
      <Career
        resume={data.contentfulResumeContent.resumePdf.file.url}
        jobHistoryJson={data.contentfulAboutPage.jobHistoryJson}
      />
      <Reviews reviewsList={data.contentfulReviews.reviewsList} />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    contentfulAboutPage {
      skillLogos {
        gatsbyImageData(
          layout: FIXED
          width: 44
          height: 44
          quality: 100
          placeholder: BLURRED
        )
        description
        title
      }
      jobHistoryJson {
        company
        city
        bullets
        date
        jobTitle
      }
      educationjson {
        degree
        school
        subject
        year
      }
      bioHeader {
        bioHeader
      }
      bioText {
        bioText
      }
      pageHeader {
        pageHeader
      }
      profilePic {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        description
        title
      }
      quote {
        quote
      }
      title
    }
    contentfulResumeContent {
      resumePdf {
        file {
          url
          fileName
        }
        url
      }
    }
    contentfulReviews {
      reviewsList {
        review
        name
      }
    }
  }
`
