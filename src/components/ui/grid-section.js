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

  @media screen and (max-width: 991px) {
    flex-direction: column;
    grid-row-gap: 64px;
    grid-column-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-row-gap: 48px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 479px) {
    grid-column-gap: 0;
  }
`

const GridSection = ({ children, columns }) => {
  return <Grid columns={columns}>{children}</Grid>
}
export default GridSection
