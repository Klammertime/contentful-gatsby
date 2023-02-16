import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'
// import downloadFile from '../data/downloads/Audrey_Klammer_Resume.pdf'

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1234px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 32px;
  padding-left: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CareerBlock = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-areas: 'Date Timeline Job';
  grid-template-columns: auto minmax(32px, auto) 1fr;
  grid-template-rows: auto;
`

const Date = styled.div`
  width: 120px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 13px;
  line-height: 20px;
  text-align: right;
  justify-self: stretch;
`

const Timeline = styled.div`
  justify-self: center;
  position: relative;
  display: flex;
  width: 2px;
  flex-direction: column;
  align-items: center;
  background-color: #e4e8ed;
`

const TimelineDot = styled.div`
  position: absolute;
  left: auto;
  top: 0;
  right: auto;
  bottom: auto;
  z-index: 2;
  width: 8px;
  height: 8px;
  margin-top: 12px;
  margin-right: 0;
  margin-left: 0;
  border-radius: 50%;
  background-color: #f96a4c;
  box-shadow: 0 0 0 6px rgba(249, 106, 76, 0.2), 0 0 0 12px #fff;
`

const Job = styled.div`
  padding-bottom: 48px;
`

const JobHeading = styled.h3`
  margin-bottom: 8px;
  margin-top: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`

const JobDescription = styled.div`
  margin-bottom: 12px;
  color: #666d7a;
  font-size: 13px;
  line-height: 20px;
`

const TagBadge = styled.div`
  display: inline-block;
  margin-top: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 2px 11px;
  border-radius: 32px;
  background-color: #f2f3f5;
  transition: background-color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: #151515;
  font-size: 11px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
`

const JobBadge = styled(TagBadge)`
  margin-top: 6px;
  margin-right: 0;
  margin-bottom: 0;
  cursor: default;
`

const SectionLeft = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 4;
  grid-column-end: span 4;
  align-self: start;
`

const SectionRight = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 6;
  grid-column-end: 13;
`

const StyledHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
`
const StyledText = styled.div`
  color: #666d7a;
`

const DownloadButton = styled.a`
  height: 48px;
  padding: 11px 24px;
  background-color: #f83f5a;
  transition: background-color 200ms ease;
  font-size: 15px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  color: white;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
  &:hover {
    background-color: #ec2f4b;
  }
`

const Career = ({ jobHistoryJson, resume }) => {
  return (
    <Wrapper>
      <Section>
        <SectionLeft>
          <StyledHeader>Work History</StyledHeader>
          <StyledText>
            Versatile front end engineer with user experience knowledge and design sensibility,
            drawing from years of experience working directly with customers in marketing.
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
      </Section>
    </Wrapper>
  )
}

export default Career
