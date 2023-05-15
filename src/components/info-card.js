import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'
import Link from './ui/link'

const InfoCardWrapper = styled.div`
  p:not([slot]):first-of-type:before {
    position: absolute;
    transform: translate3d(-110%, 0, 0);
  }

  p:not([slot]):first-of-type:before {
    content: '“';
  }

  p:not([slot]):first-of-type:before,
  :not([slot]):last-of-type:after {
    font-family: Georgia, serif;
  }

  :before {
    box-sizing: border-box;
    font-feature-settings: 'kern';
    font-kerning: normal;
  }

  .info-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 878px;
    padding: 20px;
    background-color: var(--white);
    border-radius: 4px;
  }

  .info-card-image {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
  }

  .title {
    color: #8e94a2;
    font-weight: var(--semibold);
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .paragraph-small {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 20px;
  }

  .link {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding-right: 12px;
    color: hsla(225, 15.38%, 15.29%, 1);
    font-weight: var(--semibold);
    font-size: 12px;
    line-height: 16px;
    text-decoration: none;
  }

  .info-card-content {
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    padding: 28px 20px 24px;

    @media screen and (max-width: 767px) {
      padding: 28px 0 0 0;
    }
  }

  .link-text {
    min-width: 6em;
    font-size: 14px;
    line-height: 24px;
  }

  .arrow-icon {
    height: 21px;
    margin-left: -6px;
    color: #f83f5a;
    font-size: 18px;
    line-height: 24px;
  }

  .wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    background-color: transparent;
  }

  .wrapper.side-paddings {
    padding-right: 15px;
    padding-left: 15px;
  }

  .section {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 40px;
    background-color: var(--white);
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: var(--semibold);
    font-size: 18px;
    line-height: 24px;
  }

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  color: #111;
  text-decoration: none;
  background-color: var(--white);
  border: 1px solid var(--border);
`
const Category = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: inline-block;
  height: 24px;
  margin: 40px;
  padding: 4px 8px 0 10px;
  color: #111;
  font-weight: var(--bold);
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--white);
`
const InfoCard = ({ info }) => {
  const {
    title,
    heading,
    summary,
    linkTextOptions,
    url,
    pdf,
    newsImage,
    source,
  } = info
  const newUrl = pdf ? pdf?.url : url

  return (
    <InfoCardWrapper>
      <div className="info-card">
        {heading && <Category>{heading || 'IN THE NEWS'}</Category>}
        <GatsbyImage
          style={{ height: '207px' }}
          image={newsImage?.gatsbyImageData}
          className="info-card-image"
          alt={newsImage?.description || ''}
        />
        <div className="info-card-content">
          {title && <h4>{title}</h4>}
          {summary?.summary && (
            <p className="paragraph-small">{summary?.summary}</p>
          )}
          {newUrl && (
            <Link to={newUrl} className="link">
              <BiChevronRight className="arrow-icon" />
              <div className="link-text">
                {linkTextOptions && source
                  ? `${linkTextOptions} ${source}`
                  : `Read full article`}
              </div>
            </Link>
          )}
        </div>
      </div>
    </InfoCardWrapper>
  )
}

export default InfoCard
