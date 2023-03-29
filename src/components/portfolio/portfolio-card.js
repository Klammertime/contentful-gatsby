import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Tags from '../ui/tags'
import Text from '../ui/text'

const CardDescription = styled.p`
  margin-top: -4px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`
const PortfolioCard = ({ card1 }) => {
  const { slug, heroImage, title, tags } = card1
  const { workCardDescription } = card1.workCardDescription
  return (
    <CardWrapper>
      <Link to={`/portfolio/${slug}`}>
        <GatsbyImage
          objectFit="cover"
          image={heroImage?.gatsbyImageData}
          alt="title"
        />
      </Link>
      <Text margin="20px 0 12px 0" asType="h2" variant="small">
        {title}
      </Text>
      {workCardDescription && (
        <CardDescription>
          <Text variant="textGrey" asType="p">
            {workCardDescription}
          </Text>
        </CardDescription>
      )}
      {tags ? (
        <Meta>
          <Tags tags={tags} />
        </Meta>
      ) : (
        <Meta></Meta>
      )}
    </CardWrapper>
  )
}

export default PortfolioCard
