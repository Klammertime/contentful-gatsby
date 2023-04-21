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
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 6px;
  background-color: #f96a4c;
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(249, 106, 76, 0.2);
`

const Item = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 32px;
  font-weight: 500;
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
          {items.map((val) => {
            return (
              <Item>
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
