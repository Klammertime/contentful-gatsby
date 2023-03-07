import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'

const ThanksPage = ({ location }) => {
  return (
    <Layout header="Contact" location={location}>
      <Section color="white">
        <h1>Thank you!</h1>
        <p>Your form was successfully submitted.</p>
      </Section>
    </Layout>
  )
}
export default ThanksPage
