import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'

const ReviewContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #f1ede9;
  grid-column: 2/12;
  display: grid;
  grid: auto-flow 1fr 30px / 1fr;
  padding: 50px 40px 35px 40px;
  grid-gap: 20px 30px;
  @media (max-width: 991px) {
    grid-column: 1/13;
    margin: 0 auto 40px auto;
  }
`

const ReviewText = styled.div`
  font: normal 500 1.3rem/1.6 Inter, sans-serif;
  @media (max-width: 991px) {
    font-size: 15px;
    line-height: 24px;
  }
`
const ReviewInfo = styled.div`
  letter-spacing: -0.025em;
  font-weight: 600;
`

const Reviews = ({ reviewsList }) => {
  return (
    <Section
      sectionLabel="CONTACT"
      sectionHeader="What My Coworkers Say"
    >
      {reviewsList.map((reviewItem, index) => (
        <ReviewContainer key={index}>
          <ReviewText>"{reviewItem.review}"</ReviewText>
          <ReviewInfo>- {reviewItem.name}</ReviewInfo>
        </ReviewContainer>
      ))}
    </Section>
  )
}

export default Reviews
