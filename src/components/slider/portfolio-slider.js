import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import styled from 'styled-components'
import Section from '../ui/section'

const StyledWrapper = styled.div`
  width: 100%;
  height: 588px;
  max-width: 970px;
  margin: 0 auto;
  padding: 38px;
  border-radius: 30px;
  box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.3);
  position: relative;
  text-align: center;
  clear: both;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 50vh;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  .screen-mask {
    min-height: 420px;
    position: relative;
    display: block;
    overflow: hidden;
    z-index: 1;
    left: 0;
    right: 0;
    height: 100%;
    white-space: nowrap;
    border: 2px solid #e2e4eb;
    border-radius: 8px;
    background-color: #f7f8fc;
  }

  .prev,
  .next {
    color: #333640;
    transform: translateY(-50%);
    background-color: var(--white);
    place-items: center;
    border-color: transparent;
    box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.06);
    transition: transform 0.3s, -webkit-transform 0.3s;
    display: flex;
    width: 56px;
    height: 56px;
    padding: 11px;
    font-size: 3rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    //top: 0;
    //bottom: 0;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    @media screen and (max-width: 991px) {
      background-color: #433056;
      color: #fff;
    }
  }

  .prev:focus,
  .next:focus {
    outline: 0;
  }

  .prev {
    z-index: 3;
    right: auto;
    left: -88px;
    bottom: 43%;
    @media screen and (max-width: 1185px) {
      left: -33px;
    }

    //@media screen and (max-width: 1024px) {
    //  left: -5%;
    //}

    @media screen and (max-width: 991px) {
      left: 0;
      bottom: -17%;
    }
  }

  .next {
    left: auto;
    right: -88px;
    bottom: 43%;
    @media screen and (max-width: 1185px) {
      right: -33px;
    }

    //@media screen and (max-width: 1024px) {
    //  right: -5%;
    //}
    @media screen and (max-width: 991px) {
      left: -80%;
      bottom: -17%;
    }
  }


  article {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s linear;
  }

  article.activeSlide,
  article.lastSlide,
  article.nextSlide {
    vertical-align: top;
    width: 100%;
    height: 100%;
    white-space: normal;
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);


    article.lastSlide {
      transform: translateX(-100%);
    }

    article.nextSlide {
      transform: translateX(100%);
    }

    .item-img {
      border: 0;
      vertical-align: middle;
      display: inline-block;
      height: 100%;
      margin: 0;
      max-width: none;
      padding: 0;
      position: absolute;
      inset: 0;
      width: 100%;
      object-fit: cover;
      @media screen and (max-width: 479px) {
        height: auto;
      }

    }

    .slider-nav {
      height: 40px;
      padding-top: 13px;
      opacity: 0.4;
      font-size: 6px;
      color: #fff;
      position: absolute;
      z-index: 2;
      inset: auto 0 0 0;
      margin: auto;
      text-align: center;
      -webkit-tap-highlight-color: transparent;
    }

    .activeImg,
    .nonActiveImg {
      position: relative;
      display: inline-block;
      width: 1em;
      height: 1em;
      cursor: pointer;
      margin: 0 3px 0.5em 3px;
      transition: background-color 0.1s, color 0.1s;
      background-color: rgba(34, 34, 34, 0.4);
      border-radius: 100%;
    }

    .activeImg {
      background-color: #222;
    }
`

function PortfolioSlider({ slideContent }) {
  const [portfolioItems, setPortfolioItems] = useState(slideContent)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = portfolioItems.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, portfolioItems])

  return (
    <Section noPadding>
      <StyledWrapper>
        <div className="screen-mask">
          {portfolioItems.map((item, itemIndex) => {
            let position = 'nextSlide'
            if (itemIndex === index) {
              position = 'activeSlide'
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === portfolioItems.length - 1)
            ) {
              position = 'lastSlide'
            }

            return (
              <article className={position} key={item.id}>
                <GatsbyImage
                  objectPosition="0% 0%"
                  image={item?.gatsbyImageData}
                  className="item-img"
                  alt={item?.description || ''}
                />
              </article>
            )
          })}
        </div>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <HiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <HiChevronRight />
        </button>
        <div className="slider-nav">
          {portfolioItems.map((item, itemIndex) => {
            return (
              <div
                key={item.id}
                className={itemIndex === index ? 'activeImg' : 'nonActiveImg'}
                onClick={() => setIndex(itemIndex)}
              ></div>
            )
          })}
        </div>
      </StyledWrapper>
    </Section>
  )
}

export default PortfolioSlider
