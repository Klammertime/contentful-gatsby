import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '../ui/breadcrumbs'

const TopSection = styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 26vw;
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: var(--beige);

  @media screen and (max-width: 991px) {
    position: static;
    padding-top: 120px;
    padding-bottom: 112px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 96px;
    padding-bottom: 80px;
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
  margin-right: auto;
  margin-left: auto;
  padding-right: 32px;
  padding-left: 32px;
  background-color: transparent;

  @media screen and (max-width: 991px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 700px;
  margin-top: 6px;
  margin-right: auto;
  margin-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`

const PageHeading = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 3.7vw;
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

const SectionAngle = styled.div`
  position: relative;
  z-index: 5;
  height: 5vw;
  margin-top: -5vw;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
const Angle = styled.div`
  position: absolute;
  bottom: -5vw;
  left: -10vw;
  width: 120vw;
  height: 20vw;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  transform: translate(0px, 12.5vw) rotate(-2.5deg);
`

const PageHero = ({ header }) => {
  return (
    <>
      <TopSection>
        <Wrapper>
          <PageHeader>
            <PageHeading>{header}</PageHeading>
          </PageHeader>
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
