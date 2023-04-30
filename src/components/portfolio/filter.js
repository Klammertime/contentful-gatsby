import React, { useState } from 'react'
import styled from 'styled-components'
import Section from '../ui/section'
import PortfolioCard from './portfolio-card'

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 112px;
  padding: 8px 0;
  @media screen and (max-width: 991px) {
    margin-bottom: 64px;
  }
  @media screen and (max-width: 479px) {
    margin-bottom: 48px;
  }

  .filter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 16px;
    padding: 4px 0;
    overflow: hidden;
    color: var(--black);
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: var(--transition);

    span::first-letter {
      text-transform: uppercase;
    }
  }

  .active {
    color: var(--primary);
  }
`
const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  margin: 0;
  padding: 0;
`

const CardGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media screen and (max-width: 991px) {
    grid-row-gap: 60px;
    grid-column-gap: 32px;
  }

  @media screen and (max-width: 479px) {
    grid-row-gap: 41px;
    grid-template-columns: 1fr;
  }
`

function Filter({ posts }) {
  const allCategories = [
    'all',
    ...new Set(posts.map((item) => item.singleCategory)),
  ]
  const [portfolioMenuItems, setMenuItems] = useState(posts)
  const [categories, setCategories] = useState(allCategories)
  const [isCurrent, setCurrent] = useState('all')
  const filterItems = (category) => {
    setCurrent(category)
    if (category === 'all') {
      setMenuItems(posts)
      return
    }
    const newItems = posts.filter((item) => item.singleCategory === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <Section noPadding>
        <BtnContainer>
          {categories.map((category) => {
            return (
              <FilterBtn
                className={`${
                  isCurrent === category ? 'filter-btn active' : 'filter-btn'
                }`}
                key={category}
                onClick={() => filterItems(category)}
              >
                <span>{category}</span>
              </FilterBtn>
            )
          })}
        </BtnContainer>
      </Section>
      <CardGrid>
        {portfolioMenuItems.map((menuItem) => {
          return <PortfolioCard small key={menuItem.id} cardInfo={menuItem} />
        })}
      </CardGrid>
    </>
  )
}

export default Filter
