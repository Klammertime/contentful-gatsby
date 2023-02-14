import React from 'react'
import styled from 'styled-components'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Nav from './nav'
import Footer from './footer'

const Site = styled.div`
  background: white;
  min-height: 100vh;
  display: grid;
  grid:
    auto-flow minmax(4em, auto) 1fr minmax(1em, auto) / 2em 1fr minmax(auto, 60em)
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
  background-color: rgba(0, 0, 0, 0.08);
  padding: 1.6vw 3vw;
  @media (max-width: 991px) {
    padding: 5vw 3vw;
  }
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Site>
          <Seo />
          <SiteHeader role="banner">
            {/*<Navigation />*/}
            <Nav/>
          </SiteHeader>
          <SiteMain role="main">
            {children}
          </SiteMain>
          <SiteFooter role="contentinfo">
            <Footer />
            <FooterBottom>
              Handcrafted by © Audrey Klammer - {new Date().getFullYear()}
            </FooterBottom>
          </SiteFooter>
        </Site>
      </>
    )
  }
}

export default Template
