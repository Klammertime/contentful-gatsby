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

const Grid = styled.div`
  grid: ${(props) =>
  props.columns
    ? 'auto auto / repeat(3, 1fr [col-start])'
    : 'auto auto / repeat(12, 1fr [col-start])'};
  width: 100%;
  perspective: 2000px;
  display: grid;
  grid-gap: 14px 30px;
  @media (max-width: 640px) {
    grid-gap: 0;
    grid: auto auto / 1fr;
  }
`

const Header = styled.h2`
  grid-row: 2/3;
  grid-column: 1/13;
  margin: 0 auto 64px auto;
  font: normal 700 39px/48px Inter, sans-serif;
  @media (max-width: 640px) {
    font: normal 700 24px/48px Inter, sans-serif;
  }
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

const GridSection = ({ children, sectionLabel, sectionHeader, columns }) => {
  return (
    <StyledSection>
      <Grid columns={columns}>
        {sectionLabel && <Label>{sectionLabel}</Label>}
        {sectionHeader && <Header>{sectionHeader}</Header>}
        {children}
      </Grid>
    </StyledSection>
  )
}
export default GridSection
