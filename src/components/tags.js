import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`
  display: inline-block;
  margin-top: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 2px 11px;
  border-radius: 32px;
  background-color: var(--swatch_401ecef8);
  transition-property: background-color, color;
  transition-duration: 200ms, 200ms;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94),
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: var(--swatch_a5267f7d);
  font-size: 11px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
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
