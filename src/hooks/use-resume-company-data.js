import { graphql, useStaticQuery } from 'gatsby'

export const useResumeCompanyData = () => {
  const { contentfulCollection } = useStaticQuery(graphql`
    query {
      contentfulCollection(identifier: { eq: "Resume Experience Section" }) {
        id
        collectionItems {
          ... on ContentfulResumeCompanySection {
            id
            bullets {
              raw
            }
            company
            jobTitle
            location
          }
        }
      }
    }
  `)
  return contentfulCollection
}
