import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '../components/breadcrumbs'

const TopSection = styled.section`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 26vw;
  padding-top: 128px;
  padding-bottom: 128px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #f1ede9;
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
  @media (max-width: var(--mq-medium)) {
    font-size: 5.6vw;
    line-height: 7vw;
  }

  @media (max-width: var(--mq-small)) {
    font-size: 7vw;
    line-height: 8vw;
  }

  @media (max-width: var(--mq-tiny)) {
    font-size: 10vw;
    line-height: 12vw;
  }

  @media (max-width: 940px) {
    font-size: 7vw;
  }
`

const PageHero = ({ header = 'test' }) => {
  return (
    <>
      <TopSection>
        <Wrapper>
          <Header>{header}</Header>
        </Wrapper>
      </TopSection>
      <SectionAngle>
        <Angle />
      </SectionAngle>
      <Breadcrumbs crumb={header} />
    </>
  )
}
export default PageHero
