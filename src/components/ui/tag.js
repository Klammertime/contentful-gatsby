import React from 'react'
import styled from 'styled-components'
import Text from './text'

const TagContainer = styled.div`
  display: inline-block;
  padding: 2px 11px;
  color: var(---black);
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: #eaeaea;
  border: 1px solid #ededed;
  border-radius: 32px;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94),
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 200ms, 200ms;
  transition-property: background-color, color;

  span {
    text-transform: none;
  }

  &:hover {
    color: var(--white);
    background-color: var(--primary);
  }
`

const Tag = ({ children }) => (
  <TagContainer>
    <Text variant="tag" asType="span">
      {children}
    </Text>
  </TagContainer>
)

export default Tag
