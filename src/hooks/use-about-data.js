import { graphql, useStaticQuery } from 'gatsby'

export const useAboutData = () => {
  const { contentfulAboutPage } = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        resumeSectionHeader
        resumeSummary {
          resumeSummary
        }
        title
        bioHeader {
          bioHeader
        }
        bioText {
          bioText
        }
        resume {
          file {
            url
            fileName
          }
          url
        }
        fullSkillsList {
          skillLogos {
            id
            description
            url
            title
            gatsbyImageData(
              layout: FIXED
              width: 44
              height: 44
              quality: 100
              placeholder: BLURRED
            )
            description
            title
          }
        }
        writerQuote {
          raw
        }
        pageHeader {
          pageHeader
        }
        subhead
        profilePic {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          description
          title
        }
      }
    }
  `)
  return contentfulAboutPage
}
