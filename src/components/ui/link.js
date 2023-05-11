import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const ButtonStyle = styled(GatsbyLink)`
  display: inline-block;
  height: 48px;
  margin-top: 16px;
  padding: 13px 24px;
  color: white;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  background-color: var(--primary);
  border: 0 none;
  border-radius: 24px;
  cursor: pointer;
  transition: color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    background-color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    border-color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    color: var(--white);
    background-color: var(--dark-purple);
    outline: 0;
  }
`

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  variant,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    if (file) {
      return (
        <a href={to} {...other}>
          {children}
        </a>
      )
    }
    return variant === 'button' ? (
      <ButtonStyle
        href={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </ButtonStyle>
    ) : (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return variant === 'button' ? (
    <ButtonStyle href={to} {...other}>
      {children}
    </ButtonStyle>
  ) : (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
