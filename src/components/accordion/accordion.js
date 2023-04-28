import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 1rem 2rem;
  width: 90vw;
  max-width: 920px;
  margin: 5rem auto;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: var(--radius);
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
`

function Accordion() {
  const [questions, setQuestions] = useState(data)
  return (
    <Container>
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          )
        })}
      </section>
    </Container>
  )
}

export default Accordion
