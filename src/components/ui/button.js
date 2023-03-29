import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  margin-top: 16px;
  color: white;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 13px 24px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;
  background-color: var(--primary);
  border-radius: 24px;
  text-align: center;
  border: 0 none;
  cursor: pointer;
  transition: color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    background-color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    border-color 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: var(--dark-purple);
    color: var(--white);
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
