import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

const FooterGrid = styled.footer`
  max-width: 100%;
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

const FooterNav = styled.nav`
  display: flex;
  align-self: start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
  @media (max-width: 479px) {
    margin-right: 0;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 500;
  overflow: hidden;
  margin: 8px 3vw 8px 0;
  padding: 3px 0;
  max-width: 100%;
  display: inline-block;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
  @media (max-width: 767px) {
    margin-right: 28px;
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
  display: flex;
  padding: 6px 0;
  align-items: center;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 991px) {
    flex-direction: row;
    margin-right: 20px;
  }
`

const StyledHeader = styled.h3`
  margin: 0 0 12px 0;
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`

const FooterContactText = styled.div`
  padding: 0;
  margin-bottom: 12px;
`

const FooterContact = styled.div`
  padding: 8px 0;
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
    <FooterGrid>
      <FooterNav>
        <StyledLink className="footer-nav-link" to="/">
          Home
        </StyledLink>
        <StyledLink className="footer-nav-link" to="/portfolio">
          Portfolio
        </StyledLink>
        <StyledLink className="footer-nav-link" to="/about">
          About
        </StyledLink>
        <StyledLink className="footer-nav-link" to="/blog">
          Blog
        </StyledLink>
        <StyledLink className="footer-nav-link" to="/contact">
          Contact
        </StyledLink>
      </FooterNav>

      <FooterContact>
        <StyledHeader> Let's work together</StyledHeader>
        <FooterContactText>
          Have a project in mind? Don’t hesitate to contact me.
        </FooterContactText>
      </FooterContact>

      <FooterLinks>
        <StyledFooterLinks>
          <SocialIcon
            bgColor="white"
            style={{ height: 20, width: 20, marginRight: '12px' }}
            url={twitter}
            target="_blank"
            rel="noopener noreferrer"
          />
          Twitter
        </StyledFooterLinks>
        <StyledFooterLinks>
          <SocialIcon
            bgColor="white"
            style={{ height: 20, width: 20, marginRight: '12px' }}
            target="_blank"
            url={github}
            rel="noopener noreferrer"
          />
          GitHub
        </StyledFooterLinks>
        <StyledFooterLinks>
          <SocialIcon
            bgColor="white"
            style={{ height: 20, width: 20, marginRight: '12px' }}
            url={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          />
          LinkedIn
        </StyledFooterLinks>
      </FooterLinks>
    </FooterGrid>
  )
}

export default Footer
