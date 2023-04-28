import React, { useState } from 'react'
import data from './data3'
import SingleQuestion from './single-accordion-item'
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
    padding: 0;
  }
`

function FeatureAccordion() {
  const [features, setFeature] = useState(data)
  return (
    <Container>
      <section className="info">
        {features.map((feature) => {
          return <SingleQuestion key={feature.id} {...feature}></SingleQuestion>
        })}
      </section>
    </Container>
  )
}

export default FeatureAccordion
