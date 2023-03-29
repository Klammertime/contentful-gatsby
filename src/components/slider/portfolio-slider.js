import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import Section from '../ui/section'

const StyledWrapper = styled.div`
  width: 100%;
  //height: auto;
  // also can try height 783, max-width 1021px
  // but have to edit images bec cuts off area
  height: 745px;
  max-width: 970px;
  margin-right: auto;
  margin-left: auto;
  padding: 38px;
  border-radius: 30px;
  box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.1);
  position: relative;
  text-align: center;
  clear: both;
  background-color: #fff;

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
    transform: translateY(-50%);
    background-color: var(--white);
    place-items: center;
    border-color: transparent;
    box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.06);
    transition: transform 0.3s, -webkit-transform 0.3s;
    display: flex;
    width: 56px;
    height: 56px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    color: #fff;
    font-size: 40px;
    user-select: none;
  }

  .prev:hover,
  .next:hover {
    //background-color: var(--primary);
  }

  .prev:focus,
  .next:focus {
    outline: 0;
  }

  .prev {
    z-index: 3;
    right: auto;
    left: -88px;
  }

  .next {
    left: auto;
    right: -88px;
  }

  @media (min-width: 800px) {
    .prev,
    .next {
      display: flex;
      width: 56px;
      height: 56px;
      font-size: 3rem;
      padding: 8px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 5px 15px 0 rgba(32, 36, 46, 0.06);
      transition: transform 0.3s, -webkit-transform 0.3s;
      color: #333640;
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
  }

  article.lastSlide {
    transform: translateX(-100%);
  }

  article.nextSlide {
    transform: translateX(100%);
  }

  .person-img {
    border: 0;
    vertical-align: middle;
    display: inline-block;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
  }

  .slider-nav {
    height: 40px;
    padding-top: 13px;
    opacity: 0.4;
    font-size: 6px;
    color: #fff;
    position: absolute;
    z-index: 2;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }

  .activeSlide,
  .nonActiveSlide {
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

  .activeSlide {
    background-color: #222;
  }
`

function PortfolioSlider({ slideContent }) {
  const [people, setPeople] = useState(slideContent)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  return (
    <Section color="offWhite">
      <StyledWrapper>
        <div className="screen-mask">
          {people.map((person, personIndex) => {
            const { portfolioId, portfolioImage } = person

            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide'
            }

            return (
              <article className={position} key={portfolioId}>
                <GatsbyImage
                  image={portfolioImage?.gatsbyImageData}
                  className="person-img"
                  alt="portfolio"
                />
              </article>
            )
          })}
        </div>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        <div className="slider-nav">
          {people.map((person, personIndex) => {
            return (
              <div
                className={
                  personIndex === index ? 'activeSlide' : 'nonActiveSlide'
                }
                onClick={() => setIndex(personIndex)}
              ></div>
            )
          })}
        </div>
      </StyledWrapper>
    </Section>
  )
}

export default PortfolioSlider
