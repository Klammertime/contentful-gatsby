import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import TestimonialCard from '../components/testimonial-card'
import { useTestimonialData } from '../hooks/use-testimonials-data'
import Section from '../components/ui/section'

const List = styled.section`
  width: 100%;
  margin-bottom: 64px;
  padding-right: 8px;
  padding-left: 8px;
  column-count: 2;
  @media (max-width: 991px) {
    column-count: 1;
  }
`
const TestimonialsPage = ({ location }) => {
  const { collectionItems } = useTestimonialData()
  return (
    <Layout header="Testimonials" location={location}>
      <Seo title="testimonials" />
      <Section>
        <List>
          {collectionItems.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </List>
      </Section>
    </Layout>
  )
}

export default TestimonialsPage
