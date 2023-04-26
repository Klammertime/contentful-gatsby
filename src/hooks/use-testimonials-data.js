import { graphql, useStaticQuery } from 'gatsby'

export const useTestimonialData = () => {
  const { contentfulCollection } = useStaticQuery(graphql`
    query {
      contentfulCollection(contentType: { eq: "Testimonials" }) {
        id
        collectionItems {
          ... on ContentfulTestimonial {
            id
            name
            image {
              gatsbyImageData
            }
            title
            paragraphText {
              raw
            }
          }
        }
      }
    }
  `)
  return contentfulCollection
}
