import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import styled from 'styled-components'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Section from '../components/section'
import PortfolioNavigation from '../components/portfolio-navigation'
import * as styles from './portfolio-post.module.css'

const MainGrid = styled.div`
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  padding-top: 32px;
  perspective: 2000px;
`

const ProjectImagesWrapper = styled.div`
  position: relative;
  top: 8px;
  flex: 1;
  grid-column: 1/8;
  text-align: left;
  @media (max-width: 990px) {
    position: static;
    grid-column: 1/13;
    padding: 0;
  }
`

const InfoBoxWrapper = styled.div`
  flex: 1;
  grid-column: 9/13;
  @media screen and (max-width: 990px) {
    grid-row-start: 1;
    grid-column: 2/12;
  }
  @media screen and (max-width: 767px) {
    grid-column: 1/13;
  }
`

const WorkDescription = styled.p`
  color: #777;
  font-size: 15px;
  line-height: 24px;
`

const WorkDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const WorkDetailsCellHeader = styled.div`
  margin-right: 8px;
  color: #777;
`

const WorkDetailsCell = styled.div`
  display: flex;
  flex: 0 auto;
  padding: 12px 0;
  font-size: 15px;
  line-height: 24px;
  border-bottom: 1px solid #e4e4e4;
`

const WorkSidebar = styled.div`
  position: sticky;
  top: 80px;
  flex: 1;
  padding-top: 16px;
  @media screen and (max-width: 990px) {
    margin-right: 0;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    position: static;
  }
`

class PortfolioPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPortfolioPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    // const plainTextDescription = documentToPlainTextString(
    //   JSON.parse(post.description.raw)
    // )

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImageData } = node.data.target
          if (!gatsbyImageData) {
            // asset is not an image
            return null
          }
          return (
            <GatsbyImage
              imgStyle={{
                display: 'block',
                margin: '5px 0 32px 0',
              }}
              image={gatsbyImageData}
              alt="get correct one"
            />
          )
        },
      },
    }

    return (
      <Layout header={post.title} location={this.props.location}>
        <Seo
          title={post.title}
          // description={plainTextDescription}
        />
        <Section color="white" noPaddingTop>
          <MainGrid>
            <ProjectImagesWrapper>
              <div className={styles.article}>
                {post.body?.raw && renderRichText(post.body, options)}
              </div>
            </ProjectImagesWrapper>
            <InfoBoxWrapper>
              <WorkSidebar>
                <h2>Framerio</h2>
                <WorkDescription>
                  Writing result-oriented ad copy is difficult, as it must
                  appeal to, entice, and convince consumers to take action.
                  There is no magic formula.
                </WorkDescription>

                <WorkDetails>
                  <WorkDetailsCell>
                    <WorkDetailsCellHeader>Client:</WorkDetailsCellHeader>
                    <span>Webflow</span>
                  </WorkDetailsCell>
                  <WorkDetailsCell>
                    <WorkDetailsCellHeader>Release Date:</WorkDetailsCellHeader>
                    <span>May 2017</span>
                  </WorkDetailsCell>
                  <WorkDetailsCell>
                    <WorkDetailsCellHeader>Category:</WorkDetailsCellHeader>
                    <span>Mobile</span>
                  </WorkDetailsCell>
                  <WorkDetailsCell>
                    <WorkDetailsCellHeader>Link:</WorkDetailsCellHeader>
                    <a href="https://elasticthemes.com">View It Live</a>
                  </WorkDetailsCell>
                </WorkDetails>
              </WorkSidebar>
            </InfoBoxWrapper>
          </MainGrid>
        </Section>

        <PortfolioNavigation
          nextImg={next?.heroImage.gatsbyImageData}
          prevImg={previous?.heroImage.gatsbyImageData}
          next={next}
          previous={previous}
        />
      </Layout>
    )
  }
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulPortfolioPost(slug: { eq: $slug }) {
      role
      client
      slug
      title
      tags
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1280
              height: 1280
            )
          }
        }
      }
      heroImage {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 1280)
      }
    }
    previous: contentfulPortfolioPost(slug: { eq: $previousPostSlug }) {
      slug
      title
      heroImage {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          height: 100
          width: 100
        )
      }
    }
    next: contentfulPortfolioPost(slug: { eq: $nextPostSlug }) {
      slug
      title
      heroImage {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          height: 100
          width: 100
        )
      }
    }
  }
`
