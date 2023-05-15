import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const DynamicTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 48px;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    margin-bottom: 12px;
  }

  @media screen and (max-width: 767px) {
    margin-top: -4px;
  }

  @media screen and (max-width: 479px) {
    padding: 0;
  }
`
const slide = keyframes`
  from {
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
  to {
    transform: translate3d(0px, -200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
`

const DynamicTextLine = styled.div`
  height: 100%;
  color: var(--primary);
  transition: opacity 200ms ease;
  animation: ${slide} 3s ease-in 1s 2 reverse;
`

const HeroV1Section = styled.section`
  position: relative;
  padding: 12vw 0 9vw 0;
  overflow: hidden;
  background-color: var(--beige);
  @media screen and (max-width: 991px) {
    padding: 20vw 0 12vw 0;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 10vw;
  }
  @media screen and (max-width: 479px) {
    padding-top: 32vw;
    padding-bottom: 17vw;
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 32px;
  background-color: transparent;
  @media screen and (max-width: 991px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`
const Hero = styled.div`
  display: flex;
  align-items: stretch;
  @media screen and (max-width: 991px) {
    padding: 0 2%;
  }
  @media screen and (max-width: 479px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`
const HeroPhoto = styled.div`
  /* Three values: flex-grow | flex-shrink | flex-basis */
  flex: 0 0 auto;
  width: 300px;
  max-width: 24vw;
  height: 300px;
  max-height: 24vw;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: 991px) {
    width: 24vw;
    max-width: none;
    height: 24vw;
    max-height: none;
  }

  @media screen and (max-width: 767px) {
    width: 24vw;
    height: 24vw;
  }

  @media screen and (max-width: 479px) {
    width: 40vw;
    height: 40vw;
  }
`
const HeroH1 = styled.h1`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: var(--bold);
  font-size: 36px;
  line-height: 48px;

  @media screen and (max-width: 991px) {
    font-size: 26px;
    line-height: 36px;
  }
`

const HeroInfo = styled.div`
  flex: 1 1 0;
  padding-top: 60px;
  padding-left: 8%;
  font-weight: var(--bold);
  font-size: 36px;
  line-height: 48px;

  @media screen and (max-width: 991px) {
    padding-top: 32px;
    padding-left: 5%;
    font-size: 26px;
    line-height: 36px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
  @media screen and (max-width: 479px) {
    padding-top: 16px;
    padding-left: 0;
  }
`
const HeroAngle = styled.div`
  position: absolute;
  bottom: -5vw;
  left: -10vw;
  z-index: 1;
  width: 120vw;
  height: 28vw;
  margin: 0 auto;
  background-color: #fff;
  transform: translate(0px, 13vw) rotate(9deg);
  @media screen and (max-width: 479px) {
    display: none;
  }
`

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomepage {
        dynamicTextList
        title
        pageHeader {
          pageHeader
        }
        hero {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
  `)
  const { dynamicTextList, pageHeader, hero } = data.contentfulHomepage
  return (
    <HeroV1Section className="hero-v1-section">
      <Wrapper>
        <Hero className="hero-v1">
          <HeroPhoto className="hero-v1-photo">
            <GatsbyImage
              image={hero?.gatsbyImageData}
              alt="Hero Image"
              imgStyle={{ borderRadius: '50%' }}
            />
          </HeroPhoto>

          <HeroInfo>
            <HeroH1 className="hero-v1-text">{pageHeader.pageHeader}</HeroH1>
            <DynamicTextWrapper className="dynamic-text-wrapper">
              {dynamicTextList.map((val, index) => (
                <DynamicTextLine key={`${val.label}${index}`}>
                  {val}
                </DynamicTextLine>
              ))}
            </DynamicTextWrapper>
          </HeroInfo>
        </Hero>
      </Wrapper>
      <HeroAngle />
    </HeroV1Section>
  )
}

export default HeroSection
