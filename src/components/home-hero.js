import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'

const DynamicTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 48px;
  @media screen and (max-width: 479px) {
    padding-right: 0;
    padding-left: 0;
  }
  @media screen and (max-width: 767px) {
    margin-top: -4px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 12px;
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
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: ease;
  color: var(--swatch_fcde4a6f);
  height: 100%;
  animation: ${slide} 3s ease-in 1s 2 reverse;
`

const HeroV1Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 12vw 0 9vw 0;
  background-color: #f1ede9;
  @media screen and (max-width: 991px) {
    padding: 20vw 0 12vw 0;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 10vw;
  }
  @media screen and (max-width: 479px) {
    margin-bottom: -32px;
    padding: 32vw 0 26vw 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    padding-right: 2%;
    padding-left: 2%;
  }
  @media screen and (max-width: 479px) {
    padding-right: 0;
    padding-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`
const HeroPhoto = styled.div`
  width: 300px;
  height: 300px;
  max-height: 24vw;
  max-width: 24vw;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (max-width: 479px) {
    width: 40vw;
    height: 40vw;
  }

  @media screen and (max-width: 767px) {
    width: 24vw;
    height: 24vw;
  }

  @media screen and (max-width: 991px) {
    width: 24vw;
    height: 24vw;
    max-height: none;
    max-width: none;
  }
`
const HeroH1 = styled.h1`
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 991px) {
    font-size: 26px;
    line-height: 36px;
  }
`

const HeroInfo = styled.div`
  padding-top: 60px;
  padding-left: 8%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  @media screen and (max-width: 479px) {
    padding-top: 16px;
    padding-left: 0;
  }
  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
  @media screen and (max-width: 991px) {
    padding-top: 32px;
    padding-left: 5%;
    font-size: 26px;
    line-height: 36px;
  }
`
const HeroAngle = styled.div`
  position: absolute;
  left: -10vw;
  bottom: -5vw;
  z-index: 1;
  width: 120vw;
  height: 28vw;
  margin-right: auto;
  margin-left: auto;
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
  return (
    <HeroV1Section className="hero-v1-section">
      <Wrapper>
        <Hero className="hero-v1">
          <HeroPhoto className="hero-v1-photo">
            <GatsbyImage
              image={data.contentfulHomepage.hero?.gatsbyImageData}
              alt="hi"
              imgStyle={{ borderRadius: '50%' }}
            />
          </HeroPhoto>

          <HeroInfo>
            <HeroH1 className="hero-v1-text">
              {data.contentfulHomepage.pageHeader.pageHeader}{' '}
            </HeroH1>
            <DynamicTextWrapper className="dynamic-text-wrapper">
              <DynamicTextLine>beautiful websites</DynamicTextLine>
              <DynamicTextLine>mobile apps</DynamicTextLine>
              <DynamicTextLine>icons and illustrations</DynamicTextLine>
              <DynamicTextLine>beautiful websites</DynamicTextLine>
            </DynamicTextWrapper>
          </HeroInfo>
        </Hero>
      </Wrapper>
      <HeroAngle />
    </HeroV1Section>
  )
}

export default HeroSection
