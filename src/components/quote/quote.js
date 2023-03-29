import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Text from '../ui/text'

const QuoteWrapper = styled.div`
  .dynamic-testimonial {
    display: flex;
    padding-right: 3%;
    align-items: flex-start;
    @media screen and (max-width: var(--tiny)) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .dynamic-review {
    flex: 1 1 0;

    .text-highlighted {
      display: inline-block;
      padding-right: 2px;
      padding-left: 2px;
      background-color: var(--beige);
      color: var(--orange);
    }
  }


  .dynamic-review-author {
    margin-right: 6px;
    color: var(--black);
    font-weight: 700;
  }

  .dynamic-review-job-title {
    font-weight: 500;
  }

  .dynamic-review-info {
    display: flex;
    margin-top: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    flex-wrap: wrap;
    align-items: center;
    color: var(--medium-grey);

    .dynamic-review-avatar {
      width: 80px;
      height: 80px;
      margin-right: 32px;
      border-radius: 50%;
      object-fit: cover;
      @media screen and (max-width: var(--md)) {
        width: 72px;
        height: 72px;
        margin-right: 20px;
      }

      @media screen and (max-width: var(--tiny)) {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }


`

const Quote = ({ text, avatar, author, jobTitle }) => {
  return (
    <QuoteWrapper>
      <div className="dynamic-testimonial">
        {avatar && <GatsbyImage alt="avatar" image={avatar} />}
        <div className="dynamic-review">
          <Text variant="dynamicText">
            "I think{' '}
            <span className="text-highlighted">Webflow is the future</span> of
            website design and front-end, and Elastic Themes helps to shape that
            future today by&nbsp;creating some great&nbsp;templates."
          </Text>
          <div className="dynamic-review-info">
            <div className="dynamic-review-author">Denis Pakhaliuk</div>
            <div className="dynamic-review-job-title">— CEO of Ramotion</div>
          </div>
        </div>
      </div>
    </QuoteWrapper>
  )
}

export default Quote
