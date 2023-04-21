import React, { useState } from 'react'
import styled from 'styled-components'
import Link from '../ui/link'
import Section from '../ui/section'
import PortfolioCard from './portfolio-card'

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 112px;

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
  }

  .active {
    color: var(--primary);
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media screen and (max-width: 991px) {
    grid-row-gap: 60px;
    grid-column-gap: 32px;
  }

  @media screen and (max-width: 479px) {
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
              <Link
                type="button"
                className={`${
                  isCurrent === category ? 'filter-btn active' : 'filter-btn'
                }`}
                key={category}
                onClick={() => filterItems(category)}
              >
                {category}
              </Link>
            )
          })}
        </BtnContainer>
      </Section>
      <CardGrid>
        {portfolioMenuItems.map((menuItem) => {
          return <PortfolioCard key={menuItem.id} card1={menuItem} />
        })}
      </CardGrid>
    </>
  )
}

export default Filter
