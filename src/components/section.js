import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 128px 5%;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
`

const Label = styled.div`
  grid-row: 1/2;
  border-radius: 4px;
  color: #f96a4c;
  letter-spacing: 0.8px;
  grid-column-start: span 12;
  margin: 0 auto;
  font: normal small-caps 600 12px/16px Inter, sans-serif;
`

const Section = ({ children, sectionLabel }) => {
  return (
    <StyledSection>
      {sectionLabel && <Label>{sectionLabel}</Label>}
      {children}
    </StyledSection>
  )
}
export default Section
