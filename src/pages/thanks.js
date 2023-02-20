import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px 32px;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
`

const ThanksPage = ({ location }) => {
  return (
    <Layout header="Contact" location={location}>
      <StyledSection>
        <h1>Thank you!</h1>
        <p>Your form was successfully submitted.</p>
      </StyledSection>
    </Layout>
  )
}
export default ThanksPage
