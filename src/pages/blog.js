import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// import ArticlePreview from '../components/article-preview'
class BlogIndex extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout header="Blog" location={this.props.location}>
        <Seo title="Blog" />
        {/*<ArticlePreview posts={posts} />*/}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
        body {
          raw
        }
      }
    }
  }
`
