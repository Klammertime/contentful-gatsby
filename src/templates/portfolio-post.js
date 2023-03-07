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
import * as styles from './portfolio-post.module.css'
import Section from '../components/section'
import PortfolioNavigation from '../components/portfolio-navigation'

const MainGrid = styled.div`
  width: 100%;
  perspective: 2000px;
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  margin: 0 auto;
  padding-top: 32px;
`

const ProjectImagesWrapper = styled.div`
  display: block;
  grid-column: 1/8;
  position: sticky;
  top: 48px;
  padding: 16px 15px 64px 0;
  flex: 1;
  text-align: left;

  @media (max-width: 990px) {
    padding: 0;
    grid-column: 1/13;
    position: static;
  }
`

const InfoBoxWrapper = styled.div`
  position: sticky;
  top: 48px;
  display: block;
  margin-left: 8.33%;
  padding: 16px 15px 64px 0;
  flex: 1;
  text-align: left;
  grid-column: 9/13;
  @media screen and (max-width: 990px) {
    padding: 0;
    grid-column: 2/12;
    position: static;
    grid-row-start: 1;
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    grid-column: 1/13;
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
                'margin-bottom': '24px',
              }}
              image={gatsbyImageData}
              alt="get correct one"
              imgClassName={styles.imageEmbed}
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
                <div className={styles.body}>
                  {post.body?.raw && renderRichText(post.body, options)}
                </div>
              </div>
            </ProjectImagesWrapper>
            <InfoBoxWrapper>
              <div data-ix="fade-left" className={styles.workSidebar}>
                <h2 className={styles.sectionHeader}>Framerio</h2>
                <p className={styles.workDescription}>
                  Writing result-oriented ad copy is difficult, as it must
                  appeal to, entice, and convince consumers to take action.
                  There is no magic formula.
                </p>
                <div className={styles.workDetails}>
                  <div className={styles.workDetailsCell}>
                    <div className={styles.workDetailsCellHeader}>Client:</div>
                    <div>Webflow</div>
                  </div>
                  <div className={styles.workDetailsCell}>
                    <div className={styles.workDetailsCellHeader}>
                      Release Date:
                    </div>
                    <div>May 2017</div>
                  </div>
                  <div className={styles.workDetailsCell}>
                    <div className={styles.workDetailsCellHeader}>
                      Category:
                    </div>
                    <div>Mobile</div>
                  </div>
                  <div className={styles.workDetailsCell}>
                    <div className={styles.workDetailsCellHeader}>Link:</div>
                    <a href="https://elasticthemes.com">View It Live</a>
                  </div>
                </div>
              </div>
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
