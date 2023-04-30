import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import styled from 'styled-components'
import Section from '../ui/section'

const StyledWrapper = styled.div`
  position: relative;
  clear: both;
  width: 100%;
  max-width: 970px;
  height: 588px;
  margin: 0 auto;
  padding: 38px;
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.3);
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 100%;

    height: 525px;
    margin: 0;
    padding: 0;
  }

  .screen-mask {
    position: relative;
    right: 0;
    left: 0;
    z-index: 1;
    display: block;
    height: 100%;
    min-height: 420px;
    overflow: hidden;
    white-space: nowrap;
    background-color: #f7f8fc;
    border: 2px solid #e2e4eb;
    border-radius: 8px;
  }

  .prev,
  .next {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin: auto;
    padding: 11px;
    overflow: hidden;
    color: #333640;
    font-size: 3rem;
    background-color: var(--white);
    border-color: transparent;
    border-radius: 50%;
    box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.06);
    transform: translateY(-50%);
    cursor: pointer;
    transition: transform 0.3s, -webkit-transform 0.3s;
    user-select: none;
    place-items: center;
  }

  .prev:focus,
  .next:focus {
    outline: 0;
  }

  .prev {
    right: auto;
    bottom: 43%;
    left: -88px;
    z-index: 3;
    @media screen and (max-width: 1185px) {
      left: -33px;
    }

    @media screen and (max-width: 991px) {
      top: 50%;
      left: -9px;
    }
  }

  .next {
    right: -88px;
    bottom: 43%;
    left: auto;
    z-index: 3;
    @media screen and (max-width: 1185px) {
      right: -33px;
    }

    @media screen and (max-width: 991px) {
      top: 50%;
      right: -9px;
    }
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s linear;
  }

  .activeSlide,
  .lastSlide,
  .nextSlide {
    width: 100%;
    height: 100%;
    white-space: normal;
    vertical-align: top;
  }

  .activeSlide {
    transform: translateX(0);
    opacity: 1;
  }

  .lastSlide {
    transform: translateX(-100%);
  }

  .nextSlide {
    transform: translateX(100%);
  }

  .item-img {
    position: absolute;
    display: inline-block;
    width: 100%;
    max-width: none;
    height: 100%;
    margin: 0;
    padding: 0;
    object-fit: cover;
    vertical-align: middle;
    border: 0;
    inset: 0;
    @media screen and (max-width: 479px) {
      height: auto;
    }
  }

  .slider-nav {
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    height: 40px;
    margin: auto;
    padding-top: 13px;
    font-size: 6px;
    text-align: center;
    opacity: 0.4;
    -webkit-tap-highlight-color: transparent;
    @media screen and (max-width: 991px) {
      bottom: -40px;
    }
  }

  .activeImg,
  .nonActiveImg {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0 3px 0.5em 3px;
    background-color: rgba(34, 34, 34, 0.4);
    border-radius: 100%;
    cursor: pointer;
    transition: background-color 0.1s, color 0.1s;
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
