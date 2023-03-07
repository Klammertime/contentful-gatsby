import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  position: relative;
  z-index: 3;
  padding-top: ${(props) =>
    props.noPaddingTop || props.noPadding ? '0' : '128px'};
  padding-bottom: ${(props) => (props.noPadding ? '0' : '128px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : '#f1ede9')};

  //background-color: var(--swatch_f4238f91);

  //small
  @media screen and (max-width: 767px) {
    padding-top: ${(props) =>
      props.noPaddingTop || props.noPadding ? '0' : '64px'};
    padding-bottom: ${(props) => (props.noPadding ? '0' : '64px')};
  }

  //medium
  @media screen and (max-width: 991px) {
    padding-top: ${(props) =>
      props.noPaddingTop || props.noPadding ? '0' : '80px'};
    padding-bottom: ${(props) => (props.noPadding ? '0' : '80px')};
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1234px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 32px;
  padding-left: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  @media screen and (max-width: 991px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`

const Section = ({ children, noPaddingTop, noPadding, color }) => {
  return (
    <StyledSection
      color={color}
      noPaddingTop={noPaddingTop}
      noPadding={noPadding}
    >
      <Wrapper>{children}</Wrapper>
    </StyledSection>
  )
}
export default Section
