import React from 'react'
import styled from 'styled-components'
import Text from './text'

const StyledSection = styled.section`
  display: flex;
  padding-top: ${(props) =>
    props.noPaddingTop || props.noPadding ? '0' : '128px'};
  padding-bottom: ${(props) => (props.noPadding ? '0' : '128px')};

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
  &.grey {
    background-color: #f8f8f8;
  }
  &.offWhite {
    background-color: #f7f8fc;
  }

  &.beige {
    background-color: var(--beige);
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1234px;

  margin: ${(props) => (props.color ? '0' : '0 auto')};
  padding: ${(props) => (props.color ? '0' : '0 32px')};

  @media screen and (max-width: 991px) {
    padding: 0 16px;
  }
`

const HeaderSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 570px;
  margin: 0 auto 64px auto;

  @media screen and (max-width: 767px) {
    margin-bottom: 48px;
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 64px;
  }
`

const Section = ({
  children,
  noPaddingTop,
  noPadding,
  color,
  textLabel,
  heading,
}) => {
  return (
    <StyledSection
      className={color ? `${color}` : ''}
      noPaddingTop={noPaddingTop}
      noPadding={noPadding}
    >
      <Wrapper className={color ? `${color}` : ''}>
        {textLabel && (
          <HeaderSection>
            <Text center color="primary" asType="h3" variant="label">
              {textLabel}
            </Text>
            <Text center asType="h2" variant="large">
              {heading}
            </Text>
          </HeaderSection>
        )}
        <>{children}</>
      </Wrapper>
    </StyledSection>
  )
}
export default Section
