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
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import FeatureAccordion from '../components/featureAccordion/feature-accordion'

const MainGrid = styled.div`
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  padding-top: 0;
  perspective: 2000px;
`

const RightContainer = styled.div`
  grid-row: 2;
  grid-column: 8/13;

  @media screen and (max-width: 990px) {
    grid-row-start: 2;
    grid-column: 1/13;
  }
`

const BodyWrapper = styled.div`
  position: relative;
  top: 0;
  flex: 1;
  grid-row: 2;
  grid-column: ${(props) => (props.sidebar ? '1/8' : '1/13')};
  text-align: left;

  @media (max-width: 990px) {
    position: static;
    grid-row-start: 3;
    grid-column: 1/13;
    padding: 0;
  }

  .bodyImage {
    margin: 0 0 60px 0;
    border: 1px solid #e4e4e4;

    @media (max-width: 990px) {
      border: none;
    }
  }

  p {
    max-width: 50rem;
  }
`

const WorkIntro = styled.div`
  display: flex;
  flex-direction: row;
  grid-row-start: 1;
  grid-column: 1/13;
  align-items: flex-start;
  margin: 0 0 20px 0;
  padding: 60px 0;
  font-size: 17px;
  line-height: 24px;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }
`
const WorkCardDescription = styled.p`
  width: 50%;
  margin: 0;
  padding-top: 16px;
  padding-right: 10%;
  padding-bottom: 16px;
  color: #666d7a;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  text-align: left;

  @media (max-width: 990px) {
    width: 80%;
    margin-bottom: 24px;
    padding-right: 0;
    text-align: center;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`

const WorkBlocks = styled.div`
  display: grid;
  flex: 1;
  grid-auto-columns: 1fr;
  grid-row-gap: 0;
  grid-column-gap: 0;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  text-align: center;
  border-color: #e4e8ed;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`

const WorkBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: 1px 0 0 0 #e4e8ed;
  @media screen and (max-width: 767px) {
    padding: 24px 32px;
  }
  @media screen and (max-width: 479px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`

const WorkBlockHeading = styled.h6`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  @media screen and (max-width: 990px) {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 18px;
  }
`
const WorkBlockInfo = styled.div`
  color: #666d7a;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  @media screen and (max-width: 990px) {
    font-size: 15px;
    line-height: 20px;
  }
`

const SliderWrapper = styled.div`
  grid-row-start: 2;
  grid-column: 1/13;
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
  grid-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

class PortfolioPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPortfolioPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const Bold = ({ children }) => <span className="bold"> {children}</span>
    const ParagraphText = ({ children }) => (
      <Text margin="0 0 1.55rem 0" variant="body" asType="p">
        {children}
      </Text>
    )

    const BulletText = ({ children }) => (
      <Text margin="0 0 1.55rem 0" variant="bulletText" asType="ul">
        {children}
      </Text>
    )
    const Heading2 = ({ children }) => (
      <Text margin="0 0 12px 0" variant="large" asType="h2">
        {children}
      </Text>
    )

    const Heading3 = ({ children }) => (
      <Text margin="0 0 12px 0" variant="medium" asType="h3">
        {children}
      </Text>
    )
    const Heading4 = ({ children }) => (
      <Text margin="0 0 12px 0" variant="small" asType="h4">
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
        [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <ParagraphText>{children}</ParagraphText>
        ),
        [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
        [BLOCKS.UL_LIST]: (node, children) => (
          <BulletText>{children}</BulletText>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => {
          return documentToReactComponents(node, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, children) => children,
              [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
            },
          })
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
            <BodyWrapper sidebar={post?.sidebar}>
              {post?.body?.raw && renderRichText(post.body, options)}
              {post?.shortQuotes &&
                post?.shortQuotes?.map((val) => {
                  return <TestimonialCard key={val.id} testimonial={val} />
                })}
            </BodyWrapper>

            {post?.sidebar && (
              <RightContainer>
                <FeatureAccordion featuresList={post?.featuresAccordion} />
              </RightContainer>
            )}

            <WorkIntro>
              {post?.workCardDescription?.workCardDescription && (
                <WorkCardDescription>
                  {post?.workCardDescription?.workCardDescription}
                </WorkCardDescription>
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
              {post?.testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
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
      sidebar
      featuresAccordion {
        title
        info {
          info
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
        gatsbyImageData(aspectRatio: 1.6, layout: FULL_WIDTH, width: 890)
        id
      }
      heroImage {
        description
        gatsbyImageData(
          width: 3000
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
          width: 500
          height: 500
          outputPixelDensities: [0.25, 0.5, 1, 2]
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
          aspectRatio: 1
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 100
        )
      }
    }
  }
`
