import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import Text from './ui/text'
import Link from './ui/link'

const FooterGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 8vw;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto auto;
  padding: 3vw;
  color: var(--white);
  @media (max-width: 991px) {
    grid-row-gap: 40px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    padding: 4vw;
  }
`

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-self: start;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 8px 3vw 8px 0;
  padding: 3px 0;
  font-weight: var(--medium);
  font-size: 17px;
  @media (max-width: 991px) {
    margin-right: 20px;
  }
  @media (max-width: 767px) {
    margin-right: 28px;
  }
`

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-right: 6vw;
  list-style-type: none;

  @media (max-width: 991px) {
    flex-direction: row;
    padding: 0;
  }
`

const StyledFooterLinks = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 0;
  overflow: hidden;
  font-weight: var(--semibold);
  font-size: 13px;
  line-height: 10px;

  @media (max-width: 991px) {
    flex-direction: row;
    margin-right: 20px;
  }
`

const FooterContact = styled.div`
  padding: 8px 0;
  color: var(--white);
`

const Footer = ({ navLinks, socialLinks }) => {
  return (
    <FooterGrid>
      <FooterNav>
        {navLinks.map((nav) => (
          <StyledLink key={nav.label} to={nav.page}>
            {nav.label}
          </StyledLink>
        ))}
      </FooterNav>

      <FooterContact>
        <Text color="white" variant="medium" asType="h3" margin="0 0 12px 0">
          Let's work together
        </Text>
        <Text color="white" variant="body" asType="p">
          Have a project in mind? Don’t hesitate to contact me.
        </Text>
      </FooterContact>

      <FooterLinks>
        {socialLinks.map((social) => (
          <StyledFooterLinks key={social.label}>
            <SocialIcon
              bgColor="white"
              style={{ height: 20, width: 20, marginRight: '12px' }}
              url={social.url}
              rel="noopener noreferrer"
            />
            {social.label}
          </StyledFooterLinks>
        ))}
      </FooterLinks>
    </FooterGrid>
  )
}

export default Footer
