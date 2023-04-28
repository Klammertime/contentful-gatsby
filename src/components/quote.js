import React from 'react'
import styled from 'styled-components'
import Text from './ui/text'

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
// TODO check error and tiny var

const Quote = ({ testimonialQuote }) => {
  return (
    <QuoteWrapper>
      <div className="dynamic-testimonial">
        <div className="dynamic-review">
          {testimonialQuote?.blurbQuote?.blurbQuote && (
            <Text variant="dynamicText">
              {testimonialQuote?.blurbQuote?.blurbQuote}
            </Text>
          )}
          <div className="dynamic-review-info">
            {testimonialQuote?.name && (
              <div className="dynamic-review-author">
                {testimonialQuote?.name}
              </div>
            )}
            {testimonialQuote?.title && (
              <div className="dynamic-review-job-title">
                {testimonialQuote?.title}
              </div>
            )}
          </div>
        </div>
      </div>
    </QuoteWrapper>
  )
}

export default Quote
