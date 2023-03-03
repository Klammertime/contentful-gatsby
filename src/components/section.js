import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  padding-top: ${(props) =>
    props.noPaddingTop || props.noPadding ? '0' : '128px'};
  padding-bottom: ${(props) => (props.noPadding ? '0' : '128px')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--swatch_f4238f91);

  //small
  @media (max-width: var(--mq-small)) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  //medium
  @media (max-width: var(--mq-medium)) {
    padding: 80px 0;
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

  @media (max-width: var(--mq-medium)) {
    padding-right: 16px;
    padding-left: 16px;
  }
`

const Section = ({ children, noPaddingTop, noPadding }) => {
  return (
    <StyledSection noPaddingTop={noPaddingTop} noPadding={noPadding}>
      <Wrapper>{children}</Wrapper>
    </StyledSection>
  )
}
export default Section
