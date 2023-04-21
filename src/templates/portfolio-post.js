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
import Link from '../components/ui/link'
import Section from '../components/ui/section'
import Text from '../components/ui/text'
import Tags from '../components/ui/tags'

const MainGrid = styled.div`
  display: grid;
  grid: auto-flow auto / repeat(12, 1fr [col-start]);
  padding-top: 32px;
  perspective: 2000px;

  .workCardDescription {
    color: #777;
    font-size: 15px;
    line-height: 24px;
  }

  .info {
    display: flex;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
    padding-top: 12px;
    padding-bottom: 40px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  //TODO what is this also doing here when it has its own
  // styled component
  .infoCell {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    align-items: center;
    flex: 0 auto;
    border-bottom: 1px solid #e4e4e4;
    font-size: 15px;
    line-height: 24px;
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
  grid-column: 1/9;
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

const InfoBoxWrapper = styled.div`
  grid-row-start: 1;
  flex: 1;
  grid-column: 10/13;
  margin-top: 40px;
  @media screen and (max-width: 990px) {
    grid-row-start: 1;
    grid-column: 1/13;
  }
`

const InfoBox = styled.div`
  position: sticky;
  top: 100px;
  flex: 1;
  @media screen and (max-width: 990px) {
    margin-right: 0;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    position: static;
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
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
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
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#e4e8ed',
              }}
              className="bodyImage"
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
                  return <TestimonialCard testimonial={val} />
                })}
            </BodyWrapper>

            <InfoBoxWrapper>
              <InfoBox>
                <h2 className="sectionHeader"> {post?.title}</h2>
                {post?.workCardDescription?.workCardDescription && (
                  <p className="workCardDescription">
                    {post?.workCardDescription?.workCardDescription}
                  </p>
                )}
                <div className="info">
                  {post?.title && (
                    <div className="infoCell">
                      <div className="infoCellHeader">
                        <Text variant="textGrey">Client:</Text>
                      </div>
                      <Text color="black" variant="textGrey">
                        {post?.client}
                      </Text>
                    </div>
                  )}
                  {post?.role && (
                    <div className="infoCell">
                      <div className="infoCellHeader">
                        <Text variant="textGrey">Role:</Text>
                      </div>
                      <Text color="black" variant="textGrey">
                        {post?.role}
                      </Text>
                    </div>
                  )}
                  {post?.seeItLive?.url && (
                    <div className="infoCell">
                      <div className="infoCellHeader">
                        <Text variant="textGrey">Link:</Text>
                      </div>

                      <Link to={post?.seeItLive?.url}>View It Live</Link>
                    </div>
                  )}
                </div>
                {post?.technology?.longList && (
                  <Tags tags={post?.technology?.longList} />
                )}
              </InfoBox>
            </InfoBoxWrapper>
          </MainGrid>
        </Section>

        {post?.testimonials && (
          <Section>
            <TestimonialsContainer>
              {post?.testimonials.map((val) => (
                <TestimonialCard testimonial={val} />
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
                  return <InfoCard info={val} />
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
        longList
      }
      workCardDescription {
        workCardDescription
      }
      shortQuotes {
        name
        title
        articleLink
        company
        text {
          text
        }
      }
      testimonials {
        title
        company
        name
        image {
          gatsbyImageData
        }
        text {
          text
        }
      }
      testimonialQuote {
        blurbQuote {
          blurbQuote
        }
        title
        name
        company
      }
      inTheNews {
        source
        linkTextOptions
        pdf {
          url
        }
        title
        url
        heading
        newsImage {
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
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 100
            )
          }
        }
      }
      sliderSizedImages {
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
