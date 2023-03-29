import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import get from 'lodash/get'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import PortfolioNavigation from '../components/portfolio/portfolio-navigation'
import Seo from '../components/seo'
import PortfolioSlider from '../components/slider/portfolio-slider'
import Link from '../components/ui/link'
import Section from '../components/ui/section'
import Text from '../components/ui/text'

const MainGrid = styled.div`
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  padding-top: 32px;
  perspective: 2000px;
`

const ProjectWrapper = styled.div`
  position: relative;
  top: 8px;
  flex: 1;
  grid-column: 1/9;
  text-align: left;
  @media (max-width: 990px) {
    position: static;
    grid-column: 1/13;
    padding: 0;
  }
`

const InfoBoxWrapper = styled.div`
  grid-row-start: 1;
  //grid-column: 1/13;
  flex: 1;
  grid-column: 10/13;
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
  border-bottom: 1px solid var(--border);
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

    const Bold = ({ children }) => <span className="bold"> {children}</span>
    const ParagraphText = ({ children }) => (
      <Text margin="0 0 24px 0" variant="body" asType="p">
        {children}
      </Text>
    )

    const Heading2 = ({ children }) => (
      <Text margin="0 0 16px 0" variant="large" asType="h2">
        {children}
      </Text>
    )

    const Heading3 = ({ children }) => (
      <Text margin="20px 0 12px 0" variant="medium" asType="h3">
        {children}
      </Text>
    )
    const options = {
      renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
        [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <ParagraphText>{children}</ParagraphText>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImageData } = node?.data?.target
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
      <Layout header={post?.title} location={this.props.location}>
        <Seo title={post?.title} />
        <Section color="offWhite" noPaddingTop>
          {post?.portfolioImages && (
            <PortfolioSlider slideContent={post?.portfolioImages} />
          )}
        </Section>
        <Section color="white" noPaddingTop>
          <MainGrid>
            <ProjectWrapper>
              {post.body?.raw && renderRichText(post.body, options)}
            </ProjectWrapper>
            <InfoBoxWrapper>
              <WorkSidebar>
                {post?.title && (
                  <Text asType="h2" variant="large">
                    {post.title}
                  </Text>
                )}
                {post?.workDescription?.workDescription && (
                  <WorkDescription>
                    {post?.workDescription?.workDescription}
                  </WorkDescription>
                )}

                <WorkDetails>
                  {post?.title && (
                    <WorkDetailsCell>
                      <WorkDetailsCellHeader>Client:</WorkDetailsCellHeader>
                      <span> {post?.title}</span>
                    </WorkDetailsCell>
                  )}
                  {post?.releaseDate && (
                    <WorkDetailsCell>
                      <WorkDetailsCellHeader>
                        Release Date:
                      </WorkDetailsCellHeader>
                      <span></span>
                    </WorkDetailsCell>
                  )}
                  {post?.role && (
                    <WorkDetailsCell>
                      <WorkDetailsCellHeader>Role:</WorkDetailsCellHeader>
                      <span>{post?.role}</span>
                    </WorkDetailsCell>
                  )}
                  {post?.seeItLive?.url && (
                    <WorkDetailsCell>
                      <WorkDetailsCellHeader>Link:</WorkDetailsCellHeader>
                      <Link to={post?.seeItLive?.url}>View It Live</Link>
                    </WorkDetailsCell>
                  )}
                </WorkDetails>
              </WorkSidebar>
            </InfoBoxWrapper>
          </MainGrid>
        </Section>
        {post?.portfolioImages && (
          <PortfolioSlider slideContent={post?.portfolioImages} />
        )}
        <PortfolioNavigation
          nextImg={next?.heroImage?.gatsbyImageData}
          prevImg={previous?.heroImage?.gatsbyImageData}
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
      workCardDescription {
        workCardDescription
      }
      workDescription {
        workDescription
      }
      seeItLive {
        linkText
        title
        url
      }
      role
      client
      inTheNews {
        id
        summary {
          summary
        }
        quote {
          id
          quote
        }
      }
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
              quality: 100
            )
          }
        }
      }
      portfolioImages {
        portfolioId
        portfolioImage {
          gatsbyImageData(
            height: 1280
            width: 1280
            cropFocus: TOP
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }

      heroImage {
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    previous: contentfulPortfolioPost(slug: { eq: $previousPostSlug }) {
      slug
      title
      heroImage {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          height: 150
          width: 150
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
          height: 150
          width: 150
        )
      }
    }
  }
`
