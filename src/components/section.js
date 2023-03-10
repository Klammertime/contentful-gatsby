import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  padding-top: ${(props) =>
    props.noPaddingTop || props.noPadding ? '0' : '128px'};
  padding-bottom: ${(props) => (props.noPadding ? '0' : '128px')};
  background-color: ${(props) => (props.color ? props.color : '#f1ede9')};

  @media screen and (max-width: 767px) {
    padding-top: ${(props) =>
      props.noPaddingTop || props.noPadding ? '0' : '64px'};
    padding-bottom: ${(props) => (props.noPadding ? '0' : '64px')};
  }

  @media screen and (max-width: 991px) {
    padding-top: ${(props) =>
      props.noPaddingTop || props.noPadding ? '0' : '80px'};
    padding-bottom: ${(props) => (props.noPadding ? '0' : '80px')};
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 32px;
  background-color: transparent;

  @media screen and (max-width: 991px) {
    padding: 0 16px;
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
