import React from 'react'
import styled from 'styled-components'
import GridSection from './ui/grid-section'
import Section from './ui/section'
import Text from './ui/text'
import { useAboutData } from '../hooks/use-about-data'
import { useResumeCompanyData } from '../hooks/use-resume-company-data'
import GenericRichText from './ui/generic-rich-text'
import Tag from './ui/tag'
import Link from './ui/link'

const Date = styled.div`
  grid-area: Date;
  justify-self: stretch;
  width: 120px;
  padding: 6px 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: right;

  @media screen and (max-width: 767px) {
    width: 90px;
  }

  @media screen and (max-width: 479px) {
    padding: 5px 0;
    text-align: left;
  }
`

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: Timeline;
  align-items: center;
  justify-self: center;
  width: 2px;
  background-color: var(--border);
`

const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  left: auto;
  z-index: 2;
  width: 8px;
  height: 8px;
  margin: 12px 0 0 0;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(249, 106, 76, 0.2), 0 0 0 12px #fff;
`

const Job = styled.div`
  grid-area: Job;
  padding-bottom: 48px;
`

const JobHeading = styled.h3`
  margin: 0 0 8px 0;
  font-weight: var(--bold);
  font-size: 24px;
  line-height: 1.3;
`

const JobDescription = styled.div`
  margin-bottom: 12px;
  color: var(--grey);
  font-size: 13px;
  line-height: 1.5;

  & > ul {
    padding-left: 1em;
  }

  @media screen and (max-width: 991px) {
    padding-right: 10%;
  }
  @media screen and (max-width: 767px) {
    & > ul {
      padding-left: 1em;
    }
  }
`

const SectionLeft = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 4;
  grid-column-end: span 4;
  align-self: start;
  @media screen and (max-width: 991px) {
    grid-row-start: 1;
    grid-column: 1/11;
    margin-bottom: 30px;
  }
`

const SectionRight = styled.div`
  grid-row: 1/2;
  grid-column: 6/13;
  @media screen and (max-width: 991px) {
    grid-row-start: 2;
    grid-column: 1 / span 7;
  }
`

const CareerBlock = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-areas: 'Date Timeline Job';
  grid-template-rows: auto;
  grid-template-columns: auto minmax(32px, auto) 1fr;

  @media screen and (max-width: 767px) {
    grid-column-gap: 32px;
    padding-left: 8px;
  }

  @media screen and (max-width: 479px) {
    grid-row-gap: 8px;
    grid-template-areas:
      'Timeline Date Date'
      'Timeline Job Job';
    grid-template-rows: auto auto;
  }

  &:last-of-type {
    .timeline {
      background-color: var(--white);
    }
  }
`

const Career = () => {
  const { resume, resumeSectionHeader, resumeSummary } = useAboutData()
  const { collectionItems } = useResumeCompanyData()
  return (
    <Section noPaddingTop color="white">
      <GridSection>
        <SectionLeft>
          <Text margin="0 0 16px 0" asType="h2" variant="large">
            {resumeSectionHeader}
          </Text>
          <Text color="grey" variant="textGrey" asType="p">
            {resumeSummary?.resumeSummary}
          </Text>
          <Link variant="button" to={resume?.url}>
            Download Resume
          </Link>
        </SectionLeft>
        <SectionRight>
          {collectionItems.map((job) => {
            const { company, dateRange, location, jobTitle, bullets, id } = job
            return (
              <CareerBlock key={id}>
                <Date>{dateRange}</Date>
                <Timeline className="timeline">
                  <TimelineDot />
                </Timeline>
                <Job>
                  <JobHeading>
                    {company} - {location}
                  </JobHeading>
                  <JobDescription>
                    <GenericRichText data1={bullets} />
                  </JobDescription>
                  {jobTitle && <Tag>{jobTitle}</Tag>}
                </Job>
              </CareerBlock>
            )
          })}
        </SectionRight>
      </GridSection>
    </Section>
  )
}

export default Career
