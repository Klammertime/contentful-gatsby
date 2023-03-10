import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 100px 20px;
  text-align: center;
  background-color: white;
`

const Header = styled.h2`
  margin-bottom: 16px;
  font: normal 700 40px/48px Inter, sans-serif;
  @media (max-width: 640px) {
    font: normal 700 24px/48px Inter, sans-serif;
  }
`

const Divider = styled.div`
  display: block;
  width: 70px;
  height: 3px;
  margin: 20px auto;
  background-color: var(--color-orange);
`

const Description = styled.p`
  color: #777;
`

const SectionHeader = (props) => {
  return (
    <StyledSection>
      <Header>{props.sectionHeader}</Header>
      <Divider />
      <Description>{props.description}</Description>
    </StyledSection>
  )
}
export default SectionHeader
