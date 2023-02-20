import React, { useState, useEffect } from 'react'
import Link from './Link'
import * as styles from './navigation.module.css'
import styled from 'styled-components'

const Navigation = styled.nav`
  font-size: 16px;
  line-height: 18px;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, auto);
  place-items: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
  }
`

const NotScrolled = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  padding: 15px 0;
  z-index: 100;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  top: 0;
  background: rgba(250, 247, 247, 0.8);
  @media (max-width: 640px) {
    padding: 10px 0;
  }
`

const Scrolled = styled(NotScrolled)`
  backdrop-filter: blur(20px);
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
`

const StyledLink = styled(Link)`
  overflow: hidden;
  color: #151515;
  font-weight: 700;
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
  @media (max-width: 640px) {
    &:nth-child(4) {
      display: none;
    }
  }
`

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
      <Scrolled>
        <Navigation role="navigation" aria-label="Main">

          <StyledLinkLogo className={styles.logoLink} to={'/'}>
            <LogoWrapper className={styles.logo}>Ǡ</LogoWrapper>
          </StyledLinkLogo>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
              <StyledLink to="/portfolio" activeClassName="active">
                Portfolio
              </StyledLink>
            </li>
            <li className={styles.navigationItem}>
              <StyledLink to="/about" activeClassName="active">
                About
              </StyledLink>
            </li>
            <li className={styles.navigationItem}>
              <StyledLink to="/blog" activeClassName="active">
                Blog
              </StyledLink>
            </li>
            <li className={styles.navigationItem}>
              <StyledLink to="/contact" activeClassName="active">
                Contact
              </StyledLink>
            </li>
          </ul>
        </Navigation>
      </Scrolled>
    </>
  )
}

export default Nav
