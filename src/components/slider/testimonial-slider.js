import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import Section from '../ui/section'

const ReviewContainer = styled.div`
  position: relative;
  display: block;
  padding-bottom: 8px;
  overflow: hidden;
`

const ReviewText = styled.div`
  @media (max-width: 991px) {
    font-size: 15px;
    line-height: 24px;
  }

  margin-top: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: left;
`

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  letter-spacing: -0.025em;
  text-align: left;
`

const ReviewTabsMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`

const OwlDot = styled.button`
  width: 30px;
  height: 4px;
  margin-right: 6px;
  background-color: var(--light-grey);
  border: 0;
  cursor: pointer;
  -webkit-appearance: button;
  ${({ active }) =>
    active &&
    `
      background-color: var(--primary);
  `}
`

const TabsContent = styled.div`
  position: relative;
  display: block;
  padding-bottom: 8px;
  overflow: hidden;
`

const ReviewsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 1;
  grid-column-end: span 1;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px auto;
  padding: 30px 60px;
  text-align: left;
`

const TestimonialSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTestimonial {
        nodes {
          name
          company
          id
          text {
            text
          }
          title
        }
        totalCount
      }
    }
  `)

  const myReviews = data?.allContentfulTestimonial?.nodes
  const [active, setActive] = useState(0)
  const [review, setReview] = useState(data.allContentfulTestimonial.nodes[0])
  const [name, setName] = useState(myReviews[0]?.name)

  const handleClick = (index, review, name) => {
    setActive(index)
    setReview(review)
    setName(name)
  }

  return (
    <Section
      color="white"
      header="testimonials"
      description="What my clients say"
      noPaddingTop
    >
      <ReviewsWrapper>
        <TabsContent>
          <ReviewContainer>
            <ReviewText>
              {/*<GenericRichText richTextLabel="quoteRichText" data1={review} />*/}
            </ReviewText>
            <ReviewInfo>{name}</ReviewInfo>
          </ReviewContainer>
        </TabsContent>
        <ReviewTabsMenu>
          {data?.allContentfulTestimonial?.nodes.map((review, index) => {
            const { name } = review
            return (
              <div className="owl-dots">
                <OwlDot
                  key={index}
                  active={active === index}
                  onClick={() => handleClick(index, review, name)}
                  role="button"
                >
                  <span></span>
                </OwlDot>
              </div>
            )
          })}
        </ReviewTabsMenu>
      </ReviewsWrapper>
    </Section>
  )
}

export default TestimonialSlider
