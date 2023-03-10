import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Section from './section'
import Card from './card'

const WorkGrid1 = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 112px;
  grid-column-gap: 0;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  max-width: 570px;
  @media screen and (max-width: 991px) {
    grid-row-gap: 64px;
  }
  @media screen and (max-width: 767px) {
    grid-row-gap: 48px;
    max-width: none;
    margin-bottom: 48px;
  }
`

const WorkGrid2 = styled.div`
  display: grid;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  grid-auto-columns: 1fr;
  grid-row-gap: 112px;
  grid-column-gap: 0;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  margin-left: 11%;
  padding-top: 8px;

  @media screen and (max-width: 991px) {
    grid-row-gap: 64px;
    margin-left: 64px;
  }

  @media screen and (max-width: 767px) {
    grid-row-gap: 48px;
    margin-left: 0;
  }
`

const StyledHeader = styled.h2`
  margin: 0 24px 0 0;
`
const DynamicWorks = styled.div`
  display: flex;
  margin-top: -8px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-right: 25%;
  }

  @media screen and (max-width: 479px) {
    padding-right: 0;
  }
`

const DynamicWorksIntro = styled.div`
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: left;
`

const SideLink = styled(Link)`
  padding: 7px 16px 8px;
  color: var(--swatch_a5267f7d);
  font-weight: 600;
  font-size: 13px;
  border-left-color: var(--swatch_68d01675);
  border-left-width: 1px;
  border-left-style: solid;
`

const PortfolioPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  const [card1, card2, card3] = posts

  return (
    <Section color="white">
      <DynamicWorks>
        <WorkGrid1>
          <DynamicWorksIntro>
            <StyledHeader>Recent Works</StyledHeader>
            <SideLink to="/portfolio">Show All</SideLink>
          </DynamicWorksIntro>
          <Card card1={card1} />
        </WorkGrid1>

        <WorkGrid2>
          <Card card1={card2} />
          <Card card1={card3} />
        </WorkGrid2>
      </DynamicWorks>
    </Section>
  )
}

export default PortfolioPreview
