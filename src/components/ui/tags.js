import React from 'react'
import styled from 'styled-components'
import Tag from './tag'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <Wrapper>
      {tags.map((tagText) => (
        <Tag>{tagText}</Tag>
      ))}
    </Wrapper>
  )

export default Tags
