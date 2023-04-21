import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import TestimonialCard from '../testimonial-card'

const StyledSection = styled.div`
  .icon {
    margin-top: 1rem;
    color: var(--light-grey);
    font-size: 3rem;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    color: #101828;
    font-size: 1rem;
    background: var(--light-grey);
    background-color: transparent;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.3s linear;
    place-items: center;
  }

  .prev:hover,
  .next:hover {
    background: var(--primary);
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  @media (min-width: 800px) {
    .text {
      max-width: 45em;
      font-weight: 700;
      font-size: 1.875rem;
      font-family: Spacegrotesk, sans-serif;
      line-height: 1.5;
    }
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
  }

  article.activeSlide {
    transform: translateX(0);
    opacity: 1;
  }

  article.lastSlide {
    transform: translateX(-100%);
  }

  article.nextSlide {
    transform: translateX(100%);
  }

  .title {
    margin-bottom: 0.75rem;
    color: var(--grey);
    text-transform: capitalize;
  }

  .section-center {
    position: relative;
    display: flex;
    width: 100%;
    height: 60vh;
    margin: 4rem auto 0 auto;
    overflow: hidden;
    text-align: center;
  }

  .person-img {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    object-fit: cover;
    border: 4px solid var(--light-grey);
    border-radius: 50%;
    box-shadow: var(--dark-shadow);
  }
`

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 48rem;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`

const data = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semioticsDrinking vinegar polaroid street art echo park, actually semioticsDrinking vinegar polaroid street art echo park, actually semioticsDrinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
]

function GenericSlider1({ data1 }) {
  const [people, setPeople] = useState(data1)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = people?.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  return (
    <StyledSection>
      <div className="section-center">
        {people?.map((person, personIndex) => {
          const { id, name, title, text } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <TestimonialCard testimonial={person}></TestimonialCard>
              {/*{partialQuote?.partialQuote && (*/}
              {/*  <TestimonialContent>*/}
              {/*    <p className="text">{partialQuote?.partialQuote}</p>*/}

              {/*    /!*<img src={image} alt={name} className="person-img" />*!/*/}
              {/*    <h4>{name}</h4>*/}
              {/*    <p className="title">{title}</p>*/}
              {/*    /!*<FaQuoteRight className="icon" />*!/*/}
              {/*  </TestimonialContent>*/}
              {/*)}*/}
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </StyledSection>
  )
}

export default GenericSlider1
