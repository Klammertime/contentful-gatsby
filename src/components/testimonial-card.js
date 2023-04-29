import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { IoMdQuote } from 'react-icons/io'
import { RiStarFill } from 'react-icons/ri'
import GenericRichText from './ui/generic-rich-text'
import styled from 'styled-components'

const TestimonialWrapper = styled.div`
  display: inline-block;
  max-width: 100%;

  .testimonial {
    margin: 15px 8px;
    padding: 24px 48px;
    color: #151515;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 0 1px #e4e8ed;
    transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      box-shadow 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    @media screen and (max-width: 479px) {
      margin: 15px 0;
      padding: 24px 16px;
    }
  }
`

const Author = styled.div`
  display: flex;
  align-items: center;
  min-height: 96px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: url(https://assets.website-files.com/5aa6712…/5bc2ddc…_quote-right-icon-grey.svg);
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: 56px;
  border-bottom: 1px solid #e2e4eb;

  .avatar {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
  }

  .name {
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
  }

  .info {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .company {
    display: inline-block;
    margin-top: 4px;
    color: #8e94a2;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-decoration: none;
  }

  .icon {
    color: lightgray;
    font-size: 48px;
  }
`

const QuoteText = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  color: #4d5464;
  font-size: 16px;
  line-height: 28px;

  &:before {
    display: table;
    grid-row: 1/2;
    grid-column: 1/2;
    content: ' ';
  }

  &:after {
    display: table;
    grid-row: 1/2;
    grid-column: 1/2;
    content: ' ';
  }
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 32px;

  .signature {
    color: #8e94a2;
    font-weight: 300;
    font-size: 24px;
    font-family: Slender, sans-serif;
    line-height: 32px;
    text-align: right;
  }

  .rating {
    display: flex;
    align-items: center;
    margin-left: -1px;
    padding-top: 12px;
    padding-bottom: 0;
    color: #ffae2e;
    font-size: 20px;

    .review-star {
      width: 20px;
    }
  }
`

const TestimonialCard = ({ testimonial }) => {
  const { name, title, image, paragraphText } = testimonial
  if (!paragraphText || !name) {
    return null
  }
  return (
    <TestimonialWrapper>
      <div className="testimonial">
        <Author>
          {image && (
            <div>
              <GatsbyImage
                imgStyle={{ 'border-radius': '50%' }}
                className="avatar"
                alt={name}
                image={image?.gatsbyImageData}
              />
            </div>
          )}
          <div className="info">
            <div className="name">{name}</div>
            {title && <div className="company">{title}</div>}
          </div>
          <div className="icon">
            {' '}
            <IoMdQuote />
          </div>
        </Author>
        <QuoteText>
          <GenericRichText data1={paragraphText} />
        </QuoteText>
        <Bottom>
          <div className="rating">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
          <div className="signature">{name}</div>
        </Bottom>
      </div>
    </TestimonialWrapper>
  )
}

export default TestimonialCard
