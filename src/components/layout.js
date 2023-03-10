import React from 'react'
import styled from 'styled-components'
import './variables.css'
import './global.css'
import './normalize.css'
import Seo from './seo'
import Nav from './nav'
import Footer from './footer'
import PageHero from './page-hero'
import HomeHero from './home-hero'

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Site = styled.div`
  display: grid;
  grid:
    auto-flow minmax(4em, auto) 1fr minmax(1em, auto) / 2em 1fr minmax(
      auto,
      60em
    )
    1fr 2em;
  min-height: 100vh;
  background: white;

  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`

const SiteHeader = styled.header`
  grid-row: 1;
  grid-column: span 5;
  color: black;
`

const SiteMain = styled.main`
  grid-column: span 5;
  background: white;
`

const SiteFooter = styled.footer`
  grid-column: span 5;
  color: #fff;
  background-color: #433056;
`

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 17px 30px;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 11px;
  line-height: 16px;
  background-color: hsla(0, 0%, 0%, 0.08);

  @media (max-width: 991px) {
    padding: 10px;
  }
`
const Layout = ({ location, children, header }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pathname = location.pathname
  const isRootPath = pathname === rootPath
  return (
    <PageWrapper>
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
    </PageWrapper>
  )
}

export default Layout
