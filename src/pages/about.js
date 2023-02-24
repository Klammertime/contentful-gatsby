import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Reviews from '../components/reviews'
import GridSection from '../components/grid-section'
import Career from '../components/career'

const AboutImgWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 1/6;
  @media (max-width: 990px) {
    grid-row: 1/2;
    grid-column: 3/11;
  }
`
const AboutTextWrapper = styled.div`
  grid-column: 7/12;
  grid-row: 1/2;
  align-self: center;
  justify-self: start;
  display: grid;
  grid: auto-flow auto / 1fr;
  grid-row-gap: 18px;
  @media (max-width: 990px) {
    grid-row: 2/3;
    grid-column: 2/12;
  }
`

const StyledBlockquote = styled.blockquote`
  margin: 24px 0;
  padding: 8px 30px;
  border-left: 2px solid #f96a4c;
  font-size: 17px;
  line-height: 24px;
  text-align: left;
`

const SkillText = styled.div`
  margin-top: 8px;
  font: normal 600 11px/14px Inter, sans-serif;
`

const SkillCircle = styled.div`
  position: relative;
  display: flex;
  width: 120px;
  height: 120px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f2f3f5;
  text-align: center;
  cursor: pointer;
  flex-direction: column;
`

const SkillsRow = styled.div`
  display: flex;
  margin: -10px auto 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  grid-row: 3/4;
  grid-column-start: span 12;
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
