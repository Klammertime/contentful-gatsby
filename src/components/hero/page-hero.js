import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '../ui/breadcrumbs'
import Section from '../ui/section'

const TopSection = styled(Section)`
  z-index: 1;
  min-height: 26vw;
  margin: 0 auto;
`

const SectionAngle = styled.div`
  position: relative;
  z-index: 5;
  height: 5vw;
  margin-top: -5vw;
  overflow: hidden;
`

const Angle = styled.div`
  position: absolute;
  bottom: -5vw;
  left: -10vw;
  width: 120vw;
  height: 20vw;
  background-color: #fff;
  transform: translate(0px, 12.5vw) rotate(-2.5deg);
`

const Header = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 3.7vw;
  line-height: 1.2;

  @media screen and (max-width: 991px) {
    font-size: 5.6vw;
  }

  @media screen and (max-width: 767px) {
    font-size: 7vw;
  }

  @media screen and (max-width: 479px) {
    font-size: 10vw;
  }
`

const PageHero = ({ header = 'test' }) => {
  return (
    <>
      <TopSection color="beige">
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
