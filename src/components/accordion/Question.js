import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'

const QuestionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  border-radius: var(--radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Btn = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  color: var(--clr-red-special);
  background: transparent;
  background: var(--clr-grey-special);
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;
`
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <QuestionContainer>
      <header>
        <h4>{title}</h4>
        <Btn onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Btn>
      </header>
      {showInfo && <p>{info}</p>}
    </QuestionContainer>
  )
}

export default Question
