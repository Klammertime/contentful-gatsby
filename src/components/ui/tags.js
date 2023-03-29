import React from 'react'
import styled from 'styled-components'

const Tag = styled.span`
  display: inline-block;
  padding: 2px 11px;
  background-color: var(--tag-grey);
  border-radius: 32px;
  color: var(---black);
  margin: 6px 0 0 0;
  font-size: 11px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: default;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94),
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 200ms, 200ms;
  transition-property: background-color, color;

  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }
`

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
`

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <TagContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  )

export default Tags
