import React from 'react'
import styled from 'styled-components'
import GridSection from './grid-section'
import Section from './section'

const Date = styled.div`
  grid-area: Date;
  justify-self: stretch;
  width: 120px;
  padding: 6px 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: right;
  @media screen and (max-width: 479px) {
    padding: 5px 0;
    text-align: left;
  }

  @media screen and (max-width: 767px) {
    width: 90px;
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
  background-color: #e4e8ed;
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
  background-color: #f96a4c;
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(249, 106, 76, 0.2), 0 0 0 12px #fff;
`

const Job = styled.div`
  grid-area: Job;
  padding-bottom: 48px;
`

const JobHeading = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
`

const JobDescription = styled.div`
  margin-bottom: 12px;
  color: #666d7a;
  font-size: 13px;
  line-height: 1.5;
  @media screen and (max-width: 991px) {
    padding-right: 10%;
  }
  @media screen and (max-width: 767px) {
    & > ul {
      padding-left: 1em;
    }
  }
`

const TagBadge = styled.div`
  display: inline-block;
  margin: 6px 6px 6px 0;
  padding: 2px 11px;
  color: #151515;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.2;
  text-transform: uppercase;
  background-color: #f2f3f5;
  border-radius: 32px;
  transition: background-color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`

const JobBadge = styled(TagBadge)`
  margin: 6px 0;
  cursor: default;
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
    grid-column-start: 2;
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

  @media screen and (max-width: 479px) {
    grid-row-gap: 8px;
    grid-template-areas:
      'Timeline Date Date'
      'Timeline Job Job';
    grid-template-rows: auto auto;
  }

  @media screen and (max-width: 767px) {
    grid-column-gap: 32px;
    padding-left: 8px;
  }
`

const StyledHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
`
const StyledText = styled.div`
  color: #666d7a;
`

const DownloadButton = styled.a`
  display: inline-block;
  height: 48px;
  margin-top: 16px;
  padding: 11px 24px;
  color: white;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.6;
  text-decoration: none;
  background-color: #f83f5a;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #ec2f4b;
  }
`

const Career = ({ jobHistoryJson, resume }) => {
  return (
    <Section color="white">
      <GridSection>
        <SectionLeft>
          <StyledHeader>Work History</StyledHeader>
          <StyledText>
            Versatile front end engineer with user experience knowledge and
            design sensibility, drawing from years of experience working
            directly with customers in marketing.
          </StyledText>
          <DownloadButton href={resume} download>
            Download Resume
          </DownloadButton>
        </SectionLeft>
        <SectionRight>
          {jobHistoryJson.map((job, index) => (
            <CareerBlock key={`${job.company}${index}`}>
              <Date>{job.date}</Date>
              <Timeline>
                <TimelineDot></TimelineDot>
              </Timeline>
              <Job>
                <JobHeading>
                  {job.company} - {job.city}
                </JobHeading>
                <JobDescription>
                  <ul>
                    {job.bullets.map((bullet, index) => (
                      <li key={`${job.jobTitle}${index}`}>{bullet}</li>
                    ))}
                  </ul>
                </JobDescription>
                <JobBadge>{job.jobTitle}</JobBadge>
              </Job>
            </CareerBlock>
          ))}
        </SectionRight>
      </GridSection>
    </Section>
  )
}

export default Career
