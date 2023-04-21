import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>
const Bullets = ({ children }) => <li>{children}</li>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.UL_LIST]: (node, children) => <Bullets>{children}</Bullets>,
  },
}

// function RichText({ data }) {
//   const { bodyRichText } = data.contentfulBlogPost
//   return <div>{bodyRichText && renderRichText(bodyRichText, options)}</div>
// }

function GenericRichText({ data1, richTextLabel }) {
  let raw = data1 && richTextLabel ? data1[richTextLabel] : data1
  if (data1) {
    return <div>{data1 && renderRichText(raw, options)}</div>
  } else {
    return <></>
  }
}

export default GenericRichText
