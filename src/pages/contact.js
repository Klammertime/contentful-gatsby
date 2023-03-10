import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contact-form'
import Section from '../components/section'

const ContactWrapper = styled.div`
  position: relative;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column: 2/12;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 64px 30px;
  width: 100%;
  perspective: 2000px;
`
const ContactPage = ({ location, data }) => {
  const { pageHeader, formDescription, formHeader } = data.contentfulContactPage

  return (
    <Layout
      header="Contact"
      location={location}
      pageDescription={pageHeader.pageHeader}
    >
      <Seo title="contact" />
      <Section color="white">
        <ContactWrapper>
          <ContactForm
            formDescription={formDescription.formDescription}
            formHeader={formHeader.formHeader}
          />
        </ContactWrapper>
      </Section>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  {
    contentfulContactPage {
      formHeader {
        formHeader
      }
      formDescription {
        formDescription
      }
      pageHeader {
        pageHeader
      }
      title
    }
  }
`
