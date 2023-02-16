import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './portfolio-post.module.css'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
  max-width: 1200px;
`

const MainGrid = styled.div`
  width: 100%;
  perspective: 2000px;
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  margin: 0 auto;
`

const Sidebar = styled.div`
  grid-column: 10/13;
  padding: 0 10px;
  @media (max-width: 990px) {
    padding: 0 20px;
    grid-column: 1/13;
    grid-row: 1;
  }
`

const Heading = styled.h2`
  grid-column: 1/2;
  margin-bottom: 16px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`
const Description = styled.p`
  color: #777;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 24px;
`

const Item = styled.div`
  flex-direction: column;
  align-items: start;
  display: flex;
  padding: 20px 0;
  flex: 0 auto;
  font-size: 15px;
  line-height: 24px;
  grid-column: 1/2;
  border-bottom: 1px solid #e4e4e4;
`

const ItemTitle = styled.p`
  color: #151515;
  font-weight: 700;
  margin-right: 8px;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 18px;
`

const ItemText = styled.p`
  margin-bottom: 0;
`

const AlteredMainGrid = styled.div`
  width: 100%;
  perspective: 2000px;
  display: grid;
  grid: auto-flow auto / 1fr;
  grid-gap: 0 30px;
  position: sticky;
  top: 100px;
  display: block;
  padding: 0;
  flex: 1;
  text-align: left;
`

const ImageCaption = styled.p`
  margin: 0 0 20px 0;
  font-size: 15px;
  line-height: 24px;
`

const ImageCaptionHeading = styled.h3`
  margin: 50px 0 16px 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`

const StyledLink = styled.a`
  font-weight: 500;
  color: #f83f5a;
  &:hover {
    text-decoration: underline;
  }
`

const StyledBlockquote = styled.blockquote`
  margin: 24px 0;
  padding: 8px 30px;
  border-left: 2px solid #f96a4c;
  font-size: 17px;
  line-height: 24px;
  text-align: left;
`

const ProjectImagesWrapper = styled.div`
  display: block;
  grid-column: 1/9;
  margin: 20px 0 14px 0;
  padding: 0 10px;
  @media (max-width: 990px) {
    padding: 0 20px;
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
                  const { gatsbyImage, description } = node.data.target
                  return (
                      <GatsbyImage
                          image={getImage(gatsbyImage)}
                          alt={description}
                      />
                  )
              },
          },
      };

        return (
            <Layout location={this.props.location}>
                <Seo
                    title={post.title}
                    // description={plainTextDescription}
                    image={`http:${post.heroImage.resize.src}`}
                />
                <Hero
                    image={post.heroImage?.gatsbyImage}
                    title={post.title}
                />
              <StyledSection>
                <MainGrid>
                  <ProjectImagesWrapper>

              <GatsbyImage
                image={post.image1?.gatsbyImage}
                imgStyle={{
                  display: "block",
                  margin: "14px 0 24px 0"
                }}
                alt="project image 1"
              />
              <ImageCaptionHeading>Project</ImageCaptionHeading>
              <ImageCaption></ImageCaption>
              <GatsbyImage
                image={post.image2?.gatsbyImage}
                imgStyle={{
                  display: "block",
                  margin: "14px 0 24px 0"
                }}
                alt="project image 1"
              />
                    <ImageCaptionHeading>Technology</ImageCaptionHeading>

                    <GatsbyImage
                image={post.image3?.gatsbyImage}
                imgStyle={{
                  display: "block",
                  margin: "14px 0 24px 0"
                }}
                alt="project image 1"
              />
                    <ImageCaptionHeading>Result</ImageCaptionHeading>
                  </ProjectImagesWrapper>
                </MainGrid>
                  </StyledSection>


                  <div className={styles.container}>
                    <div className={styles.article}>
                        <div className={styles.body}>
                          "body is here usually"
                          {/*{post.body?.raw && renderRichText(post.body, options)}*/}
                        </div>
                        <Tags tags={post.tags} />
                        {(previous || next) && (
                            <nav>
                                <ul className={styles.articleNavigation}>
                                    {previous && (
                                        <li>
                                            <Link to={`/portfolio/${previous.slug}`} rel="prev">
                                                ← {previous.title}
                                            </Link>
                                        </li>
                                    )}
                                    {next && (
                                        <li>
                                            <Link to={`/portfolio/${next.slug}`} rel="next">
                                                {next.title} →
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
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
      slug
      title
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      image1 {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
      }
      image2 {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
      }
      image3 {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
      }
      tags
    }
    previous: contentfulPortfolioPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulPortfolioPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
