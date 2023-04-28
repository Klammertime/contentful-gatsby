import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from '../ui/link'
import BurgerMenu from './burger-menu'

const Navigation = styled.nav`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 0;
  grid-column-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;

  @media screen and (max-width: 991px) {
    grid-auto-columns: 1fr;
    grid-template-columns: auto auto;
  }
`

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

// same as navbar
const NotScrolled = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 15px 0;
  backdrop-filter: opacity(1);
  will-change: height, background;

  @media screen and (max-width: 767px) {
    height: 64px;
  }

  @media screen and (max-width: 479px) {
    z-index: 100;
    max-width: 479px;
  }
`

const Scrolled = styled(NotScrolled)`
  background-color: ${(props) =>
    props.bg ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'};
  backdrop-filter: opacity(0);
  transition: 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);

  box-shadow: ${(props) =>
    props.bg ? '0 5px 15px 0 rgba(32, 36, 46, 0.06)' : 'none'};
`

const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  color: #f83f5a;
  font-weight: 700;
  background-color: var(--tag-grey);
  border-radius: 50%;
`

const StyledLink = styled(Link)`
  position: relative;
  color: var(--black);
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.45s ease-Out;

  &:hover {
    color: var(--primary);
    text-decoration: none;
    outline: 0;
  }

  //&:active {
  //  text-decoration: none;
  //  background-color: transparent;
  //  outline: 0;
  //}

  &.active {
    color: var(--primary);
  }
`
const StyledLinkLogo = styled(Link)`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 12px 16px;
  color: var(--color-orange);
  font-weight: var(--bold);
  text-decoration: none;
`

const NavMenu = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 991px) {
    display: none;
  }
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
  @media screen and (max-width: 991px) {
    padding-right: 0;
  }

  .button {
    display: none;
    @media screen and (max-width: 991px) {
      display: block;
    }
  }

  .button:hover .underline {
    left: 0;
  }
`

const NavLinkContainer = styled.li`
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 16px;
  padding: 2px 0;
  overflow: hidden;
  font-weight: var(--semibold);
  font-size: var(--text-xs);
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 991px) {
    display: block;
    margin: 0;
    padding: 12px 36px;
    color: var(--black);
    font-size: 17px;
    line-height: 1.4;
    text-transform: none;
  }

  @media screen and (max-width: 767px) {
    font-size: 15px;
    line-height: 1.3;
  }
`

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: -84px;
  align-self: flex-end;
  width: 100%;
  height: 1px;
  margin-top: 8px;
  background-color: var(--black);
  transition: all 0.3s ease-Out;
`

const Nav = ({ current, navLinks }) => {
  const [scrolling, setScrolling] = useState(false)
  const [currentPath, setCurrentPath] = useState('')
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
    <Scrolled bg={scrolling}>
      <Navigation role="navigation" aria-label="Main">
        <NavLeft>
          <StyledLinkLogo to={'/'}>
            <LogoWrapper>Ǡ</LogoWrapper>
          </StyledLinkLogo>
        </NavLeft>
        <NavMenu>
          {navLinks.map((nav, index) => (
            <NavLinkContainer key={`${nav.label}${index}`} className="button">
              <Underline className="underline" />
              <StyledLink
                onClick={() => setCurrentPath(current)}
                to={nav.page}
                className={`${currentPath === nav.page ? 'active' : ''}`}
                activeClassName="active"
              >
                {nav.label}
              </StyledLink>
            </NavLinkContainer>
          ))}
        </NavMenu>
        <NavRight>
          <div className="button">
            <BurgerMenu navLinks={navLinks} />
          </div>
        </NavRight>
      </Navigation>
    </Scrolled>
  )
}

export default Nav
