import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contact-form'
import Section from '../components/section'

const ContactWrapper = styled.div`
  grid-column: 2/12;
  position: relative;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  gap: 64px 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
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
