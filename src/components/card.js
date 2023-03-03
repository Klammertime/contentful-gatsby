import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tags from './tags'
import React from 'react'
import styled from 'styled-components'

const CardDescription = styled.p`
  margin-top: -4px;
  color: var(--swatch_c450d3ea);
  font-size: 15px;
  line-height: 24px;
`

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h4`
  margin-top: 5%;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`
const Card = ({ card1 }) => {
  return (
    <CardWrapper>
      <Link to={`/portfolio/${card1.slug}`}>
        <GatsbyImage alt="" image={card1.heroImage.gatsbyImage} />
      </Link>
      <Title>{card1.title}</Title>
      <CardDescription>
        {card1.workCardDescription.workCardDescription}
      </CardDescription>
      <Meta>
        <Tags tags={card1.tags} />
      </Meta>
    </CardWrapper>
  )
}

export default Card
