import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid: ${(props) =>
    props.columns
      ? 'auto auto / repeat(3, 1fr [col-start])'
      : 'auto auto / repeat(12, 1fr [col-start])'};
  grid-gap: 14px 30px;
  width: 100%;
  perspective: 2000px;
  @media (max-width: 640px) {
    grid: auto auto / 1fr;
    grid-gap: 0;
  }

  @media screen and (max-width: 479px) {
    grid-row-gap: 48px;
    grid-column-gap: 0;
    grid-template-columns: 1fr;
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
  grid-column-start: span 12;
  margin: 0 auto;
  color: #f96a4c;
  font: normal small-caps 600 12px/16px Inter, sans-serif;
  letter-spacing: 0.8px;
  border-radius: 4px;
`

const GridSection = ({ children, sectionLabel, sectionHeader, columns }) => {
  return (
    <Grid columns={columns}>
      {sectionLabel && <Label>{sectionLabel}</Label>}
      {sectionHeader && <Header>{sectionHeader}</Header>}
      {children}
    </Grid>
  )
}
export default GridSection
