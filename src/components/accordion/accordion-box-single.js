import React, { useState } from 'react'
import styled from 'styled-components'

const AccordionBox = styled.section`
  .showMoreBtn {
    padding: 0;
    color: var(--grey);
    font-weight: 600;
    background: transparent;
    border: 0;
    cursor: pointer;
    appearance: none;
  }
`

function AccordionBoxSingle({ newList, title }) {
  const showImmediately = newList?.slice(0, 7)
  const showLater = newList?.slice(7)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <AccordionBox>
      <article>
        <h4>{title}</h4>
        <ul>
          {showImmediately.map((v, i) => {
            return (
              <li key={i} className="bullet">
                {v}
              </li>
            )
          })}

          {showInfo ? (
            ''
          ) : (
            <li>
              <button
                className="showMoreBtn"
                onClick={() => setShowInfo(!showInfo)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path>
                </svg>
                Show More
              </button>
            </li>
          )}

          {showInfo && (
            <>
              {showLater.map((v, i) => {
                return (
                  <li key={i} className="bullet">
                    {v}
                  </li>
                )
              })}
              <li>
                <button
                  className="showMoreBtn"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path>
                  </svg>
                  Show Less
                </button>
              </li>
            </>
          )}
        </ul>
      </article>
    </AccordionBox>
  )
}

export default AccordionBoxSingle
