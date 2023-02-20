import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  background-color: white;
  position: relative;
  padding: 100px 20px;
`

const Header = styled.h2`
  margin-bottom: 16px;
  font: normal 700 40px/48px Inter, sans-serif;
  @media (max-width: 640px) {
    font: normal 700 24px/48px Inter, sans-serif;
  }
`

const Divider = styled.div`
  width: 70px;
  height: 3px;
  background-color: var(--color-orange);
  display: block;
  margin: 20px auto;
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
