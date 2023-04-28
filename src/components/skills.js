import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { useAboutData } from '../hooks/use-about-data'
import Section from './ui/section'
import Text from './ui/text'

const SkillCircle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin: 10px;
  text-align: center;
  background-color: var(--tag-grey);
  border-radius: 50%;
  cursor: pointer;
  @media screen and (max-width: 479px) {
    margin: 12px;
  }
`

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-row: 3/4;
  grid-column-start: span 12;
  align-items: center;
  justify-content: center;
  margin: -10px auto 0 auto;
`

const Skills = () => {
  const { fullSkillsList } = useAboutData()
  return (
    <Section
      noPaddingTop
      color="white"
      textLabel="professional"
      heading="My Current Skill Set"
    >
      <SkillsRow>
        {fullSkillsList.skillLogos.map((val) => (
          <SkillCircle key={val.id}>
            <GatsbyImage
              image={val.gatsbyImageData}
              imgStyle={{
                width: '44px',
              }}
              alt={val.title || ''}
            />
            <Text variant="tagLower" margin="8px 0 0 0">
              {val.title}
            </Text>
          </SkillCircle>
        ))}
      </SkillsRow>
    </Section>
  )
}

export default Skills
