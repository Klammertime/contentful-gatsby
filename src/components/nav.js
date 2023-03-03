import React, { useState, useEffect } from 'react'
import Link from './Link'
import styled from 'styled-components'
import * as styles from './nav.module.css'

const Navigation = styled.nav`
  font-size: 16px;
  line-height: 18px;
  list-style: none;
  position: relative;
  justify-content: center;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  gap: 0 16px;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
  }
`

const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NotScrolled = styled.div`
  backdrop-filter: opacity(1);
  will-change: width, height, background;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 15px 0;
  z-index: 100;
  top: 0;
  @media (max-width: 640px) {
    padding: 10px 0;
  }
`

const Scrolled = styled(NotScrolled)`
  backdrop-filter: opacity(0);
  transition: 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
  background-color: ${(props) =>
    props.bg ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'};
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: width, height, background;
  height: 80px;
`

const LogoWrapper = styled.span`
  align-items: center;
  border-radius: 50%;
  background-color: #f2f3f5;
  justify-content: center;
  width: 35px;
  height: 35px;
  display: flex;
  color: #f83f5a;
  font-weight: 700;
`

const StyledLink = styled(Link)`
  color: #151515;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  transition: all 0.45s ease-Out;
  &:hover {
    color: #151515;
    text-decoration: none;
    outline: 0;
  }
  &:active {
    outline: 0;
    text-decoration: none;
    background-color: transparent;
  }
  @media (max-width: 640px) {
    &:nth-child(4) {
      display: none;
    }
  }
`

const StyledLinkLogo = styled(Link)`
  color: var(--color-orange);
  font-weight: 700;
  text-decoration: none;
  display: flex;
  height: 100%;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;

  @media (max-width: 640px) {
    &:nth-child(4) {
      display: none;
    }
  }
`

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const NavRight = styled.div`
  display: flex;
  padding-right: 12px;
  justify-content: flex-end;
  align-items: center;
`

const NavLinkContainer = styled.li`
  position: relative;
  margin-right: 16px;
  margin-left: 16px;
  padding: 2px 0;
  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
  max-width: 100%;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`

const Underline = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  align-self: flex-end;
  left: -84px;
  background-color: var(--swatch_a5267f7d);
  position: absolute;
  transition: all 0.3s ease-Out;
  bottom: 0;
`

//   .nav-link.w--current {
//   color: #0082f3;
// }

const Nav = () => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.scrollY
      currentPosition > 50 ? setScrolling(true) : setScrolling(false)
    }

    window.addEventListener('scroll', onScroll)

    return function cleanup() {
      window.removeEventListener('scroll', onScroll)
    }
  }, [scrolling])

  return (
    <>
      <Scrolled bg={scrolling}>
        <Navigation role="navigation" aria-label="Main">
          <NavLeft>
            <StyledLinkLogo to={'/'}>
              <LogoWrapper>Ǡ</LogoWrapper>
            </StyledLinkLogo>
          </NavLeft>
          <NavMenu>
            <NavLinkContainer className={styles.button}>
              <Underline className={styles.underline} />
              <StyledLink to="/" activeClassName="active">
                Home
              </StyledLink>
            </NavLinkContainer>
            <NavLinkContainer className={styles.button}>
              <Underline className={styles.underline} />
              <StyledLink to="/portfolio" activeClassName="active">
                Portfolio
              </StyledLink>
            </NavLinkContainer>
            <NavLinkContainer className={styles.button}>
              <Underline className={styles.underline} />
              <StyledLink to="/about" activeClassName="active">
                About
              </StyledLink>
            </NavLinkContainer>
            <NavLinkContainer className={styles.button}>
              <Underline className={styles.underline} />
              <StyledLink to="/blog" activeClassName="active">
                Blog
              </StyledLink>
            </NavLinkContainer>
            <NavLinkContainer className={styles.button}>
              <Underline className={styles.underline} />
              <StyledLink to="/contact" activeClassName="active">
                Contact
              </StyledLink>
            </NavLinkContainer>
          </NavMenu>
          <NavRight>
            <div className={styles.button}>
              <div className={styles.underline}></div>
              <a href="#">Let's Go!</a>
            </div>
          </NavRight>
        </Navigation>
      </Scrolled>
    </>
  )
}

export default Nav
