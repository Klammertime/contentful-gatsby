import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Tags from './tags'

const CardDescription = styled.p`
  margin-top: -4px;
  color: var(--swatch_c450d3ea);
  font-size: 15px;
  line-height: 24px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h4`
  margin: 20px 0 12px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`
const Card = ({ card1, workCardDescription }) => {
  return (
    <CardWrapper>
      <Link to={`/portfolio/${card1.slug}`}>
        <GatsbyImage
          objectFit="cover"
          image={card1.heroImage.gatsbyImageData}
          alt="title"
        />
      </Link>
      <Title>{card1.title}</Title>
      {workCardDescription && (
        <CardDescription>{workCardDescription}</CardDescription>
      )}
      {card1.tags ? (
        <Meta>
          <Tags tags={card1.tags} />
        </Meta>
      ) : (
        <Meta></Meta>
      )}
    </CardWrapper>
  )
}

export default Card
