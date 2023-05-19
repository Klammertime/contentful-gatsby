import React from 'react'
import styled from 'styled-components'

const Bullet = styled.div`
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  z-index: 2;
  width: 8px;
  height: 8px;
  margin: 15px 20px 0 6px;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(249, 106, 76, 0.2);
`

const Item = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 8px 0 8px 32px;
  font-weight: var(--medium);
  font-size: 17px;
  list-style-type: none;
`
const List = styled.ul`
  margin-top: 4px;
  padding-left: 0;
`

const ListItems = ({ items }) => {
  return (
    <>
      {items && (
        <List>
          {items.map((val, ind) => {
            return (
              <Item key={ind}>
                <Bullet />
                <span>{val}</span>
              </Item>
            )
          })}
        </List>
      )}
    </>
  )
}

export default ListItems
