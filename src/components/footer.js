import React from 'react'
import Container from './container'

import styled from 'styled-components'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

const FooterGrid = styled.nav`
  max-width: 100vw;
  margin: 0 auto;
  display: grid;
  padding: 3vw;
  grid-template-columns: 1fr auto auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 8vw;
  grid-row-gap: 16px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 4vw;
    grid-row-gap: 40px;
    grid-template-rows: auto auto auto;
  }
`

const FooterNav = styled.div`
  display: flex;
  align-self: start;
  flex-direction: row;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 17px;
  line-height: 24px;
  margin-right: 3vw;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
`

const FooterLinks = styled.div`
  display: flex;
  padding-right: 4vw;
  flex-direction: column;
  align-self: start;
  @media (max-width: 991px) {
    flex-direction: row;
  }
`

const StyledFooterLinks = styled.div`
  color: #fff;
  font: normal 600 13px/10px Inter, sans-serif;
  margin: 6px 0;
  padding: 6px 0;
  @media (max-width: 991px) {
    flex-direction: row;
    margin-right: 20px;
  }
`

const StyledHeader = styled.h3`
  margin: 0 0 12px 0;
  color: white;
`

const StyledText = styled.div`
  padding: 0;
  margin-bottom: 12px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { twitter, github, linkedin } = data.site.siteMetadata.social

  return (
    // <Container as="footer">
    <FooterGrid>
      <FooterNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        {/*<StyledLink to="/about">About</StyledLink>*/}
        <StyledLink to="/blog">Blog</StyledLink>
        {/*<StyledLink to="/contact">Contact</StyledLink>*/}
      </FooterNav>

      <div>
        <StyledHeader> Let's work together</StyledHeader>
        <StyledText>Have a project in mind? Don’t hesitate to contact me.</StyledText>
      </div>

      <FooterLinks>
        <StyledFooterLinks>
          <SocialIcon
            bgColor="white"
            style={{ height: 20, width: 20, marginRight: '6px' }}
            url={twitter}
            target="_blank"
            rel="noopener noreferrer"
          />
          Twitter
        </StyledFooterLinks>
        <StyledFooterLinks>
          <SocialIcon
            bgColor="white"
            style={{ height: 20, width: 20, marginRight: '6px' }}
            target="_blank"
            url={github}
            rel="noopener noreferrer"
          />
          GitHub
        </StyledFooterLinks>
        <StyledFooterLinks>
          <SocialIcon
            bgColor="white"
            style={{ height: 20, width: 20, marginRight: '6px' }}
            url={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          />
          LinkedIn
        </StyledFooterLinks>
      </FooterLinks>
    </FooterGrid>
    // </Container>
  )
}

export default Footer
