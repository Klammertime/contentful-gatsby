import React from 'react'
import styled from 'styled-components'
import './variables.css'
import './global.css'
import Seo from './seo'
import Nav from './nav'
import Footer from './footer'
import PageHero from './page-hero'
import HomeHero from './home-hero'

const Site = styled.div`
  background: white;
  min-height: 100vh;
  display: grid;
  grid:
    auto-flow minmax(4em, auto) 1fr minmax(1em, auto) / 2em 1fr minmax(
      auto,
      60em
    )
    1fr 2em;
`

const SiteHeader = styled.header`
  color: black;
  grid-column: span 5;
  grid-row: 1;
`

const SiteMain = styled.main`
  background: white;
  grid-column: span 5;
`

const SiteFooter = styled.footer`
  grid-column: span 5;
  background-color: #433056;
  color: #fff;
  padding: 0;
`

const FooterBottom = styled.div`
  padding: 1.6vw 3vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.08);
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 11px;
  line-height: 16px;

  @media (max-width: 991px) {
    padding: 5vw 3vw;
  }
`
const Layout = ({ location, children, header }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pathname = location.pathname
  const isRootPath = pathname === rootPath
  return (
    <>
      <Site>
        <Seo />
        <SiteHeader role="banner">
          <Nav />
          {isRootPath ? (
            <HomeHero />
          ) : (
            // pass both pathname or whatever

            <PageHero header={header} />
          )}
        </SiteHeader>
        <SiteMain role="main">{children}</SiteMain>
        <SiteFooter role="contentinfo">
          <Footer />
          <FooterBottom>
            Handcrafted by © Audrey Klammer - {new Date().getFullYear()}
          </FooterBottom>
        </SiteFooter>
      </Site>
    </>
  )
  // }
}

export default Layout
