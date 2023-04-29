import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Section from '../ui/section'
import Text from '../ui/text'
import Dots from './dots'

const Preview = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  @media screen and (max-width: 991px) {
    width: 88px;
    height: 88px;
  }

  @media screen and (max-width: 767px) {
    width: 72px;
    height: 72px;
  }

  @media screen and (max-width: 479px) {
    width: 44vw;
    height: 44vw;
    margin: 7px;
  }
`
const WorkNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr minmax(20px, auto) 1fr;
  padding: 40px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  @media screen and (max-width: 767px) {
    padding: 24px 0;
  }

  @media screen and (max-width: 479px) {
    grid-row-gap: 40px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    text-align: center;
    border-top-style: none;
    border-bottom-style: none;
  }

  .info {
    flex: 1;
    padding: 8px 24px;
    @media screen and (max-width: 767px) {
      padding: 0 10px;
    }
  }

  .nav-button {
    position: relative;
    display: flex;
    align-self: center;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    padding: 12px;

    @media screen and (max-width: 767px) {
      width: 72px;
      height: 72px;
    }

    @media screen and (max-width: 479px) {
      grid-row: 3/4;
      grid-column: 1/2;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;

    @media screen and (max-width: 991px) {
      justify-self: stretch;
      padding: 0;
    }
    @media screen and (max-width: 479px) {
      flex-direction: column;
      padding: 20px 0;
    }
  }

  .nav-link-right {
    display: flex;
    align-items: center;
    align-self: center;
    justify-self: end;
    padding: 0 12px;
    text-align: right;

    @media screen and (max-width: 479px) {
      flex-direction: column-reverse;
      justify-self: stretch;
      text-align: center;
    }
  }

  .circle,
  .circle-wave-1,
  .circle-wave-2 {
    background-color: var(--primary);
    border-radius: 50%;
  }

  .circle {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .circle-wave-1 {
    position: absolute;
    inset: 8px;
    z-index: 2;
    margin: auto;
    opacity: 0.2;
  }

  .circle-wave-2 {
    position: absolute;
    inset: 4px;
    z-index: 1;
    opacity: 0.1;
  }
`

const PortfolioNavigation = ({ previous, next, nextImg, prevImg }) => {
  return (
    <Section color="white" noPaddingTop>
      {(previous || next) && (
        <WorkNav>
          {previous ? (
            <Link
              to={`/portfolio/${previous?.slug}`}
              className="nav-link"
              rel="prev"
            >
              <Preview>
                <GatsbyImage
                  imgStyle={{ 'border-radius': '50%' }}
                  image={prevImg}
                  alt={prevImg?.description || ''}
                />
              </Preview>
              <div className="info">
                <Text variant="xs" color="mediumGrey" asType="p" margin="4px 0">
                  Previous
                </Text>

                <Text asType="h3" variant="medium">
                  {previous.title}
                </Text>
              </div>
            </Link>
          ) : (
            <div className="nav-link"></div>
          )}
          <Link to="/portfolio" className="nav-button">
            <div className="circle">
              <Dots />
            </div>
            <div className="circle-wave-1"></div>
            <div className="circle-wave-2"></div>
          </Link>
          {next && (
            <Link
              to={`/portfolio/${next?.slug}`}
              className="nav-link-right"
              rel="next"
            >
              <div className="info">
                <Text variant="xs" color="mediumGrey" asType="p" margin="4px 0">
                  Next
                </Text>
                <Text asType="h3" variant="medium">
                  {next?.title}
                </Text>
              </div>
              <Preview>
                <GatsbyImage
                  imgStyle={{ 'border-radius': '50%' }}
                  image={nextImg}
                  alt={nextImg?.description || ''}
                />
              </Preview>
            </Link>
          )}
        </WorkNav>
      )}
    </Section>
  )
}

export default PortfolioNavigation
