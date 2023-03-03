import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'
import * as styles from './home-hero.module.css'

const DynamicTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 48px;
  @media (max-width: var(--mq-tiny)) {
    padding-right: 0;
    padding-left: 0;
  }
  @media (max-width: var(--mq-small)) {
    margin-top: -4px;
  }
  @media (max-width: var(--mq-medium)) {
    margin-bottom: 12px;
  }
`
const slide = keyframes`
  from {
    /*transform: translateY(100%);*/
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
  /*animation: 3s ease-in 1s 2 reverse both paused slidein;*/

  /*transform: translateY(100%);*/
  animation: ${slide} 3s ease-in 1s 2 reverse;
`

const HeroV1Section = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 12vw;
  padding-bottom: 9vw;
  background-color: #f1ede9;
  @media (max-width: var(--mq-tiny)) {
    margin-bottom: -32px;
    padding-top: 32vw;
    padding-bottom: 26vw;
  }
  @media (max-width: var(--mq-small)) {
    padding-bottom: 10vw;
  }
  @media (max-width: var(--mq-medium)) {
    padding-top: 20vw;
    padding-bottom: 12vw;
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1234px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 32px;
  padding-left: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media (max-width: var(--mq-medium)) {
    padding-right: 16px;
    padding-left: 16px;
  }
`
const Hero = styled.div`
  display: flex;
  align-items: stretch;
  @media (max-width: var(--mq-medium)) {
    padding-right: 2%;
    padding-left: 2%;
  }
  @media (max-width: var(--mq-tiny)) {
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
  @media (max-width: var(--mq-tiny)) {
    width: 40vw;
    height: 40vw;
  }
  @media (max-width: var(--mq-small)) {
    width: 24vw;
    height: 24vw;
  }
  @media (max-width: var(--mq-medium)) {
    width: 24vw;
    height: 24vw;
    max-height: none;
    max-width: none;
  }
`
const HeroText = styled.h1`
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin: 0;
  padding: 0;
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
  @media (max-width: var(--mq-tiny)) {
    padding-top: 16px;
    padding-left: 0;
  }
  @media (max-width: var(--mq-small)) {
    padding-top: 0;
  }
  @media (max-width: var(--mq-medium)) {
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
  @media (max-width: var(--mq-tiny)) {
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
    <HeroV1Section>
      <Wrapper>
        <Hero>
          <HeroPhoto>
            <GatsbyImage
              image={data.contentfulHomepage.hero?.gatsbyImageData}
              alt="hi"
              className={styles.heroPhoto}
            />
          </HeroPhoto>

          {/*<img src="images/oswaldo-ibanez-avatar.jpg" sizes="(max-width: 479px) 40vw, 24vw"*/}
          {/*                          srcSet="images/oswaldo-ibanez-avatar-p-500.jpeg 500w, images/oswaldo-ibanez-avatar.jpg 1000w"*/}
          {/*                          alt="" className={styles.heroV1Photo}/>*/}
          <HeroInfo>
            <HeroText>
              {data.contentfulHomepage.pageHeader.pageHeader}{' '}
            </HeroText>
            <DynamicTextWrapper>
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
