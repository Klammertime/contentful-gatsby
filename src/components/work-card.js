import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`

const CardPreview = styled.a`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-bottom: 5%;
  padding-top: 50%;
  padding-bottom: 50%;
  justify-content: center;
  align-items: center;
  transition-property: transform, box-shadow;
  transition-duration: 400ms, 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94),
    cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: none;
    transform: none;
  }
`

const HoverCircle = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--swatch_f4238f91);
  //background-image: @img_63f2dec93f4efb171a53a4c2;
  background-position: 50%;
  background-size: 24px;
  background-repeat: no-repeat;

  @media (max-width: var(--mq-medium)) {
    display: none;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  display: none;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 50%;
  background-color: white;
`

const CardDescription = styled.p`
  margin-top: -4px;
  color: var(--swatch_c450d3ea);
  font-size: 15px;
  line-height: 24px;
`

const BGImage = styled.img`
  position: relative;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background-image: url('http://placekitten.com/g/200/300');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`

// .bg-image.absolute {
//   position: absolute;
// }
const WorkCard = ({}) => {
  return (
    <Card>
      <CardPreview>
        <HoverCircle />
        <Overlay> </Overlay>
        <BGImage />
      </CardPreview>
      <h3></h3>
      <CardDescription></CardDescription>
    </Card>
  )
}

export default WorkCard
