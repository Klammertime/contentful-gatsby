import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '../components/breadcrumbs'
import Section from './section'

const TopSection = styled(Section)`
  margin: 0 auto;
  z-index: 1;
  min-height: 26vw;
`

const SectionAngle = styled.div`
  position: relative;
  z-index: 5;
  overflow: hidden;
  height: 5vw;
  margin-top: -5vw;
`

const Angle = styled.div`
  position: absolute;
  left: -10vw;
  bottom: -5vw;
  width: 120vw;
  height: 20vw;
  background-color: #fff;
  transform: translate(0px, 12.5vw) rotate(-2.5deg);
`

const Header = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 3.7vw;
  font-weight: 700;
  line-height: 4.4vw;

  @media screen and (max-width: 991px) {
    font-size: 5.6vw;
    line-height: 7vw;
  }

  @media screen and (max-width: 767px) {
    font-size: 7vw;
    line-height: 8vw;
  }

  @media screen and (max-width: 479px) {
    font-size: 10vw;
    line-height: 12vw;
  }
`

const PageHero = ({ header = 'test' }) => {
  return (
    <>
      <TopSection>
        <Header>{header}</Header>
      </TopSection>
      <SectionAngle>
        <Angle />
      </SectionAngle>
      <Breadcrumbs crumb={header} />
    </>
  )
}
export default PageHero
