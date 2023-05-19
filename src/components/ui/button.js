import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 48px;
  margin-top: 16px;
  padding: 13px 24px;
  color: var(--white);
  font-weight: var(--bold);
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
const Button = ({ children, href, download, type }) => {
  return (
    <StyledButton type={type} href={href} download={download}>
      {children}
    </StyledButton>
  )
}

export default Button
