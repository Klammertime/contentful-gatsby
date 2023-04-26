import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import styled from 'styled-components'

const StyledBlockquote = styled.blockquote`
  margin: 24px 0;
  padding: 0 30px;
  font-size: 17px;
  line-height: 24px;
  text-align: left;
  border-left: 2px solid var(--primary);

  p {
    margin: 8px 0;
  }
`

const options = {
  renderMark: {
    // [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => (
      <StyledBlockquote>{children}</StyledBlockquote>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const normalisedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
        },
      })
      return normalisedChildren
    },
  },
}

// TODO use or lose
// function RichText({ data }) {
//   const { bodyRichText } = data.contentfulBlogPost
//   return <div>{bodyRichText && renderRichText(bodyRichText, options)}</div>
// }

function GenericRichText({ data1, richTextLabel }) {
  let raw = data1 && richTextLabel ? data1[richTextLabel] : data1
  if (data1) {
    return <>{data1 && renderRichText(raw, options)}</>
  } else {
    return <></>
  }
}

export default GenericRichText
