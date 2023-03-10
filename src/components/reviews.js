import React from 'react'
import styled from 'styled-components'
import GridSection from '../components/grid-section'

const ReviewContainer = styled.div`
  display: grid;
  grid: auto-flow 1fr 30px / 1fr;
  grid-gap: 20px 30px;
  grid-column: 2/12;
  max-width: 970px;
  padding: 50px 40px 35px 40px;
  background-color: #f1ede9;
  border-radius: 24px;
  @media (max-width: 991px) {
    grid-column: 1/13;
    margin: 0 auto 40px auto;
  }
`

const ReviewText = styled.div`
  @media (max-width: 991px) {
    font-size: 15px;
    line-height: 24px;
  }
`
const ReviewInfo = styled.div`
  font-weight: 600;
  letter-spacing: -0.025em;
`

const Reviews = ({ reviewsList }) => {
  return (
    <GridSection sectionLabel="CONTACT" sectionHeader="What My Coworkers Say">
      {reviewsList.map((reviewItem, index) => (
        <ReviewContainer key={index}>
          <ReviewText>"{reviewItem.review}"</ReviewText>
          <ReviewInfo>- {reviewItem.name}</ReviewInfo>
        </ReviewContainer>
      ))}
    </GridSection>
  )
}

export default Reviews
