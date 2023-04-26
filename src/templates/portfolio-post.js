import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import get from 'lodash/get'
import React from 'react'
import styled from 'styled-components'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PortfolioNavigation from '../components/portfolio/portfolio-navigation'
import Seo from '../components/seo'
import PortfolioSlider from '../components/slider/portfolio-slider'
import TestimonialCard from '../components/testimonial-card'
import Section from '../components/ui/section'
import Text from '../components/ui/text'

const MainGrid = styled.div`
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  padding-top: 32px;
  perspective: 2000px;

  .mobileImage {
    display: none;
    @media screen and (max-width: 990px) {
      display: block;
      margin-bottom: 32px;
      grid-row-start: 1;
      grid-column: 1/13;
    }

    .infoCellHeader {
      margin-right: 8px;
      color: #777;
    }

    .sectionHeader {
      margin: 23px 0 16px 0;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
    }
`

const BodyWrapper = styled.div`
  position: relative;
  top: 8px;
  flex: 1;
  grid-column: 1/13;
  text-align: left;
  @media (max-width: 990px) {
    position: static;
    grid-column: 1/13;
    padding: 0;
  }

  .bodyImage {
    margin: 40px 0 60px 0;
  }
`
const WorkIntro = styled.div`
  flex-direction: row;
  grid-row-start: 1;
  grid-column: 1/13;
  display: flex;
  margin: 0;
  font-size: 17px;
  line-height: 24px;
  padding: 60px 0;
  align-items: flex-start;
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .workCardDescription {
    font-size: 17px;
    line-height: 24px;
    padding: 16px 0;
    color: #666d7a;
    font-weight: 500;
    margin: 0;
    width: 50%;
    padding-right: 10%;
    text-align: left;

    @media (max-width: 990px) {
      width: 80%;
      padding-right: 0;
      text-align: center;
      margin-bottom: 24px;
    }
  }
`

const WorkBlocks = styled.div`
  text-align: center;
  display: grid;
  overflow: hidden;
  flex: 1;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e8ed;
  border-radius: 8px;
`

const WorkBlock = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 0 0 0 #e4e8ed;
  padding-right: 40px;
  padding-left: 40px;
`
const WorkBlockHeading = styled.h6`
  margin-top: 0px;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  @media screen and (max-width: 990px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
`
const WorkBlockInfo = styled.div`
  font-size: 17px;
  line-height: 24px;
  color: #666d7a;
  font-weight: 500;
  @media screen and (max-width: 990px) {
    font-size: 15px;
    line-height: 20px;
  }
`

const SliderWrapper = styled.div`
  padding-top: 60px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const TestimonialsContainer = styled.div`
  width: 100%;
  margin-bottom: 64px;
  padding-right: 8px;
  padding-left: 8px;
  column-count: 2;
  @media screen and (max-width: 990px) {
    column-count: 1;
  }
`

const Col = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isEven ? '1fr 1fr' : '1fr 1fr 1fr'};

  grid-template-rows: auto;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

    const BulletText = ({ children }) => <ul>{children}</ul>
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
        [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
        [BLOCKS.UL_LIST]: (node, children) => (
          <BulletText>{children}</BulletText>
        ),
        // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          console.log('node?.data', node?.data)
          const { name } = node?.data?.target
          return (
            <>
              <TestimonialCard testimonial={node?.data?.target} />
              <pre>
                <code>{JSON.stringify(node, null, 2)}</code>
              </pre>
            </>
          )
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImageData, description } = node?.data?.target
          if (!gatsbyImageData) {
            // asset is not an image
            return null
          }
          return (
            <GatsbyImage
              imgStyle={{
                display: 'block',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#e4e8ed',
              }}
              className="bodyImage"
              image={gatsbyImageData}
              alt={description || ''}
            />
          )
        },
      },
    }

    return (
      <Layout header={post?.title} location={this.props.location}>
        <Seo title={post?.title} />
        {post?.slider && (
          <SliderWrapper>
            <PortfolioSlider slideContent={post?.sliderSizedImages} />
          </SliderWrapper>
        )}
        <Section color="white" noPaddingTop>
          <MainGrid>
            <BodyWrapper>
              {post?.body?.raw && renderRichText(post.body, options)}
              {post?.shortQuotes &&
                post?.shortQuotes?.map((val) => {
                  return <TestimonialCard key={val.id} testimonial={val} />
                })}
            </BodyWrapper>
            <WorkIntro>
              {post?.workCardDescription?.workCardDescription && (
                <p className="workCardDescription">
                  {post?.workCardDescription?.workCardDescription}
                </p>
              )}
              <WorkBlocks>
                <WorkBlock>
                  {post?.title && (
                    <>
                      <WorkBlockHeading>Company</WorkBlockHeading>
                      <WorkBlockInfo>{post?.client}</WorkBlockInfo>
                    </>
                  )}
                </WorkBlock>
                <WorkBlock>
                  {post?.role && (
                    <>
                      <WorkBlockHeading>Role</WorkBlockHeading>
                      <WorkBlockInfo>{post?.role}</WorkBlockInfo>
                    </>
                  )}
                </WorkBlock>
              </WorkBlocks>
            </WorkIntro>
          </MainGrid>
        </Section>

        {post?.testimonials && (
          <Section noPaddingTop>
            <TestimonialsContainer>
              {post?.testimonials.map((val) => (
                <TestimonialCard key={val.id} testimonial={val} />
              ))}
            </TestimonialsContainer>
          </Section>
        )}

        {post?.inTheNews && (
          <Section textLabel={post?.title} heading="In the News" color="grey">
            <Col
              isEven={
                post?.inTheNews.length < 3 && post?.inTheNews.length % 2 === 0
              }
            >
              {post?.inTheNews &&
                post?.inTheNews.map((val) => {
                  return <InfoCard key={val.id} info={val} />
                })}
            </Col>
          </Section>
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
      title
      slider
      technology {
        id
        longList
      }
      workCardDescription {
        workCardDescription
      }
      shortQuotes {
        id
        name
        title
        articleLink
        company
        text {
          text
        }
      }
      testimonials {
        id
        title
        company
        name
        image {
          description
          gatsbyImageData
        }
        paragraphText {
          raw
        }
      }
      testimonialQuote {
        id
        blurbQuote {
          blurbQuote
        }
        title
        name
        company
      }
      inTheNews {
        id
        source
        linkTextOptions
        pdf {
          url
        }
        title
        url
        heading
        newsImage {
          description
          gatsbyImageData
        }
        summary {
          summary
        }
      }
      seeItLive {
        linkText
        title
        url
      }
      role
      client
      slug
      title
      client
      body {
        raw
        references {
          ... on ContentfulTestimonial {
            contentful_id
            __typename
            name
            company
            blurbQuote {
              id
            }
            paragraphText {
              raw
            }
            title
            image {
              gatsbyImageData
            }
          }
          ... on ContentfulAsset {
            contentful_id
            __typename
            description
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 100
            )
          }
        }
      }
      sliderSizedImages {
        description
        gatsbyImageData(
          cropFocus: TOP
          quality: 70
          layout: CONSTRAINED
          height: 1500
          aspectRatio: 1.3
          placeholder: TRACED_SVG
        )
        id
      }
      heroImage {
        description
        gatsbyImageData(
          width: 1170
          height: 720
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 80
        )
      }
    }
    previous: contentfulPortfolioPost(slug: { eq: $previousPostSlug }) {
      slug
      id
      title
      heroImage {
        description
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          height: 165
          width: 165
        )
      }
    }
    next: contentfulPortfolioPost(slug: { eq: $nextPostSlug }) {
      slug
      id
      title
      heroImage {
        description
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          height: 165
          width: 165
        )
      }
    }
  }
`
