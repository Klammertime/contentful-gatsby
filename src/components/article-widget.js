import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Link from './ui/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  .widget {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    padding: 32px 0;
    color: #111;
    text-decoration: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .widgetImage {
    position: relative;
    width: 200px;
    height: 150px;
    margin-right: 24px;
  }
`

const Info = styled.div`
  flex: 1;
  flex-direction: column;

  h5 {
    margin: 0 0 8px 0;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    text-transform: uppercase;
  }
`
const ArticleWidget = ({ articleInfo }) => {
  const { title, summary, newsImage, url } = articleInfo
  return (
    <Wrapper>
      <Link className="widget" to={url}>
        <GatsbyImage
          alt=""
          image={newsImage?.gatsbyImageData}
          className="widgetImage"
        ></GatsbyImage>
        <Info>
          <h5>{title}</h5>
          <p className="description">{summary?.summary}</p>
        </Info>
      </Link>
    </Wrapper>
  )
}

export default ArticleWidget
