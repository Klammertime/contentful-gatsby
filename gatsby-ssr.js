import * as React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Slender-PK3qE.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="slenderFont"
    />,
  ])
}
