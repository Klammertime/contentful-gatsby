import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 128px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  display: flex;
  min-height: 26vw;
  background-color: #f1ede9;
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
  font-size: 3.7vw;
  font-weight: 700;
  @media (max-width: 940px) {
    font-size: 7vw;
  }
`

const Divider = styled.div`
  width: 70px;
  height: 3px;
  background-color: var(--orange);
  display: block;
  margin: 20px auto;
`

const Description = styled.p`
  max-width: 700px;
  color: #777;
  margin-bottom: 16px;
  font-size: 17px;
  line-height: 28px;
`

const PageHeaderSection = ({ header, pageDescription }) => {
  return (
    <>
          <StyledSection>
            <Header>{header}</Header>
            <Divider />
            <Description>{pageDescription}</Description>
          </StyledSection>
          <SectionAngle>
            <Angle />
          </SectionAngle>
    </>
  )
}
export default PageHeaderSection
