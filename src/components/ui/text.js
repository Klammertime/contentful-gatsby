import React from 'react'
import styled, { css } from 'styled-components'
//postcss-styled-components-disable-next-line
const StyledText = styled.h2`
  font-weight: var(--bold);
  letter-spacing: normal;
  line-height: var(--default);
  font-family: var(--font-sans);

  // -------Variable key--------
  //--fontSize-root: 17px;
  //--text-xxs: 11px;
  //--text-xs: 13px;
  //--text-sm: 15px;
  //--text-md: 20px;
  //--text-lg: 24px;
  //--text-xl: 36px;

  //--------font-weight--------
  //--body: 400;
  //--medium: 500;
  //--semibold: 600;
  //--bold: 700;
  //--extrabold: 800;
  //--heavy: 900;

  /* line-height */
  //--solid: 1;
  //--dense: 1.3;
  //--default: 1.3;
  //--looser: 1.4;
  //--loose: 1.6;

  ${(props) => {
    switch (props.variant) {
      case 'xl':
        // commonly H1
        return css`
          font-size: var(--text-xl);
          color: var(--black);
        `
      case 'large':
        // commonly H2
        return css`
          font-size: var(--text-xl);
          color: var(--black);
        `
      case 'medium':
        // commonly H3
        return css`
          font-size: var(--text-lg);
          color: var(--black);
        `
      case 'small':
        // commonly H4
        return css`
          font-size: var(--text-md);
          line-height: var(--looser);
        `
      case 'xs':
        // bullets
        return css`
          font-weight: var(--medium);
          font-size: var(--text-xs);
          line-height: var(--loose);
        `
      case 'label':
        return css`
          font-weight: var(--semibold);
          font-size: var(--text-xxs);
          line-height: var(--looser);
          letter-spacing: 0.8px;
          text-transform: uppercase;
        `
      case 'body':
        return css`
          font-size: var(--text-sm);
          line-height: var(--loose);
          font-weight: var(--body);
        `
      case 'textGrey':
        return css`
          font-weight: var(--body);
          font-size: var(--text-sm);
          line-height: var(--loose);
          color: var(--grey);
        `

      case 'breadCrumb':
        return css`
          margin: 0;
          color: var(--grey);
          font-weight: var(--medium);
          font-size: var(--text-xxs);
          line-height: var(--looser);
          text-transform: uppercase;
        `

      case 'tag':
        return css`
          text-transform: uppercase;
          font-weight: var(--semibold);
          font-size: var(--text-xxs);
          line-height: 20px;
          background-color: transparent;
        `

      case 'tagLower':
        return css`
          font-size: var(--text-xxs);
          line-height: var(--dense);
          font-weight: var(--semibold);
        `

      case 'smallLink':
        return css`
          font-size: var(--text-xs);
          font-weight: var(--semibold);
          line-height: var(--dense);
          color: var(--black);
        `

      case 'dynamicText':
        return css`
          margin-top: 4px;
          font-size: var(--text-md);
          line-height: var(--loose);
          font-weight: var(--medium);
          @media screen and (max-width: var(--md)) {
            font-size: var(--text-sm);
          }
          @media screen and (max-width: var(--tiny)) {
            font-size: var(--fontSize-root);
          }
        `

      default:
        return css``
    }
  }}
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return css`
          color: var(--primary);
        `
      case 'black':
        return css`
          color: var(--black);
        `
      case 'grey':
        return css`
          color: var(--grey);
        `
      case 'mediumGrey':
        return css`
          color: var(--medium-grey);
        `
      case 'white':
        return css`
          color: var(--white);
        `
      default:
        return css``
    }
  }}

  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
`

const Text = ({ children, asType, variant, color, center, margin }) => {
  return (
    <StyledText
      variant={variant}
      as={asType}
      center={center}
      margin={margin}
      color={color}
    >
      {children}
    </StyledText>
  )
}

export default Text
