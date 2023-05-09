import React, { useState } from 'react'
import SingleAccordionItem from './single-accordion-item'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 1rem 2rem;
  width: 100%;
  max-width: 920px;
  margin: 0 auto 1rem 0;
  padding: 0 0 2.5rem 2rem;
  background: #fff;
  border-radius: var(--radius);

  @media screen and (max-width: 990px) {
    max-width: 100%;
    padding: 0;
  }
`

function FeatureAccordion({ featuresList }) {
  const [features, setFeature] = useState(featuresList)
  return (
    <Container>
      <section className="info">
        {features.map((feature, index) => {
          return (
            <SingleAccordionItem key={index} {...feature}></SingleAccordionItem>
          )
        })}
      </section>
    </Container>
  )
}

export default FeatureAccordion
