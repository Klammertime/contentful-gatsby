import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import GenericRichText from './ui/generic-rich-text'

const QuoteWrapper = styled.div`
  .dynamic-testimonial {
    display: flex;
    padding-right: 3%;
    align-items: flex-start;
    @media screen and (max-width: 479px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .dynamic-review-author {
    margin-right: 6px;
    font-weight: 700;
  }

  .dynamic-review {
    flex: 1 1 0;

    p {
      margin-top: 4px;
      font-size: 20px;
      line-height: 32px;
      font-weight: 500;

      @media screen and (max-width: 991px) {
        font-size: 15px;
        line-height: 24px;
      }

      @media screen and (max-width: 479px) {
        font-size: 17px;
        line-height: 28px;
      }
    }

    p > b {
      display: inline-block;
      padding-right: 2px;
      padding-left: 2px;
      background-color: var(--beige);
      color: var(--orange);
      font-weight: 500;
    }
  }

  .dynamic-review-job-title {
    font-weight: 500;
    color: var(--medium-grey);
  }

  .dynamic-review-info {
    display: flex;
    margin-top: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    flex-wrap: wrap;
    align-items: center;

    margin-right: 6px;
    color: #151515;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    @media screen and (max-width: 479px) {
      justify-content: center;
    }
    @media screen and (max-width: 991px) {
      margin-top: 4px;
      font-size: 13px;
      line-height: 20px;
    }
  }

  .text-highlighted {
    display: inline-block;
    padding-right: 2px;
    padding-left: 2px;
    background-color: var(--beige);
    color: var(--orange);
  }

  .avatar {
    width: 80px;
    height: 80px;
    margin-right: 32px;
    border-radius: 50%;
    object-fit: cover;

    @media screen and (max-width: 991px) {
      width: 72px;
      height: 72px;
      margin-right: 20px;
    }
  }
`

const Quote = ({ testimonialQuote }) => {
  const { name, title, company, image, highlightedQuote } = testimonialQuote
  return (
    <QuoteWrapper>
      <div className="dynamic-testimonial">
        <GatsbyImage
          imgStyle={{ borderRadius: '50%' }}
          className="avatar"
          image={image?.gatsbyImageData}
          alt={name}
        />

        <div className="dynamic-review">
          <GenericRichText data1={highlightedQuote} />
          <div className="dynamic-review-info">
            {name && <div className="dynamic-review-author">{name}</div>}
            {title && (
              <div className="dynamic-review-job-title">
                — {title} of {company}
              </div>
            )}
          </div>
        </div>
      </div>
    </QuoteWrapper>
  )
}

export default Quote
