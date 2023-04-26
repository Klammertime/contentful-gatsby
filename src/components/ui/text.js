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

  //font-size: 15px;
  //line-height: 24px;
  //--loose: 1.6;

  ${(props) => {
    switch (props.variant) {
      case 'xl':
        // commonly H1
        return css`
          color: var(--black);
          font-size: var(--text-xl);

          @media screen and (max-width: 991px) {
            font-size: 32px;
            line-height: 40px;
          }
        `
      case 'large':
        // commonly H2
        return css`
          color: var(--black);
          font-size: var(--text-xl);
          @media screen and (max-width: 991px) {
            font-size: 32px;
            line-height: 40px;
          }

          @media screen and (max-width: 767px) {
            font-size: 28px;
            line-height: 36px;
          }
        `

      case 'medium':
        // commonly H3
        return css`
          margin-top: 0;
          margin-bottom: 4px;
          color: var(--black);
          font-size: var(--text-lg);

          @media screen and (max-width: 991px) {
            font-size: 17px;
            line-height: 24px;
          }

          @media screen and (max-width: 767px) {
            font-size: 15px;
            line-height: 20px;
          }

          @media screen and (max-width: 479px) {
            font-size: 17px;
            line-height: 24px;
          }
        `
      case 'small':
        // commonly H4
        return css`
          font-size: var(--text-md);
          line-height: var(--looser);

          @media screen and (max-width: 991px) {
            font-size: 18px;
            line-height: 24px;
          }
        `
      case 'xs':
        // bullets
        return css`
          font-weight: 600;
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
      case 'bulletText':
        return css`
          font-weight: var(--body);
          font-size: var(--text-sm);
          line-height: var(--loose);
        `

      case 'body':
        return css`
          font-weight: var(--body);
          font-size: var(--text-sm);
          line-height: var(--loose);
        `

      case 'textGrey':
        return css`
          color: var(--grey);
          font-weight: var(--body);
          font-size: var(--text-sm);
          line-height: var(--loose);
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
          font-weight: var(--semibold);
          font-size: var(--text-xxs);
          line-height: 20px;
          text-transform: uppercase;
          background-color: transparent;
        `

      case 'tagLower':
        return css`
          font-weight: var(--semibold);
          font-size: var(--text-xxs);
          line-height: var(--dense);
        `

      case 'smallLink':
        return css`
          color: var(--black);
          font-weight: var(--semibold);
          font-size: var(--text-xs);
          line-height: var(--dense);
        `

      case 'dynamicText':
        return css`
          margin-top: 4px;
          font-weight: var(--medium);
          font-size: var(--text-md);
          line-height: var(--loose);
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
