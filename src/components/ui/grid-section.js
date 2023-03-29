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

const GridSection = ({ children, columns }) => {
  return <Grid columns={columns}>{children}</Grid>
}
export default GridSection
