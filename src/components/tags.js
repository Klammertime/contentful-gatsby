import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`
  display: inline-block;
  margin: 6px 6px 6px 0;
  padding: 2px 11px;
  color: var(--swatch_a5267f7d);
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  text-transform: uppercase;
  background-color: var(--swatch_401ecef8);
  border-radius: 32px;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94),
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 200ms, 200ms;
  transition-property: background-color, color;
`

const TagContainer = styled.small`
  display: flex;
  gap: var(--space-md);
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
