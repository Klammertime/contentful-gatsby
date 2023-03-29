import React from 'react'
import styled from 'styled-components'
import Link from './link'
import Section from './section'
import Text from './text'

const Panel = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px solid var(--border);

  @media screen and (max-width: 991px) {
    grid-column-gap: 24px;
  }

  @media screen and (max-width: 479px) {
    grid-row-gap: 12px;
    grid-template-rows: auto auto;
    padding: 24px 0;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
  }

  .panel-right {
    display: flex;
    @media screen and (max-width: 479px) {
      display: none;
    }
  }
`

const BreadcrumbDivider = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 12px;
  background-color: var(--light-grey);
  border-radius: 50%;

  @media screen and (max-width: 991px) {
    margin: 0 8px;
  }
`
const Breadcrumbs = ({ crumb, slug }) => {
  return (
    <Section color="white" noPadding>
      <Panel>
        <div className="breadcrumbs">
          <Link to="/">
            <Text as="span" variant="breadCrumb">
              Home
            </Text>
          </Link>
          <BreadcrumbDivider />
          <Link to="/">
            <Text as="span" variant="breadCrumb">
              {crumb}
            </Text>
          </Link>
          {slug && (
            <>
              <BreadcrumbDivider />
              <Text as="span" variant="breadCrumb">
                {slug}
              </Text>
            </>
          )}
        </div>
        <div className="panel-right"></div>
      </Panel>
    </Section>
  )
}

export default Breadcrumbs
