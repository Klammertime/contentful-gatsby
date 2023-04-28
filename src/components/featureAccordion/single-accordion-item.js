import React, { useState } from 'react'
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import styled from 'styled-components'

const AccordionItemContainer = styled.div`
  margin-bottom: 4px;
  background-color: #f4f4f4;
  border-radius: var(--radius);

  p {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 42px 20px 47px;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 19px 13px;
  }

  .title-container {
    display: flex;
    align-items: center;
    color: #363636;
    font-weight: 400;
    font-size: 0.875rem;
    font-family: Inter, sans-serif;
    line-height: 1.6;

    h4 {
      margin-left: 18px;
      font-weight: 500;
      font-size: 14px;
    }
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
  color: var(--medium-grey);
  background: transparent;
  border: none;
  cursor: pointer;
`
const SingleAccordionItem = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <AccordionItemContainer>
      <header>
        <div className="title-container">
          <AiOutlineCheck />
          <h4>{title}</h4>
        </div>
        <Btn onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineUp /> : <AiOutlineDown />}
        </Btn>
      </header>
      {showInfo && <p>{info}</p>}
    </AccordionItemContainer>
  )
}

export default SingleAccordionItem
